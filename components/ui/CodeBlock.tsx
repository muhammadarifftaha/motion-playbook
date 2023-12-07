"use client";

import React from "react";
import {
    Prism,
    Prism as SyntaxHighlighter,
    SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import {
    oneDark,
    dracula,
    coldarkDark, //candidate 1
    twilight as style,
} from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps extends SyntaxHighlighterProps {}

export default function CodeBlock({
    language,
    children: code,
}: CodeBlockProps) {
    return (
        <SyntaxHighlighter language={language} style={style}>
            {code}
        </SyntaxHighlighter>
    );
}
