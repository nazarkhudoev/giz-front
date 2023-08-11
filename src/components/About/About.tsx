"use client"

import "./About.css"
import { useAppSelector } from "@/redux/hooks";

export default function About() {
  const state = useAppSelector((state) => state.LanguageReducer);
  return (
    <section
      id="about"
      className="flex items-start justify-between gap-14 px-28 pt-5"
    >
      <div className="geography w-[30%]">

        <h3>
          {state.language == "en" && "Geography"}
          {state.language == "de" && "Erdkunde"}
          {state.language == "tj" && "География"}
          {state.language == "ru" && "География"}
        </h3>
        <p className="text-justify">
          {state.language == "en" && "Tajikistan is a landlocked country in Central Asia. It is bordered by Afghanistan to the south, Uzbekistan to the west, Kyrgyzstan to the north, and China to the east. The country is mostly mountainous, with the Pamir Mountains in the east and the Fann Mountains in the west. The highest point in Tajikistan is Mount Ismoil Somoni, which is 7,495 meters (24,590 feet) tall"}
          {state.language == "de" && "Tadschikistan ist ein Binnenstaat in Zentralasien. Es grenzt im Süden an Afghanistan, im Westen an Usbekistan, im Norden an Kirgisistan und im Osten an China. Das Land ist größtenteils gebirgig, mit dem Pamir-Gebirge im Osten und dem Fann-Gebirge im Westen. Der höchste Punkt in Tadschikistan ist der Berg Ismoil Somoni, der 7.495 Meter (24.590 Fuß) hoch ist."}
          {state.language == "tj" && "Тоҷикистон кишвари Осиёи Марказӣ ба баҳр баромад. Дар ҷануб бо Афғонистон, дар ғарб бо Узбакистон, дар шимол бо Қирғизистон ва дар шарқ бо Чин ҳамсарҳад аст. Мамлакат асосан кухсор буда, дар шарк куххои Помир ва дар гарб куххои Фанн. Баландтарин нуқта дар Тоҷикистон кӯҳи Исмоили Сомонӣ аст, ки 7495 метр (24590 фут) баланд аст."}
          {state.language == "ru" && "Таджикистан – не имеющая выхода к морю страна в Центральной Азии. Граничит с Афганистаном на юге, Узбекистаном на западе, Кыргызстаном на севере и Китаем на востоке. Страна в основном гористая, с Памирскими горами на востоке и Фанскими горами на западе. Самая высокая точка Таджикистана — гора Исмоила Сомони, высота которой составляет 7 495 метров (24 590 футов)."}
        </p>
      </div>
      <div className="w-[70%]">
        <div className="card-container flex items-start gap-10">
          <div className="mb-2">
            <h3>
              {state.language == "en" && "Capital"}
              {state.language == "de" && "Hauptstadt"}
              {state.language == "tj" && "Пойтахт"}
              {state.language == "ru" && "Столица"}
            </h3>
            <p className="text-justify">
              {state.language == "en" && "The capital of Tajikistan is Dushanbe. Dushanbe is a large city with a population of over 1 million people. It is located in the southwestern part of the country, in the foothills of the Fann Mountains."}
              {state.language == "de" && "Die Hauptstadt Tadschikistans ist Duschanbe. Duschanbe ist eine große Stadt mit einer Bevölkerung von über 1 Million Menschen. Es liegt im südwestlichen Teil des Landes, in den Ausläufern des Fann-Gebirges."}
              {state.language == "tj" && "Пойтахти Тоҷикистон Душанбе аст. Душанбе шаҳри бузургест, ки беш аз 1 миллион нафар аҳолӣ дорад. Он дар кисми чануби гарбии мамлакат, дар доманаи куххои Фанн вокеъ аст."}
              {state.language == "ru" && "Столица Таджикистана Душанбе. Душанбе – крупный город с населением более 1 млн человек. Он расположен в юго-западной части страны, в предгорьях Фанских гор."}
            </p>
          </div>
          <div className="mb-2">
            <h3>
              {state.language == "en" && "People"}
              {state.language == "de" && "Menschen"}
              {state.language == "tj" && "Одамон"}
              {state.language == "ru" && "Люди"}
            </h3>
            <p className="text-justify">
              {state.language == "en" && "The majority of the people in Tajikistan are Tajiks. Tajiks are a Persian-speaking people who have lived in the region for centuries. Other ethnic groups in Tajikistan include Uzbeks, Kyrgyz, and Russians."}
              {state.language == "de" && "Die Mehrheit der Menschen in Tadschikistan sind Tadschiken. Tadschiken sind ein persischsprachiges Volk, das seit Jahrhunderten in der Region lebt. Weitere ethnische Gruppen in Tadschikistan sind Usbeken, Kirgisen und Russen."}
              {state.language == "tj" && "Аксарияти мардуми Тоҷикистонро тоҷикон ташкил медиҳанд. Тоҷикон мардуми форсизабонанд, ки дар тӯли садсолаҳо дар ин минтақа ба сар мебаранд. Дигар миллатҳои Тоҷикистон узбакҳо, қирғизҳо ва русҳо ҳастанд."}
              {state.language == "ru" && "Большинство населения Таджикистана составляют таджики. Таджики — персоязычный народ, веками живший в этом регионе. Другие этнические группы в Таджикистане включают узбеков, кыргызов и русских."}
            </p>
          </div>
        </div>
        <div className="card-container flex items-start gap-10 mt-2">
          <div className="language">
            <h3>
              {state.language == "en" && "Language"}
              {state.language == "de" && "Sprache"}
              {state.language == "tj" && "Забон"}
              {state.language == "ru" && "Язык"}
            </h3>
            <p className="text-justify">
              {state.language == "en" && "The official language of Tajikistan is Tajik. Tajik is a Persian language that is closely related to Farsi. Other languages spoken in Tajikistan include Uzbek, Kyrgyz, and Russian."}
              {state.language == "de" && "Die offizielle Sprache Tadschikistans ist Tadschikisch. Tadschikisch ist eine persische Sprache, die eng mit Farsi verwandt ist. Weitere in Tadschikistan gesprochene Sprachen sind Usbekisch, Kirgisisch und Russisch."}
              {state.language == "tj" && "Забони расмии Тоҷикистон тоҷикист. Забони тоҷикӣ забони форсӣ аст, ки бо форсӣ пайванди наздик дорад. Забонҳои дигаре, ки дар Тоҷикистон гуфтугӯ мекунанд, ӯзбекӣ, қирғизӣ ва русӣ ҳастанд."}
              {state.language == "ru" && "Официальный язык Таджикистана – таджикский. Таджикский — персидский язык, тесно связанный с фарси. Другие языки, на которых говорят в Таджикистане, включают узбекский, кыргызский и русский."}
            </p>
          </div>
          <div className="religion">
            <h3>
              {state.language == "en" && "Religion"}
              {state.language == "de" && "Religion"}
              {state.language == "tj" && "Дин"}
              {state.language == "ru" && "Религия"}
            </h3>
            <p className="text-justify">
              {state.language == "en" && "The majority of the people in Tajikistan are Muslims. Islam is the official religion of the country. Other religious groups in Tajikistan include Christians, Jews, and Buddhists."}
              {state.language == "de" && "Die Mehrheit der Menschen in Tadschikistan sind Muslime. Der Islam ist die offizielle Religion des Landes. Andere religiöse Gruppen in Tadschikistan sind Christen, Juden und Buddhisten."}
              {state.language == "tj" && "Аксарияти мардуми Тоҷикистон мусулмонанд. Ислом дини расмии кишвар аст. Гурӯҳҳои дигари мазҳабӣ дар Тоҷикистон масеҳиён, яҳудиён ва буддоҳо ҳастанд."}
              {state.language == "ru" && "Большинство населения Таджикистана – мусульмане. Ислам является официальной религией страны. Другие религиозные группы в Таджикистане включают христиан, иудеев и буддистов."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
