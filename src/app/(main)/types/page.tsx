"use client";

import {customTransition} from "@/styles/customTransition.styled";
import {App} from "@/components/App";
import {staticHeader} from "@/styles/staticHeader.styled";
import {aspectRatioTransition} from "@/styles/aspectRatioTransition.styled";
import {viewTransitionTypes} from "@/styles/viewTransitionTypes.styled";

export default function ViewTransitionTypes() {
    return (
        <>
            <style global jsx>{viewTransitionTypes}</style>
            <style global jsx>{aspectRatioTransition}</style>
            <style global jsx>{customTransition}</style>
            <style global jsx>{staticHeader}</style>
            <App withTransition withPager viewTransitionNames={{card: true, feature: true}} />
        </>
    );
}