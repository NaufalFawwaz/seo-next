import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const GodOfWar = () => {
  return (
    <div className="flex flex-col items-center py-7">
      <h1 className="text-3xl font-bold text-center mb-2">God of War Ragnarök</h1>
      <p className="text-lg text-gray-600 text-center mb-6 italic">
        Explore the thrilling journey of Kratos and Atreus in Norse mythology.
      </p>
      <iframe
        src="https://www.youtube.com/embed/hfJ4Km46A-0?si=vYXBmzjyDsw1tMKH"
        title="God of War Ragnarök Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="self-center rounded-md w-full md:w-[50%] h-[200px] md:h-[58vh] z-10 mb-4 shadow-lg"
      ></iframe>
      <button
        className="bg-primary1 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-primary2 flex items-center gap-2 transition-all"
        onClick={() => window.open("https://www.youtube.com/watch?v=hfJ4Km46A-0", "_blank")}
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
            <span className="font-medium">*God of War Ragnarök*</span> adalah game aksi-petualangan yang mengikuti
            perjalanan Kratos dan Atreus saat mereka menjelajahi dunia mitologi Nordik. Dalam petualangan ini,
            mereka menghadapi dewa-dewa dan makhluk kuat sambil belajar tentang takdir mereka sendiri.
          </p>
          <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
            <FaFeatherAlt className="text-xl" /> Synopsis
          </h2>
          <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
            Dalam *God of War Ragnarök*, Kratos dan Atreus berusaha mencegah terjadinya Ragnarök, akhir dari dunia,
            sambil mengungkapkan rahasia yang akan menentukan nasib Nine Realms. Game ini melanjutkan saga emosional
            dan penuh aksi dari Kratos dan Atreus.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={assets.gow}
            alt="God of War Ragnarök"
            width={300} height={300}
            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaGamepad className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Genre</p>
                <p className="text-gray-600">Action, Adventure, RPG</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                <p className="text-gray-600">November 12, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GodOfWar;
