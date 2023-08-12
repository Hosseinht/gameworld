import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  // array of objects where each object has a property called platform of type Platform
  metacritic: number;
}

const UseGames = () => useData<Game>("/games");

export default UseGames;
