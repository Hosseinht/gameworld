import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import App from "../App";
import ColorModeSwitch from "../components/ColorModeSwitch";
import Navbar from "../components/Navbar";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/ColorModeSwitch">
                <ColorModeSwitch/>
            </ComponentPreview>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;