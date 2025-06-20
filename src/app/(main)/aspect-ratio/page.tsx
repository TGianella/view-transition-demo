"use client";

import {customTransition} from "@/styles/customTransition.styled";
import {App} from "@/components/App";
import {staticHeader} from "@/styles/staticHeader.styled";
import {aspectRatioTransition} from "@/styles/aspectRatioTransition.styled";

export default function CustomTransition() {
    return (
        <>
            <style global jsx>{aspectRatioTransition}</style>
            <style global jsx>{customTransition}</style>
            <style global jsx>{staticHeader}</style>
            <App withTransition viewTransitionNames={{card: true, feature: true}} />
        </>
    );
}