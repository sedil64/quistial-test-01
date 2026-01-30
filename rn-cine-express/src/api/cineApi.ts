import axios from "axios";
import type { Show } from "../types/show";

export async function searchShows(query: string) {
  const res = await axios.get<Show[]>(
    `https://api.tvmaze.com/search/shows?q=${query}`
  );
  return res.data;
}
