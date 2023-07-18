import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { data } from "@/app/data/projects";
import { StaticImageData } from "next/image";

interface DataInterface {
  id: number;
  title: string;
  subtitle: string;
  image: StaticImageData;
  district: string;
}

interface Data {
  data: DataInterface[];
  filteredData: DataInterface[];
}

const initialState = {
  data: data,
  filteredData: [],
} as Data;

export const projects = createSlice({
  name: "projetcs",
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<string>) => {
      state.filteredData = state.data.filter(
        (project: DataInterface) => project.district == action.payload
      );
    },
  },
});

export const { getData } = projects.actions;
export default projects.reducer;
