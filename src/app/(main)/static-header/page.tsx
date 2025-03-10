"use client";

import {customTransition} from "@/app/(main)/custom-transition/customTransition.styled";
import {staticHeader} from "@/app/(main)/static-header/staticHeader.styled";
import {App} from "@/components/App";

export default function StaticHeader() {
    return (
        <>
            <style global jsx>{customTransition}</style>
            <style global jsx>{staticHeader}</style>
            <App withTransition />
        </>
    );
}
