import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt, FaYoutube } from "react-icons/fa";

const RE2 = () => {
  return (
    <div className="flex flex-col items-center py-7">
      <h1 className="text-3xl font-bold text-center mb-2">Resident Evil 2</h1>
      <p className="text-lg text-gray-600 text-center mb-6 italic">
        Experience the survival horror of Raccoon City.
      </p>
      <iframe
        src="https://youtube.com/embed/u3wS-Q2KBpk?si=VhqaT-s06xx2HVeA"
        title="Resident Evil 2 Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="self-center rounded-md w-full md:w-[50%] h-[200px] md:h-[58vh] z-10 mb-4 shadow-lg"
      ></iframe>
      <button
        className="bg-primary1 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-primary2 flex items-center gap-2 transition-all"
        onClick={() => window.open("https://youtu.be/u3wS-Q2KBpk?si=VhqaT-s06xx2HVeA", "_blank")}
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
            <span className="font-medium">*Resident Evil 2*</span> adalah remake dari game survival horror klasik
            yang membawa pemain kembali ke Raccoon City, tempat terjadinya wabah zombie. Dengan grafis yang
            ditingkatkan dan gameplay yang lebih modern, game ini mengembalikan elemen horor dan ketegangan
            yang tak lekang oleh waktu.
          </p>
          <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
            <FaFeatherAlt className="text-xl" /> Synopsis
          </h2>
          <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
            Dalam <span className="font-medium">*Resident Evil 2*</span>, pemain mengikuti kisah Leon S. Kennedy dan
            Claire Redfield, yang berusaha untuk bertahan hidup di tengah wabah zombie yang menghancurkan kota
            Raccoon. Mereka bekerja sama untuk memecahkan misteri dibalik insiden yang terjadi di laboratorium
            Umbrella Corporation, sambil berusaha untuk keluar dari kota yang dipenuhi dengan monster mengerikan.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={assets.re2}
            alt="Resident Evil 2"
            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaGamepad className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Genre</p>
                <p className="text-gray-600">Survival Horror, Action-Adventure</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                <p className="text-gray-600">January 25, 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RE2;
