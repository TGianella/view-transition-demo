"use client";

import {useEffect, useState} from "react";
import {Header} from "@/components/Header";
import {Feature} from "@/components/Feature";
import {Card} from "@/components/Card";
import { colors as colorsData } from "@/data/colors"
import {flushSync} from "react-dom";
import {sattoloCycle} from "@/app/shuffle/shuffle.utils";
import {ViewTransitionNames} from "@/types";
import {Pager} from "@/components/Pager";

type appProps = {
    withTransition?: boolean;
    withShuffle?: boolean;
    withPager?: boolean;
    viewTransitionNames?: ViewTransitionNames;
}

export function App({ withTransition = false, withShuffle = false, withPager = false, viewTransitionNames = { card: false, feature: false },  }: appProps) {
    const [featured, setFeatured] = useState(-1);
    const [colors, setColors] = useState(colorsData);
    const [activePage, setActivePage] = useState(1);
    const colorsOffset = activePage - 1;
    const shouldShowPager = withPager && featured === -1;

    useEffect(() => {
        if (withShuffle) {
            const interval = setInterval(() => {
                document.startViewTransition(() => {
                    flushSync(() => {
                        setColors(sattoloCycle(colors));
                    });
                });
            }, 7000);

            return () => clearInterval(interval);
        }
    }, [withShuffle]);

    const handleCardClick = (i: number) => {
        if (withTransition) {
                document.startViewTransition(() => {
                    flushSync(() => {
                        setFeatured(i);
                    });
                });
        } else {
            setFeatured(i);
        }
    };

    const handleHeaderClick = () => {
        if (withTransition) {
            document.startViewTransition(() => {
                flushSync(() => {
                    setFeatured(-1);
                });
            });
        } else {
            setFeatured(-1);
        }
    }

    const handlePageChange = (page: number) => {
        const direction = page < activePage ? 'backwards' : 'forwards';

        if (withTransition) {
            flushSync(() => {
                document.startViewTransition({
                    //@ts-expect-error Experimental feature
                    update: () => {
                        setActivePage(page)
                    },
                    types: ['slide', direction]
                })
            })
        } else {
            setActivePage(page);
        }
    }

    const offsetColors = colors.slice(colorsOffset).concat(colors.slice(0, colorsOffset));

    return (
        <>
            {withShuffle ? null : <Header onClick={handleHeaderClick}/>}
            {featured === -1 ? (
                <div className="cards-list">
                    {offsetColors.map((color, i) => {
                        return <Card withName={!!viewTransitionNames['card']} onClick={() => handleCardClick(i)} color={color} key={color}/>;
                    })}
                </div>
            ) : (
                <div className="feature-wrapper">
                    <Feature withName={!!viewTransitionNames['feature']} color={colors[featured]}/>
                    {offsetColors
                        .filter((_, i) => i !== featured)
                        .slice(0, 6)
                        .map((color, i) => {
                            const index = i < featured ? i : i + 1;
                            return <Card withName={!!viewTransitionNames['card']} onClick={() => handleCardClick(index)} color={color} key={color}/>;
                        })}
                </div>
            )}
            {shouldShowPager ? <Pager activePage={activePage} handlePageChange={handlePageChange} pagesNumber={4} /> : null}
        </>
    );
}
