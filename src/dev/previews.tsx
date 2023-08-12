import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import App from "../App";
import ColorModeSwitch from "../components/ColorModeSwitch";
import Navbar from "../components/Navbar";
import GameGrid from "../components/GameGrid";
import GameCard from "../components/GameCard";
import PlatformIconList from "../components/PlatformIconList";
import CriticScore from "../components/CriticScore";
import useGames from "../hooks/useGames";

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
            <ComponentPreview path="/GameGrid">
                <GameGrid/>
            </ComponentPreview>
            <ComponentPreview path="/GameCard">
                <GameCard />
            </ComponentPreview>
            <ComponentPreview path="/PlatformIconList">
                <PlatformIconList/>
            </ComponentPreview>
            <ComponentPreview path="/CriticScore">
                <CriticScore}/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;