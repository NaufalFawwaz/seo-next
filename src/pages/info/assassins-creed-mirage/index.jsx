import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt, FaYoutube } from "react-icons/fa";

const AssassinCreed = () => {
  return (
    <div className="flex flex-col items-center py-7">
      <h1 className="text-3xl font-bold text-center mb-2">Assassin's Creed Mirage</h1>
      <p className="text-lg text-gray-600 text-center mb-6 italic">
        Explore the latest adventure of Basim in 9th-century Baghdad.
      </p>
      <iframe
        src="https://youtube.com/embed/IRNOoOYVn80?si=e6f7xNpr5URQfdKA"
        title="Assassin's Creed Mirage Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="self-center rounded-md w-full md:w-[50%] h-[200px] md:h-[58vh] z-10 mb-4 shadow-lg"
      ></iframe>
      <button
          className="bg-primary1 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-primary2 flex items-center gap-2 transition-all"
          onClick={() => window.open("https://www.youtube.com/watch?v=IRNOoOYVn80", "_blank")}
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
            <span className="font-medium">*Assassin's Creed Mirage*</span> adalah game aksi-petualangan yang membawa
            pemain kembali ke akar seri *Assassin's Creed*, dengan fokus pada stealth, parkour, dan eksplorasi.
            Game ini berlatar di Baghdad pada abad ke-9 dan menampilkan cerita mendalam dengan karakter utama
            Basim Ibn Ishaq, seorang pencuri jalanan yang bergabung dengan Hidden Ones untuk menemukan takdirnya.
          </p>
          <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
            <FaFeatherAlt className="text-xl" /> Synopsis
          </h2>
          <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
            Dalam <span className="font-medium">*Assassin's Creed Mirage*</span>, pemain mengikuti perjalanan
            Basim, yang bermula sebagai pencuri jalanan di Baghdad. Dihantui oleh visi misterius, ia bergabung
            dengan Hidden Ones, sebuah organisasi rahasia, untuk melawan korupsi dan mencari kebenaran tentang
            masa lalunya. Kisah ini menggambarkan perjalanan Basim menuju menjadi salah satu Assassin yang paling
            kompleks dalam sejarah seri.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={assets.assassin}
            alt="Assassin's Creed Mirage"
            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaGamepad className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Genre</p>
                <p className="text-gray-600">Action, Adventure, Stealth,</p>
                <p className="text-gray-600">Open World, RPG</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                <p className="text-gray-600">October 5, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssassinCreed;
