"use client";

import {customTransition} from "@/styles/customTransition.styled";
import {App} from "@/components/App";

export default function CustomTransition() {
    return (
        <>
            <style global jsx>{customTransition}</style>
            <App withTransition />
        </>
    );
}