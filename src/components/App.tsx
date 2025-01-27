"use client";

import {useEffect, useState} from "react";
import {Header} from "@/components/Header";
import {Feature} from "@/components/Feature";
import {Card} from "@/components/Card";
import { colors as colorsData } from "@/data/colors"
import {flushSync} from "react-dom";
import {sattoloCycle} from "@/app/shuffle/shuffle.utils";

export function App({ withTransition = false, withShuffle = false, viewTransitionNames = {},  }) {
    const [featured, setFeatured] = useState(-1);
    const [colors, setColors] = useState(colorsData);

    useEffect(() => {
        if (withShuffle) {
            console.log("###")
            const interval = setInterval(() => {
                document.startViewTransition(() => {
                    flushSync(() => {
                        setColors(sattoloCycle(colors));
                    });
                });
            }, 7000);

            return () => clearInterval(interval);
        }
    }, []);

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

    return (
        <>
            {withShuffle ? null : <Header onClick={handleHeaderClick}/>}
            {featured === -1 ? (
                <div className="cards-list">
                    {colors.map((color, i) => {
                        return <Card withName={!!viewTransitionNames['card']} onClick={() => handleCardClick(i)} color={color} key={color}/>;
                    })}
                </div>
            ) : (
                <div className="feature-wrapper">
                    <Feature withName={!!viewTransitionNames['feature']} color={colors[featured]}/>
                    {colors
                        .filter((_, i) => i !== featured)
                        .slice(0, 4)
                        .map((color, i) => {
                            const index = i < featured ? i : i + 1;
                            return <Card withName={!!viewTransitionNames['card']} onClick={() => handleCardClick(index)} color={color} key={color}/>;
                        })}
                </div>
            )}
        </>
    );
}
