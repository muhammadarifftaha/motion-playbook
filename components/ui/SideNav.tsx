"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import componentList from "@/components/components.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Component {
    component: string;
    path: string;
}

export default function SideNav() {
    const [isExpanded, setIsExpanded] = React.useState(true);
    const toggleExpanded = React.useCallback(() => {
        setIsExpanded((isExpanded) => !isExpanded);
    }, [setIsExpanded]);
    const pathname = usePathname();
    return (
        <>
            <div
                className={cn(
                    "h-full grow-0 shrink-0",
                    "transition-all duration-500 ease-in-out",
                    isExpanded ? "w-96 px-4 " : "w-14 px-0"
                )}
            />
            <aside
                className={cn(
                    "bg-slate-100 h-screen flex flex-row justify-stretch items-center overflow-hidden fixed top-0 left-0 grow-0 shrink-0",
                    "transition-all duration-500 ease-in-out",
                    isExpanded ? "w-96 px-4 " : "w-14 px-0"
                )}
            >
                <div
                    className={cn(
                        "h-full flex-auto py-2 flex flex-col gap-6",
                        "transition-all duration-500 ease-in-out",
                        "overflow-hidden",
                        isExpanded ? "px-4 w-full" : "w-0 px-0"
                    )}
                >
                    <h1 className="w-full text-3xl font-semibold shrink-0 grow-0 h-auto text-clip whitespace-nowrap">
                        Motion Playbook
                    </h1>
                    <div
                        className={cn(
                            "flex flex-col gap-1 overflow-y-scroll overflow-x-hidden flex-auto mb-4 pe-3",
                            "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                        )}
                    >
                        {componentList.map(({ component, path }: Component) => (
                            <Link
                                key={component}
                                href={path}
                                className={cn(
                                    "w-full px-3 py-2 border-2 rounded group text-base border-neutral-300",
                                    pathname === path
                                        ? "bg-neutral-300 border-neutral-400"
                                        : "bg-transparent",
                                    "relative",
                                    "transition-all duration-300 ease-linear"
                                )}
                            >
                                <span className="w-full ">{component}</span>
                                <span className="absolute h-full top-0 left-0 w-0 group-hover:w-full transition-all duration-300  ease-linear -z-10 bg-neutral-300" />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-14 h-full flex-shrink-0 flex-grow-0 px-1 py-2 flex flex-col justify-start items-center">
                    <button
                        className={cn(
                            "text-black flex flex-col justify-center items-center",
                            "rounded",
                            "aspect-square p-2",
                            "hover:bg-gray-300"
                        )}
                        onClick={toggleExpanded}
                    >
                        <FontAwesomeIcon icon={faBars} size="xl" />
                    </button>
                </div>
            </aside>
        </>
    );
}
