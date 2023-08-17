import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { media_mock } from "@/app/data/projects";
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
  filteredData: [] | any;
  searchFilter: [] | any;
  inputValue: string;
  selectedDistrict: string;
  viewProject: Projectinterface;
}

const initialState = {
  filteredData: [],
  searchFilter: [],
  inputValue: "",

  loading: false,
  error: "",
  projects: [{
    project_id: 1,
    name_ru: "Молочная ферма",
    name_tj: "Фермаи ширӣ",
    name_en: "Dairy farm",
    name_de: "Milchbauernhof",
    short_ru: `Поскольку регион находится в высокогорье, зимы очень холодные, а производство молока также снижается из-за неправильного строительства зданий молочной фермы. Та же проблема касается и сохранения овощных и плодовых культур в зимний период. Реконструированы четыре молочно-товарные фермы и шесть приусадебных плодоовощехранилищ с применением термоизоляционных технологий. Практикум проводил местный тренер для групп производителей в Рошткалинском и Рушанском районах. Эта технология была адаптирована с использованием местных строительных материалов, чтобы помочь фермерам воспроизвести эту технологию в будущем. Во время тренинга среди членов группы в районе было распространено практическое пособие. Техническая поддержка по мере необходимости, направленная на длительное хранение и продление сроков годности различных выращиваемых культур и внедрение новой адаптированной технологии. Кроме того, это положительно скажется на производственных мощностях групп производителей молока.`,
    short_tj: `Азбаски ноҳия дар кӯҳсори баланд воқеъ аст, зимистон хеле хунук буда, истеҳсоли шир низ аз сабаби нодуруст сохта шудани биноҳои фермаи ширӣ  кам мешавад. Айнан ҳамин масъала ба нигоҳ доштани зироатҳои сабзавоту мева дар давраи зимистон дахл дорад. Чор фермаи ширӣ ва шаш анбори меваю сабзавоти хонагӣ бо технологиям термоизолятсионӣ аз нав сохта шуд. Тренинги амалӣ аз ҷониби тренери маҳаллӣ барои гурӯҳҳои истеҳсолӣ дар ноҳияҳои Роштқалъа ва Рӯшон гузаронида шуд. Ин технология бо истифода аз масолеҳи сохтмонии маҳаллӣ мутобиқ карда шудааст, то ба деҳқонон дар оянда технологияро такрор кунанд. Дар рафти машгулият дар байни аъзоёни гурух дар район дастури амалӣ пахн карда шуд. Дастгирии техникӣ дар асоси эҳтиёҷот ба нигоҳдории дарозмуддат ва дароз кардани мӯҳлати нигоҳдории зироатҳои гуногун ва ҷорӣ намудани технологияи нави мутобиқшуда нигаронида шудааст. Илова бар ин, он ба иқтидори истеҳсолии гурӯҳҳои истеҳсолкунандагони шир таъсири мусбат мерасонад.`,
    short_en: `Since the region is in high mountains the winters are very cold and the milk production also decreases due to improper construction of the dairy farm buildings. The same problem applies to preservation of vegetable and fruit crops in the winter period. Four dairy farms and six home-based fruits and vegetable storages have been re-constructed using thermos-insulation technology. The practical trainings were conducted by the local trainer for producer groups in Roshtqala and Rushan Districts. This technology has been adapted in using locally available construction materials to help the farmers to replicate the technology in the future. During the training a practical handbook was disseminated among the group members in the district. The need-based technical support aimed at long-term storage and shelf-life extension of diverse produced crops and introduction of new adapted technology. Furthermore, it will positively impact on production capacity of milk producer groups.`,
    short_de: `Da die Region im Hochgebirge liegt, sind die Winter sehr kalt und auch die Milchproduktion geht aufgrund unsachgemäßer Bauweise der Milchwirtschaftsgebäude zurück. Das gleiche Problem gilt für die Erhaltung von Gemüse- und Obstkulturen im Winter. Vier Milchviehbetriebe und sechs Obst- und Gemüselager zu Hause wurden mithilfe der Thermoisolationstechnologie umgebaut. Die praktische Schulung wurde vom örtlichen Trainer für Produzentengruppen in den Distrikten Roshtqala und Rushan durchgeführt. Diese Technologie wurde unter Verwendung lokal verfügbarer Baumaterialien angepasst, um den Landwirten zu helfen, die Technologie in Zukunft zu reproduzieren. Während der Schulung wurde ein praktisches Handbuch unter den Gruppenmitgliedern im Bezirk verteilt. Die bedarfsgerechte technische Unterstützung zielt auf die langfristige Lagerung und Verlängerung der Haltbarkeit verschiedener angebauter Nutzpflanzen sowie auf die Einführung neuer angepasster Technologien ab. Darüber hinaus wird es sich positiv auf die Produktionskapazität der Milcherzeugergemeinschaften auswirken.`,
    category_id: 1,
    banner_url: "dairy",
    implementation: "",
    location: [37.840312,71.654453],
    district_id: 4,
    village_id: 2,
    adress_ru: "",
    adress_tj: "",
    adress_en: "",
    adress_de: "",
    created_at: "",
  },
  {
    project_id: 2,
    name_ru: "Экспериментальная теплица",
    name_tj: "Гармхонаи таҷрибавӣ",
    name_en: "Demo-Greenhouse",
    name_de: "Demo-Gewächshaus",
    short_ru: `Демо-теплица была построена для внедрения устойчивого и инновационного управления растениеводством для групп производителей овощей в Дерзуде Рушанского района. Был нанят местный специалист по теплицам не только для демонстрации процесса строительства, но и для обучения инновационным технологиям выращивания, посадки и орошения. В вегетационный период внедрена технология капельного орошения и совместно размещена в теплице. Теплица дала хорошие результаты, дав за май-октябрь 3,5 тонны огурцов с 200-метрового участка.`,
    short_tj: `Гармхонаи намоишӣ бо мақсади ҷорӣ намудани идоракунии устувор ва инноватсионии зироат барои гурӯҳҳои истеҳсолкунандаи сабзавот дар Дерзуди ноҳияи Рӯшон сохта шудааст. Мутахассиси гармхонаҳои маҳаллӣ на танҳо барои намоиши раванди сохтмон, балки барои омӯзиши инноватсионии парвариш, ниҳолшинонӣ ва технологияи обёрӣ низ ҷалб карда шуд. Дар давраи вегетатсия технологияи обёрии қатрагӣ ҷорӣ карда шуда, якҷоя дар гармхона ҷойгир карда шуд. Гармхона дар давоми моҳҳои май то октябрь аз 200-метра 3,5 тонна бодиринг дод, натиҷаҳои хуб дод.`,
    short_en: `The Demo-Greenhouse was constructed to introduce sustainable and innovative crop management for vegetable producer groups in Derzud, in the Rushan district. A local greenhouse expert was hired not only for the demonstration of the construction process, but also to teach innovative cultivation, planting, and irrigation technologies. In the vegetation period drip irrigation technology was introduced and jointly placed in the greenhouse. The greenhouse has brought good results in giving 3.5 tons of cucumbers from 200 m plot during May to October.`,
    short_de: `Demo-Gewächshaus wurde gebaut, um Gemüseproduzentengruppen in Derzud im Bezirk Rushan ein nachhaltiges und innovatives Pflanzenmanagement vorzustellen. Ein lokaler Gewächshausexperte wurde nicht nur für die Demonstration des Bauprozesses engagiert, sondern auch für die Vermittlung innovativer Anbau-, Pflanz- und Bewässerungstechnologien. In der Vegetationsperiode wurde die Tropfbewässerungstechnik eingeführt und gemeinsam im Gewächshaus platziert. Das Gewächshaus hat gute Ergebnisse gebracht und von Mai bis Oktober 3,5 Tonnen Gurken auf einer 200 m² großen Parzelle geerntet.`,
    category_id: 1,
    banner_url: "vegetable",
    implementation: "",
    location: [37.95615553310948, 71.50643592187403],
    district_id: 4,
    village_id: 2,
    adress_ru: "",
    adress_tj: "",
    adress_en: "",
    adress_de: "",
    created_at: "",
  },
  {
    project_id: 3,
    name_ru: "Центр Предпринимательства, Хорог",
    name_tj: "Маркази соҳибкорӣ, Хоруғ",
    name_en: "Khorog Centre for Entrepreneurship",
    name_de: "Khorog-Zentrum für Unternehmertum",
    short_ru: `Хорогский центр предпринимательства (ХПП) был создан в сотрудничестве со Школой профессионального и непрерывного образования (ШПНО) Университета Центральной Азии (УЦА) в 2021 году с целью предоставления консультаций, обучения и поддержки для получения дохода и содействия развитию рынка. для руководителей малого бизнеса и фермеров региона. KCE предлагает ориентированные на практику и пост-инвестиционные консультации для ММСП, включая мелких фермеров.
    Темы в основном сосредоточены на управлении бизнесом, финансовой грамотности, расчете затрат, переработке сельскохозяйственной продукции и послеуборочному управлению, изменении климата, цепочке создания стоимости, маркетинге и брендинге и т. д. После теоретического обучения следует практическая деятельность в области, связанной с целевой группы в процессе, чтобы понять и определить проблемы и разработать решения, адаптированные к контексту.
    `,
    short_tj: `Маркази соҳибкории Хоруғ дар ҳамкорӣ бо Мактаби таҳсилоти касбӣ ва давомдори Донишгоҳи Осиёи Марказӣ (ДОМ) дар соли 2021 бо мақсади пешниҳоди машваратҳо, омӯзишҳо ва дастгирӣ барои дарёфти даромад ва мусоидат ба рушди бозор таъсис дода шудааст. Барои роҳбарони корхонаҳои хурд ва деҳконони вилоят. KCE машваратҳои ба амалия нигаронидашуда ва пас аз сармоягузорӣ барои КХМ, аз ҷумла фермерҳои хурд пешниҳод мекунад.
    Мавзӯъҳо асосан ба идоракунии соҳибкорӣ, саводнокии молиявӣ, ҳисобкунии хароҷот, коркарди маҳсулоти кишоварзӣ ва идоракунии пас аз ҳосилғундорӣ, тағирёбии иқлим, занҷири арзиш, маркетинг ва брендинг ва ғайра нигаронида шудаанд. Омӯзиши назариявӣ бо фаъолиятҳои амалӣ дар соҳа бо ҷалби ҳадафҳои мақсаднок гузаронида мешавад. гурӯҳҳо дар ин раванд барои фаҳмидан ва муайян кардани мушкилот ва таҳияи ҳалли мувофиқи контекст.
    `,
    short_en: ` The Khorog Centre for Entrepreneurship (KCE) was established in collaboration with the University of Central Asia’s (UCA) School of Professional and Continuing Education (SPCE) in 2021 with the aim to provide advice, trainings, and support to generate income and promote market development for small business leaders and farmers in the region. The KCE offers practice-oriented and post-investment consultations for MSMEs including small-scale farmers.
    The topics mainly focus on business management, financial literacy, cost calculation, agricultural product processing and post-harvest management, climate change, value chain, marketing, and branding, etc. The theoretical trainings are followed by practical activities in the field involving the target groups in the process to understand and identify the challenges and develop context adapted solutions.`,
    short_de: `Das Khorog Center for Entrepreneurship (KCE) wurde 2021 in Zusammenarbeit mit der School of Professional and Continuing Education (SPCE) der University of Central Asia (UCA) mit dem Ziel gegründet, Beratung, Schulungen und Unterstützung anzubieten, um Einnahmen zu generieren und die Marktentwicklung zu fördern für Kleinunternehmer und Landwirte in der Region. Das KCE bietet praxisorientierte und investitionsnachbereitende Beratungen für KKMU einschließlich Kleinbauern an.
    Die Themen konzentrieren sich hauptsächlich auf Unternehmensführung, Finanzkompetenz, Kostenkalkulation, Verarbeitung landwirtschaftlicher Produkte und Nacherntemanagement, Klimawandel, Wertschöpfungskette, Marketing und Branding usw. Auf die theoretische Ausbildung folgen praktische Aktivitäten vor Ort, an denen die Zielgruppe beteiligt ist Gruppen dabei, die Herausforderungen zu verstehen und zu identifizieren und kontextangepasste Lösungen zu entwickeln.
    `,
    category_id: 1,
    banner_url: "entrepreneurship_center",
    implementation: "",
    location: [37.492002,71.544383],
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
    name_ru: "Департамент стандартизации, метрологии, сертификации и торговой инспекции (Гос стандарт)",
    name_tj: "Раёсати стандартизатсия, метрология, сертификатсия ва нозироти савдо (ГОССтандарт)",
    name_en: `Department for Standardization, Metrology, Certification and Trade Inspection (Gos-standard)`,
    name_de: "Abteilung für Normung, Messtechnik, Zertifizierung und Handelsinspektion (Gos-Standard)",
    short_ru: `По результатам оценки потребностей Центр диагностики безопасности пищевых продуктов и Управление стандартизации, метрологии, сертификации и торговой инспекции ГБАО были обеспечены современным лабораторным оборудованием. Цель этого проекта заключалась в том, чтобы помочь государственным органам инспектировать как местные, так и импортные продукты, чтобы обеспечить их безопасное использование конечными потребителями и проверить качество.`,
    short_tj: `Дар асоси натиҷаҳои арзёбии эҳтиёҷот Маркази ташхиси бехатарии озуқаворӣ ва Раёсати стандартизатсия, метрология, сертификатсия ва нозироти савдои ВМКБ бо таҷҳизоти муосири лабораторӣ таъмин карда шуданд. Ҳадафи ин лоиҳа кӯмак ба мақомоти давлатӣ дар тафтиши маҳсулоти маҳаллӣ ва воридотӣ барои таъмини бехатарии истифодаи истеъмолкунандагони ниҳоӣ ва санҷиши сифат буд.`,
    short_en: `Based on the need assessment results, Food Safety Diagnostic Centre and the Department for Standardization, Metrology, Certification and Trade Inspection in the GBAO have been supported with modern laboratory equipment. The purpose of this project was to help the state agencies to inspect both local and imported products to ensure safety usage by end consumers and verify the quality.`,
    short_de: `Basierend auf den Ergebnissen der Bedarfsermittlung wurden das Food Safety Diagnostic Center und die Abteilung für Standardisierung, Metrologie, Zertifizierung und Handelskontrolle im GBAO mit moderner Laborausrüstung unterstützt. Der Zweck dieses Projekts bestand darin, den staatlichen Behörden dabei zu helfen, sowohl lokale als auch importierte Produkte zu prüfen, um die sichere Verwendung durch Endverbraucher zu gewährleisten und die Qualität zu überprüfen.`,
    category_id: 1,
    banner_url: "gosstand",
    implementation: "",
    location: [37.4921387, 71.5518919],
    district_id: 1,
    village_id: 2,
    adress_ru: "",
    adress_tj: "",
    adress_en: "Khorog Bazar",
    adress_de: "",
    created_at: "",
  }, {
    project_id: 7,
    name_ru: "Пищевая лаборатория(Хорог Базар)",
    name_tj: "Лабораторияи озуқаворӣ (Бозори Хоруғ)",
    name_en: `Food laboratory(Khorog Bazar)`,
    name_de: "Lebensmittellabor (Khorog Bazar)",
    short_ru: `По результатам оценки потребностей Центр диагностики безопасности пищевых продуктов и Управление стандартизации, метрологии, сертификации и торговой инспекции ГБАО были обеспечены современным лабораторным оборудованием. Цель этого проекта заключалась в том, чтобы помочь государственным органам инспектировать как местные, так и импортные продукты, чтобы обеспечить их безопасное использование конечными потребителями и проверить качество.`,
    short_tj: `Дар асоси натиҷаҳои арзёбии эҳтиёҷот Маркази ташхиси бехатарии озуқаворӣ ва Раёсати стандартизатсия, метрология, сертификатсия ва нозироти савдои ВМКБ бо таҷҳизоти муосири лабораторӣ таъмин карда шуданд. Ҳадафи ин лоиҳа кӯмак ба мақомоти давлатӣ дар тафтиши маҳсулоти маҳаллӣ ва воридотӣ барои таъмини бехатарии истифодаи истеъмолкунандагони ниҳоӣ ва санҷиши сифат буд.`,
    short_en: `Based on the need assessment results, Food Safety Diagnostic Centre and the Department for Standardization, Metrology, Certification and Trade Inspection in the GBAO have been supported with modern laboratory equipment. The purpose of this project was to help the state agencies to inspect both local and imported products to ensure safety usage by end consumers and verify the quality.`,
    short_de: `Basierend auf den Ergebnissen der Bedarfsermittlung wurden das Food Safety Diagnostic Center und die Abteilung für Standardisierung, Metrologie, Zertifizierung und Handelskontrolle im GBAO mit moderner Laborausrüstung unterstützt. Der Zweck dieses Projekts bestand darin, den staatlichen Behörden dabei zu helfen, sowohl lokale als auch importierte Produkte zu prüfen, um die sichere Verwendung durch Endverbraucher zu gewährleisten und die Qualität zu überprüfen.`,
    category_id: 1,
    banner_url: "gosstandBazar",
    implementation: "",
    location: [37.4908477, 71.5388424],
    district_id: 1,
    village_id: 2,
    adress_ru: "",
    adress_tj: "1",
    adress_en: "Khorog Bazar",
    adress_de: "",
    created_at: "",
  },
  {
    project_id: 5,
    name_ru: "Учебный центр технического и профессионального образования (ТПОП), УЦА, ШПНО",
    name_tj: "Маркази таълимии таҳсилоти техникӣ ва касбӣ (ТМТ), ДОМ, ММКД",
    name_en: `The Technical and Vocational Education Training Centre (TVET), UCA, SPCE`,
    name_de: "Das Technical and Vocational Education Training Center (TVET), UCA, SPCE",
    short_ru: `Учебный центр технического и профессионального образования (ТПО) Школы профессионального и непрерывного образования (ШПНО) Университета Центральной Азии (УЦА) был полностью оснащен необходимыми инструментами и оборудованием для запуска нового цеха и услуг по техническому обслуживанию большегрузных автомобилей. .
    Эта мастерская по обслуживанию автомобилей будет обслуживать тяжелую сельскохозяйственную технику, а также готовить и обучать специалистов, способных начать собственное дело в выбранной сфере.
    `,
    short_tj: `Маркази таълимии техникӣ ва касбии Мактаби таҳсилоти касбӣ ва давомдори (ММД) Донишгоҳи Осиёи Марказӣ (ДОМ) барои ба кор андохтани коргоҳ ва хидматрасонии нави мошинҳои вазнинбор бо асбобу таҷҳизоти зарурӣ муҷаҳҳаз гардидааст.
    Ин коргоҳи таъмири мошинҳо ба мошинҳои вазнини кишоварзӣ хизмат мерасонад ва инчунин мутахассисонро омода ва таълим медиҳад, ки дар соҳаи интихобшуда метавонанд тиҷорати худро оғоз кунанд.
    `,
    short_en: `The Technical and Vocational Education Training Centre (TVET) of the School of Professional and Continuing Education (SPCE), of the University of Central Asia (UCA) has been fully equipped with essential tools and equipment for launching new heavy-truck maintenance workshop and services. 
    This vehicle maintenance workshop will serve agricultural heavy machines as well as prepare and train specialists, who are able to start their own businesses in the chosen field.
    `,
    short_de: `Das Technical and Vocational Education Training Center (TVET) der School of Professional and Continuing Education (SPCE) der University of Central Asia (UCA) wurde vollständig mit wichtigen Werkzeugen und Geräten für den Start neuer Werkstätten und Dienstleistungen für die Wartung schwerer Lkw ausgestattet .
    In dieser Fahrzeugwartungswerkstatt werden schwere landwirtschaftliche Maschinen betreut und Fachkräfte vorbereitet und ausgebildet, die in der Lage sind, in dem gewählten Bereich ihr eigenes Unternehmen zu gründen.
    `,
    category_id: 1,
    banner_url: "TVETCentre",
    implementation: "",
    location: [37.48765096877228, 71.58689867375351],
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
    name_tj: "Кооперативи Зиндагӣ",
    name_en: `Cooperative Zindagi`,
    name_de: "Cooperative Zindagi",
    short_ru: `Кооператив «Зиндаги» был создан при поддержке GIZ в 2010 году с миссией по продвижению энергосберегающих технологий среди местного населения для снижения нагрузки на использование природных ресурсов. В 2020 году кооператив «Зиндаги» получил небольшие субсидии на внедрение новых солнечных сушилок для фруктов на рынке для фермеров.
    Новые модели солнечных сушилок по сравнению с традиционными методами сушки могут улучшить качество сухофруктов по следующим двум характеристикам:
    Плоды сушат в закрытом ящике от пыли.
    Плоды не сушат под прямыми солнечными лучами.
    `,
    short_tj: `Кооперативи «Зиндагӣ» бо дастгирии GIZ соли 2010 бо мақсади пешбурди технологияҳои каммасраф барои аҳолии маҳаллӣ бо мақсади паст кардани фишор ба истифодаи захираҳои табиӣ таъсис дода шудааст. Дар соли 2020 кооперативи «Зиндагӣ» барои ба бозор ворид намудани мевахушккунакҳои нави офтобӣ барои деҳқонон субсидияҳои хурд гирифт.
    Моделҳои нави хушккунакҳои офтобӣ дар муқоиса бо усулҳои анъанавии хушккунӣ метавонанд сифати меваи хушкро бо ду хусусияти зерин беҳтар кунанд:
    Мева дар қуттии пӯшида аз хок хушк карда мешавад.
    Меваҳо дар зери таъсири бевоситаи офтоб хушк намешаванд.
    `,
    short_en: `The cooperative “Zindagi” was established with support of GIZ in 2010 with its mission to promote energy-saving technologies for the local population to reduce pressure on using natural resources. In 2020, cooperative “Zindagi” has got small subsidies for introducing new solar fruit dryers in the market for farmers.
    The new solar dryer models in comparison to traditional drying methods can improve the quality of dried fruit by the following two characteristics:
    Fruits are dried in a closed box out from dust.
    Fruits are not dried under direct sun effects.
    `,
    short_de: `Die Genossenschaft „Zindagi“ wurde 2010 mit Unterstützung der GIZ gegründet und hat sich zum Ziel gesetzt, energiesparende Technologien für die lokale Bevölkerung zu fördern, um den Druck bei der Nutzung natürlicher Ressourcen zu verringern. Im Jahr 2020 erhielt die Genossenschaft „Zindagi“ kleine Zuschüsse für die Einführung neuer Solar-Obsttrockner auf dem Markt für Landwirte.
    Die neuen Modelle von Solartrocknern können im Vergleich zu herkömmlichen Trocknungsmethoden die Qualität von Trockenfrüchten durch die folgenden zwei Eigenschaften verbessern:
    Die Früchte werden in einer geschlossenen Kiste staubfrei getrocknet.
    Früchte werden nicht unter direkter Sonneneinstrahlung getrocknet.
    `,
    category_id: 1,
    banner_url: "zindagi",
    implementation: "",
    location: [37.487182444523796, 71.58788378698672],
    district_id: 1,
    village_id: 2,
    adress_ru: "",
    adress_tj: "",
    adress_en: "Bar-khorog",
    adress_de: "",
    created_at: "",
  }
  // {
  //   project_id: 7,
  //   name_ru: "",
  //   name_tj: "",
  //   name_en: `Cooperative Parshed`,
  //   name_de: "",
  //   short_ru: "",
  //   short_tj: "",
  //   short_en: `Cooperative “Parshed” is operating since 1988 as the first car maintenance unit in GBAO. As the cooperative has a professional technician who learnt his craft during the Soviet Union, it attracts clients from all parts of the GBAO.  The cooperative has got subsidies with the aim to expand its number of boxes from 2 to 5 for having more spaces for cars and offer shelter for the cars especially in winter and in the rainy seasons.
  //   The business now serves more clients due to the improved spaces and created an additionally permanent job. The business supports young men in job trainings.
  //   The business increased its income by 15% and improved the working conditions for its specialists.    
  //   `,
  //   short_de: "",
  //   category_id: 1,
  //   banner_url: "",
  //   implementation: "",
  //   location: "",
  //   district_id: 1,
  //   village_id: 2,
  //   adress_ru: "",
  //   adress_tj: "",
  //   adress_en: "",
  //   adress_de: "",
  //   created_at: "",
  // },
],
selectedDistrict: "All",
viewProject: {
    project_id: 1,
    name_ru: "",
    name_tj: "",
    name_en: "",
    name_de: "",
    short_ru: "",
    short_tj: "",
    short_en: "",
    short_de: "",
    location: [],
    category_id: "",
    banner_url: "",
    district_id: 0,
    village_id: "",
    adress_ru: "",
    adress_tj: "",
    adress_en: "",
    adress_de: "",
    created_at: "",
    updated_at: "",
  }

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
      state.selectedDistrict = action.payload;
    },
    viewProject: (state, action: PayloadAction<Projectinterface>) => {
      state.viewProject = action.payload;
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

export const { selectFilter, viewProject, seacrhFilter } = projects.actions;
export default projects.reducer;
