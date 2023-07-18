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
  searchFilter: DataInterface[];
  inputValue: string;
}

const initialState = {
  data: data,
  filteredData: [],
  searchFilter: [],
  inputValue: "",
} as Data;

let status: string = "";

export const projects = createSlice({
  name: "projetcs",
  initialState,
  reducers: {
    selectFilter: (state, action: PayloadAction<string>) => {
      status = action.payload;
      state.filteredData = state.data.filter(
        (project: DataInterface) => project.district == action.payload
      );
    },

    seacrhFilter: (state, action: PayloadAction<string>) => {
      // 1. Variant
      state.inputValue = action.payload;

      if (state.filteredData.length < 1) {
        state.filteredData = state.data.filter((project: DataInterface) => {
          if (state.inputValue == "") {
            console.log(state.data);
            return project;
          } else if (
            project.title.toLowerCase().startsWith(state.inputValue.toLowerCase())
          ) {
            console.log(state.data);
            return project;
          }
        });
      } else {
        state.searchFilter = state.filteredData.filter((project) => {
          if (state.inputValue == "") {
            console.log(state.filteredData);
            return project;
          } else if (
            project.title.toLowerCase().startsWith(state.inputValue.toLowerCase())
          ) {
            console.log(state.filteredData);
            return project;
          }
        });
      }

      // 2. Variant
      // if (state.filteredData.length < 1) {
      //   status = "All";
      // }

      // if (status == "All") {
      //   console.log(status);
      //   state.filteredData = state.data.filter((project: DataInterface) => {
      //     if (action.payload == "") {
      //       console.log(state.data);
      //       return project;
      //     } else if (
      //       project.title.toLowerCase().startsWith(action.payload.toLowerCase())
      //     ) {
      //       console.log(state.data);
      //       return project;
      //     }
      //   });
      // } else {
      //   console.log(status);
      //   state.searchFilter = state.filteredData.filter(
      //     (project: DataInterface) => {
      //       if (action.payload == "") {
      //         console.log(state.filteredData);
      //         return project;
      //       } else if (
      //         project.title
      //           .toLowerCase()
      //           .startsWith(action.payload.toLowerCase())
      //       ) {
      //         console.log(state.filteredData);
      //         return project;
      //       }
      //     }
      //   );
      // }

      console.log(action.payload);
      console.log(state.filteredData);
    },
  },
});

export const { selectFilter, seacrhFilter } = projects.actions;
export default projects.reducer;
