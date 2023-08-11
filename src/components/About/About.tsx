import "./About.css"

export default function About() {
  return (
    <section
      id="about"
      className="flex items-start justify-between gap-14 px-28 pt-5"
    >
      <div className="geography w-[30%]">
        <h3>Geography</h3>
        <p className="text-justify">
          Tajikistan is a landlocked country in Central Asia. It is bordered by
          Afghanistan to the south, Uzbekistan to the west, Kyrgyzstan to the
          north, and China to the east. The country is mostly mountainous, with
          the Pamir Mountains in the east and the Fann Mountains in the west.
          The highest point in Tajikistan is Mount Ismoil Somoni, which is 7,495
          meters (24,590 feet) tall.
        </p>
      </div>
      <div className="w-[70%]">
        <div className="card-container flex items-start gap-10">
          <div className="mb-2">
            <h3>Capital</h3>
            <p className="text-justify">
              The capital of Tajikistan is Dushanbe. Dushanbe is a large city
              with a population of over 1 million people. It is located in the
              southwestern part of the country, in the foothills of the Fann
              Mountains.
            </p>
          </div>
          <div className="mb-2">
            <h3>People</h3>
            <p className="text-justify">
              The majority of the people in Tajikistan are Tajiks. Tajiks are a
              Persian-speaking people who have lived in the region for
              centuries. Other ethnic groups in Tajikistan include Uzbeks,
              Kyrgyz, and Russians.
            </p>
          </div>
        </div>
        <div className="card-container flex items-start gap-10 mt-2">
          <div className="language">
            <h3>Language</h3>
            <p className="text-justify">
              The official language of Tajikistan is Tajik. Tajik is a Persian
              language that is closely related to Farsi. Other languages spoken
              in Tajikistan include Uzbek, Kyrgyz, and Russian.
            </p>
          </div>
          <div className="religion">
            <h3>Religion</h3>
            <p className="text-justify">
              The majority of the people in Tajikistan are Muslims. Islam is the
              official religion of the country. Other religious groups in
              Tajikistan include Christians, Jews, and Buddhists.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
