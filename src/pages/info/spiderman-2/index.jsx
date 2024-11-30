import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt, FaYoutube } from "react-icons/fa";

const SpiderMan2 = () => {
  return (
    <div className="flex flex-col items-center py-7">
      <h1 className="text-3xl font-bold text-center mb-2">Spider-Man 2</h1>
      <p className="text-lg text-gray-600 text-center mb-6 italic">
        Swing into action as Peter Parker and Miles Morales in Spider-Man 2.
      </p>
      <iframe
        src="https://youtube.com/embed/nq1M_Wc4FIc?si=78w1n01u5DEXDLoA"
        title="Spider-Man 2 Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="self-center rounded-md w-full md:w-[50%] h-[200px] md:h-[58vh] z-10 mb-4 shadow-lg"
      ></iframe>
      <button
        className="bg-primary1 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-primary2 flex items-center gap-2 transition-all"
        onClick={() => window.open("https://youtu.be/nq1M_Wc4FIc?si=78w1n01u5DEXDLoA", "_blank")}
      >
        <FaYoutube className="text-lg" />
        Watch Full Trailer on YouTube
      </button>
      <div className="flex flex-col md:flex-row items-start justify-between w-full xl:px-40 px-10 gap-10">
        <div className="text-left flex-1 bg-gray-50 rounded-lg p-6 shadow-lg">
          <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
            <FaFeatherAlt className="text-xl" /> Game Description
          </h2>
          <p className="text-lg xl:text-xl mb-8 max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
            <span className="font-medium">*Spider-Man 2*</span> adalah game aksi petualangan dunia terbuka di mana pemain dapat mengendalikan dua Spider-Men, Peter Parker dan Miles Morales. Mereka berjuang melawan ancaman besar di kota New York, dengan grafis yang memukau dan alur cerita yang mendalam. Game ini menawarkan pengalaman penuh aksi dengan berbagai kemampuan unik setiap karakter.
          </p>
          <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
            <FaFeatherAlt className="text-xl" /> Synopsis
          </h2>
          <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
            Dalam <span className="font-medium">*Spider-Man 2*</span>, pemain mengendalikan Peter Parker dan Miles Morales dalam perjuangan mereka menghadapi ancaman baru, termasuk Venom. Dengan dunia terbuka yang luas dan kemampuan unik untuk setiap karakter, pemain merasakan pengalaman menjadi dua Spider-Man secara bersamaan, berjuang melawan musuh besar dan tantangan yang ada di kota New York.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={assets.spiderman}
            alt="Spider-Man 2 PS5"
            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaGamepad className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Genre</p>
                <p className="text-gray-600">Action-Adventure, Open-World</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                <p className="text-gray-600">October 20, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiderMan2;
