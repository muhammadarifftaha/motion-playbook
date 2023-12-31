"use client";

import React from "react";
import {
    Prism as SyntaxHighlighter,
    SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps extends SyntaxHighlighterProps {}

export default function CodeBlock({
    language,
    children: code,
}: CodeBlockProps) {
    return (
        <SyntaxHighlighter
            language={language}
            style={coldarkDark}
            wrapLines
            wrapLongLines
        >
            {code}
        </SyntaxHighlighter>
    );
}
