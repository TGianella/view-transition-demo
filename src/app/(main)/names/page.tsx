"use client";

import {customTransition} from "@/styles/customTransition.styled";
import {staticHeader} from "@/styles/staticHeader.styled";
import {App} from "@/components/App";

export default function ViewTransitionNamesCards() {
    return (
        <>
            <style global jsx>{customTransition}</style>
            <style global jsx>{staticHeader}</style>
            <App withTransition viewTransitionNames={{card: true, feature: false }} />
        </>
    );
}