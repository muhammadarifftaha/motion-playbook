import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/ui/SideNav";
import cn from "@/utils/className";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Motion Playbook",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={cn(
                    inter.className,
                    "flex flex-row overflow-x-hidden justify-start items-start relative"
                )}
            >
                <SideNav />
                {children}
            </body>
        </html>
    );
}
