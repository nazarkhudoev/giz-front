import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { mock_data } from "@/app/data/projects";
import { StaticImageData } from "next/image";

import { API_KEY } from "@/app/configs/API_KEY";
import { Projectinterface } from "@/app/interfaces/ProjectInterface";
import axios from "axios";

interface DataInterface {
  id: number;
  title: string;
  subtitle: string;
  image: StaticImageData;
  district: string;
  status: string;
}

interface Data {
  data: DataInterface[];
  filteredData: DataInterface[];
  searchFilter: DataInterface[];
}

interface initialStateTypes {
  loading: boolean;
  error: string | undefined;
  projects: [] | any;
  filteredData: [];
  searchFilter: [];
  inputValue: string;
}

const initialState = {
  filteredData: [],
  searchFilter: [],
  inputValue: "",

  loading: false,
  error: "",
  projects: [{
    project_id: 1,
    name_ru: "",
    name_tj: "",
    name_en: "Dairy",
    name_de: "",
    short_ru: "",
    short_tj: "",
    short_en: "Since the region is in high mountains the winters are very cold and the milk production also decreases due to improper construction of the dairy farm buildings. The same problem applies to preservation of vegetable and fruit crops in the winter period. Four dairy farms and six home-based fruits and vegetable storages have been re-constructed using thermos-insulation technology. The practical trainings were conducted by the local trainer for producer groups in Roshtqala and Rushan Districts. This technology has been adapted in using locally available construction materials to help the farmers to replicate the technology in the future. During the training a practical handbook was disseminated among the group members in the district. The need-based technical support aimed at long-term storage and shelf-life extension of diverse produced crops and introduction of new adapted technology. Furthermore, it will positively impact on production capacity of milk producer groups.",
    short_de: "",
    category_id: 1,
    banner_url: "dairy",
    implementation: "",
    location: "",
    district_id: 1,
    village_id: 2,
    adress_ru: "",
    adress_tj: "",
    adress_en: "",
    adress_de: "",
    created_at: "",
  },
  {
    project_id: 2,
    name_ru: "",
    name_tj: "",
    name_en: "Vegetable",
    name_de: "",
    short_ru: "",
    short_tj: "",
    short_en: "The Demo-Greenhouse was constructed to introduce sustainable and innovative crop management for vegetable producer groups in Derzud, in the Rushan district. A local greenhouse expert was hired not only for the demonstration of the construction process, but also to teach innovative cultivation, planting, and irrigation technologies. In the vegetation period drip irrigation technology was introduced and jointly placed in the greenhouse. The greenhouse has brought good results in giving 3.5 tons of cucumbers from 200 m plot during May to October.",
    short_de: "",
    category_id: 1,
    banner_url: "vegetable",
    implementation: "",
    location: "",
    district_id: 1,
    village_id: 2,
    adress_ru: "",
    adress_tj: "",
    adress_en: "",
    adress_de: "",
    created_at: "",
  },
  {
    project_id: 3,
    name_ru: "",
    name_tj: "",
    name_en: "Khorog Centre for Entrepreneurship",
    name_de: "",
    short_ru: "",
    short_tj: "",
    short_en: ` The Khorog Centre for Entrepreneurship (KCE) was established in collaboration with the University of Central Asia’s (UCA) School of Professional and Continuing Education (SPCE) in 2021 with the aim to provide advice, trainings, and support to generate income and promote market development for small business leaders and farmers in the region. The KCE offers practice-oriented and post-investment consultations for MSMEs including small-scale farmers.
    The topics mainly focus on business management, financial literacy, cost calculation, agricultural product processing and post-harvest management, climate change, value chain, marketing, and branding, etc. The theoretical trainings are followed by practical activities in the field involving the target groups in the process to understand and identify the challenges and develop context adapted solutions.`,
    short_de: "",
    category_id: 1,
    banner_url: "entrepreneurship_center",
    implementation: "",
    location: "",
    district_id: 1,
    village_id: 2,
    adress_ru: "",
    adress_tj: "",
    adress_en: "",
    adress_de: "",
    created_at: "",
  },
  {
    project_id: 4,
    name_ru: "",
    name_tj: "",
    name_en: `Khorog Bazar/Food laboratory`,
    name_de: "",
    short_ru: "",
    short_tj: "",
    short_en: `Department for Standardization, Metrology, Certification and Trade Inspection (Gos-standard). Based on the need assessment results, Food Safety Diagnostic Centre and the Department for Standardization, Metrology, Certification and Trade Inspection in the GBAO have been supported with modern laboratory equipment. The purpose of this project was to help the state agencies to inspect both local and imported products to ensure safety usage by end consumers and verify the quality.`,
    short_de: "",
    category_id: 1,
    banner_url: "gosstand",
    implementation: "",
    location: "",
    district_id: 1,
    village_id: 2,
    adress_ru: "",
    adress_tj: "",
    adress_en: "Khorog Bazar",
    adress_de: "",
    created_at: "",
  },
  {
    project_id: 5,
    name_ru: "",
    name_tj: "",
    name_en: `UCA, SPCE, TVET Centre`,
    name_de: "",
    short_ru: "",
    short_tj: "",
    short_en: `The Technical and Vocational Education Training Centre (TVET) of the School of Professional and Continuing Education (SPCE), of the University of Central Asia (UCA) has been fully equipped with essential tools and equipment for launching new heavy-truck maintenance workshop and services. 
    This vehicle maintenance workshop will serve agricultural heavy machines as well as prepare and train specialists, who are able to start their own businesses in the chosen field.
    `,
    short_de: "",
    category_id: 1,
    banner_url: "TVETCentre",
    implementation: "",
    location: "",
    district_id: 1,
    village_id: 2,
    adress_ru: "",
    adress_tj: "",
    adress_en: "Bar-khorog",
    adress_de: "",
    created_at: "",
  },
  {
    project_id: 6,
    name_ru: "Кооператив Зиндаги",
    name_tj: "",
    name_en: `Cooperative Zindagi`,
    name_de: "",
    short_ru: `Кооператив «Зиндаги» был создан при поддержке GIZ в 2010 году с миссией по продвижению энергосберегающих технологий среди местного населения для снижения нагрузки на использование природных ресурсов. В 2020 году кооператив «Зиндаги» получил небольшие субсидии на внедрение новых солнечных сушилок для фруктов на рынке для фермеров.
    Новые модели солнечных сушилок по сравнению с традиционными методами сушки могут улучшить качество сухофруктов по следующим двум характеристикам:
    Плоды сушат в закрытом ящике от пыли.
    Плоды не сушат под прямыми солнечными лучами.
    `,
    short_tj: "",
    short_en: `The cooperative “Zindagi” was established with support of GIZ in 2010 with its mission to promote energy-saving technologies for the local population to reduce pressure on using natural resources. In 2020, cooperative “Zindagi” has got small subsidies for introducing new solar fruit dryers in the market for farmers.
    The new solar dryer models in comparison to traditional drying methods can improve the quality of dried fruit by the following two characteristics:
    Fruits are dried in a closed box out from dust.
    Fruits are not dried under direct sun effects.
    `,
    short_de: "",
    category_id: 1,
    banner_url: "cooperative",
    implementation: "",
    location: "",
    district_id: 1,
    village_id: 2,
    adress_ru: "",
    adress_tj: "",
    adress_en: "Bar-khorog",
    adress_de: "",
    created_at: "",
  },
  {
    project_id: 7,
    name_ru: "",
    name_tj: "",
    name_en: `Cooperative Parshed`,
    name_de: "",
    short_ru: "",
    short_tj: "",
    short_en: `Cooperative “Parshed” is operating since 1988 as the first car maintenance unit in GBAO. As the cooperative has a professional technician who learnt his craft during the Soviet Union, it attracts clients from all parts of the GBAO.  The cooperative has got subsidies with the aim to expand its number of boxes from 2 to 5 for having more spaces for cars and offer shelter for the cars especially in winter and in the rainy seasons.
    The business now serves more clients due to the improved spaces and created an additionally permanent job. The business supports young men in job trainings.
    The business increased its income by 15% and improved the working conditions for its specialists.    
    `,
    short_de: "",
    category_id: 1,
    banner_url: "",
    implementation: "",
    location: "",
    district_id: 1,
    village_id: 2,
    adress_ru: "",
    adress_tj: "",
    adress_en: "",
    adress_de: "",
    created_at: "",
  }],
} as initialStateTypes;

export const fetchProject = createAsyncThunk("project/fetchProjects", () => {
  return axios.get(`${API_KEY}/get/project`).then((response) => {
    // console.log(response.data)
    return response.data
  });
});

// let status: string = "";

export const projects:any = createSlice({
  name: "projetcs",
  initialState,
  reducers: {
    selectFilter: (state, action: PayloadAction<string>) => {
      // status = action.payload;
      state.filteredData = state.projects.filter(
        (project: DataInterface) => project.district == action.payload
      );
    },
    seacrhFilter: (state, action: PayloadAction<string>) => {
      state.filteredData = state.projects.filter(
        (project: Projectinterface) => {
          if (action.payload == "") {
            console.log(current(state.projects));
            return current(project);
            // return project;
          } else if (
            project.name_en.toLowerCase().includes(action.payload.toLowerCase())
          ) {
            console.log(current(state.projects));
            return current(project);
            // return project;
          }
        }
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProject.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.projects = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProject.rejected, (state, action) => {
      state.loading = false;
      state.projects = [];
      state.error = action.error.message;
    });
  },
});

export const { selectFilter, seacrhFilter } = projects.actions;
export default projects.reducer;
