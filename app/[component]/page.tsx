import React from "react";
import components from "@/components";
import { keys } from "lodash";
import CodeBlock from "@/components/ui/CodeBlock";

export default function ComponentPage({
    params: { component },
}: {
    params: { component: string };
}) {
    const { Component, code } = components[component] || {};

    if (!Component) {
        return (
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <h1 className="text-4xl font-semibold">404</h1>
                <p className="text-2xl">Component not found</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-start items-stretch w-full min-h-screen">
            <div className="w-full flex flex-col justify-center items-center h-96">
                <Component />
            </div>

            <div className="w-full flex flex-col justify-start items-stretch">
                {keys(code).map((language) => (
                    <CodeBlock language="jsx" key="language">
                        {code[language]}
                    </CodeBlock>
                ))}
            </div>
        </div>
    );
}
