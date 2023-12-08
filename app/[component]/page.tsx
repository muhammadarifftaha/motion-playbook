import React from "react";
import components from "@/components/index";
import { capitalize, keys } from "lodash";
import CodeBlock from "@/components/ui/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ComponentPage({
    params: { component },
}: {
    params: { component: string };
}) {
    const { Component, code, styles } = components[component] || {};
    const languages = keys(code);

    if (!Component) {
        return (
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <h1 className="text-4xl font-semibold">404</h1>
                <p className="text-2xl">Component not found</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-start items-stretch w-full min-h-screen gap-6 px-12 py-8">
            <div className="w-full flex flex-col justify-center items-center h-[500px]">
                <Component />
            </div>
            <Tabs defaultValue={languages[0]} className="">
                <TabsList className="">
                    {languages.map((language) => (
                        <TabsTrigger
                            value={language}
                            key={language}
                            className=""
                        >
                            {capitalize(language)}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {keys(code).map((language) => (
                    <TabsContent
                        value={language}
                        className="flex flex-col justify-start items-stretch"
                        key={language}
                    >
                        {keys(code[language]).map((fileType) => (
                            <div
                                className="w-full flex flex-col gap-2"
                                key={fileType}
                            >
                                <CodeBlock language={fileType}>
                                    {code[language][fileType]}
                                </CodeBlock>
                            </div>
                        ))}
                    </TabsContent>
                ))}
            </Tabs>
            <div className="w-full flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">Styles</h2>
                <CodeBlock language="scss">{styles}</CodeBlock>
            </div>
        </div>
    );
}
