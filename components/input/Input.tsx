import { cn } from "@/lib/utils";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function Input({ label, ...props }: InputProps) {
    return (
        <div className="w-96 border flex flex-row justify-start items-center border-neutral-500 rounded-lg relative px-3 py-1.5 group focus-within:outline-2 focus-within:outline focus-within:outline-offset-1 focus-within:outline-blue-500">
            <label
                htmlFor=""
                className={cn(
                    "absolute px-2",
                    "group-focus-within:text-sm group-focus-within:-top-3 group-focus-within:left-1 group-focus-within:text-blue-500 group-focus-within:bg-white",
                    "transition-all duration-300 ease-linear",
                    "top-1 left-1 text-neutral-500 pointer-events-none"
                )}
            >
                First Name
            </label>
            <input {...props} className="w-full focus-within:outline-none" />
        </div>
    );
}
