import { readFileSync } from "fs";
import Button from "./button/Button";
import Input from "./input/Input";

interface ComponentsDetails {
    Component: any;
    styles?: string;
    code: {
        [language: string]: string;
    };
}

const components: {
    [key: string]: ComponentsDetails;
} = {
    button: {
        Component: Button,
        // styles: readFileSync("./components/button/Button.module.scss", "utf-8"),
        code: {
            react: readFileSync("./components/button/Button.tsx", "utf-8"),
        },
    },
    // input: {
    //     component: Input,
    //     code: {
    //         react: readFileSync("./components/input/Input.tsx", "utf-8"),
    //     },
    // },
};

export default components;
