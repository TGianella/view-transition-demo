"use client";

import {customTransition} from "@/app/(main)/custom-transition/customTransition.styled";
import {staticHeader} from "@/app/(main)/static-header/staticHeader.styled";
import {shuffle} from "@/app/shuffle/shuffle.styled";

import {App} from "@/components/App";

export default function Shuffle() {
    return (
        <>
            <style global jsx>{customTransition}</style>
            <style global jsx>{staticHeader}</style>
            <style global jsx>{shuffle}</style>
            <App withTransition withShuffle viewTransitionNames={{card: true}}/>
        </>
    );
}