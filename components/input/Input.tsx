import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function Input({ label, ...props }: InputProps) {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input {...props} />
        </div>
    );
}
