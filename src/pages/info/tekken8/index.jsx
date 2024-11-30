import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt, FaYoutube } from "react-icons/fa";

const Tekken8 = () => {
  return (
    <div className="flex flex-col items-center py-7">
      <h1 className="text-3xl font-bold text-center mb-2">Tekken 8</h1>
      <p className="text-lg text-gray-600 text-center mb-6 italic">
        The legendary fighting game series returns with new characters and mechanics.
      </p>
      <iframe
        src="https://youtube.com/embed/2hPuRQz6IlM?si=xC_TVvQRHBdIiOoF"
        title="Tekken 8 Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="self-center rounded-md w-full md:w-[50%] h-[200px] md:h-[58vh] z-10 mb-4 shadow-lg"
      ></iframe>
      <button
        className="bg-primary1 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-primary2 flex items-center gap-2 transition-all"
        onClick={() => window.open("https://youtu.be/2hPuRQz6IlM?si=xC_TVvQRHBdIiOoF", "_blank")}
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
            <span className="font-medium">*Tekken 8*</span> adalah game fighting legendaris yang kembali dengan karakter-karakter baru dan mekanik pertempuran yang lebih seru. Dengan grafis yang semakin memukau dan gameplay yang lebih dinamis, Tekken 8 membawa pengalaman pertempuran yang lebih cepat dan mendalam, menjadikannya salah satu game fighting terbaik.
          </p>
          <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
            <FaFeatherAlt className="text-xl" /> Synopsis
          </h2>
          <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
            Dalam <span className="font-medium">*Tekken 8*</span>, pemain akan menghadapi berbagai karakter ikonik dari seri sebelumnya serta wajah baru. Game ini memperkenalkan mekanik pertarungan yang lebih fluid dengan pengaruh yang lebih besar pada taktik dalam setiap pertarungan, menghadirkan pengalaman yang lebih menegangkan dan kompetitif.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={assets.tekken}
            alt="Tekken 8"
            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaGamepad className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Genre</p>
                <p className="text-gray-600">Fighting, Action</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                <p className="text-gray-600">TBA 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tekken8;
