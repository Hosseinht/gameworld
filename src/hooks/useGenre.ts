import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const UseGenre = () => useData<Genre>("/genres");

export default UseGenre;
