"use client";

import {customTransition} from "@/styles/customTransition.styled";
import {staticHeader} from "@/styles/staticHeader.styled";
import {shuffle} from "@/app/shuffle/shuffle.styled";

import {App} from "@/components/App";

export default function Shuffle() {
    return (
        <>
            <style global jsx>{customTransition}</style>
            <style global jsx>{staticHeader}</style>
            <style global jsx>{shuffle}</style>
            <div className="shuffle">
                <App withTransition withShuffle viewTransitionNames={{card: true, feature: false }}/>
            </div>
        </>
    );
}