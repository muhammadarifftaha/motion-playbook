import { readFileSync } from "fs";
import Button from "./button/Button";
import LoadingWaves from "./loadingWaves/LoadingWaves";
import Input from "./input/Input";
import Navbar from "./navbar/Navbar";
import angularButton from "./button/variants/angular";
import angularLoadingWaves from "./loadingWaves/variants/angular";

interface ComponentsDetails {
    Component: any;
    styles: string;
    code: {
        [language: string]: {
            [fileType: string]: string;
        };
    };
}

const components: {
    [key: string]: ComponentsDetails;
} = {
    button: {
        Component: Button,
        styles: readFileSync("./components/button/Button.module.scss", "utf-8"),
        code: {
            react: {
                tsx: readFileSync("./components/button/Button.tsx", "utf-8"),
            },
            angular: angularButton,
        },
    },
    loading: {
        Component: LoadingWaves,
        styles: readFileSync(
            "./components/loadingWaves/LoadingWaves.module.scss",
            "utf-8"
        ),
        code: {
            react: {
                tsx: readFileSync(
                    "./components/loadingWaves/LoadingWaves.tsx",
                    "utf-8"
                ),
            },
            angular: angularLoadingWaves,
        },
    },
    navbar: {
        Component: Navbar,
        styles: readFileSync("./components/navbar/Navbar.module.scss", "utf-8"),
        code: {
            react: {
                tsx: readFileSync("./components/navbar/Navbar.tsx", "utf-8"),
            },
        },
    },
    input: {
        Component: Input,
        styles: readFileSync("./components/input/Input.module.scss", "utf-8"),
        code: {
            react: {
                tsx: readFileSync("./components/input/Input.tsx", "utf-8"),
            },
        },
    },
};

export default components;
