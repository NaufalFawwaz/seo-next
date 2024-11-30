import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt, FaYoutube } from "react-icons/fa";

const FinalFantasy = () => {
  return (
    <div className="flex flex-col items-center py-7">
      <h1 className="text-3xl font-bold text-center mb-2">Final Fantasy 7 Rebirth</h1>
      <p className="text-lg text-gray-600 text-center mb-6 italic">
        The next chapter in the iconic Final Fantasy 7 saga.
      </p>
      <iframe
        src="https://youtube.com/embed/Q56cRDseTGQ?si=ajNTs0MwWaR2KFtX"
        title="Final Fantasy 7 Rebirth Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="self-center rounded-md w-full md:w-[50%] h-[200px] md:h-[58vh] z-10 mb-4 shadow-lg"
      ></iframe>
      <button
        className="bg-primary1 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-primary2 flex items-center gap-2 transition-all"
        onClick={() => window.open("https://youtu.be/Q56cRDseTGQ?si=ajNTs0MwWaR2KFtX", "_blank")}
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
            <span className="font-medium">*Final Fantasy 7 Rebirth*</span> adalah sekuel dari *Final Fantasy 7 Remake*,
            yang melanjutkan kisah legendaris Cloud Strife dan para pahlawan lainnya dalam menghadapi ancaman global
            dari Shinra dan ancaman yang lebih besar. Dengan grafis yang memukau dan dunia terbuka yang lebih luas,
            game ini menawarkan pengalaman RPG yang mendalam dan penuh aksi.
          </p>
          <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
            <FaFeatherAlt className="text-xl" /> Synopsis
          </h2>
          <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
            Dalam <span className="font-medium">*Final Fantasy 7 Rebirth*</span>, pemain melanjutkan petualangan
            Cloud Strife dan teman-temannya yang berusaha mengungkap misteri dibalik kekuatan jahat yang mengancam
            dunia mereka. Dengan menghadapi berbagai musuh kuat dan memilih jalur cerita yang dapat mengubah takdir,
            *Final Fantasy 7 Rebirth* menjanjikan sebuah kisah epik yang tak terlupakan.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={assets.finalfantasy}
            alt="Final Fantasy 7 Rebirth"
            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaGamepad className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Genre</p>
                <p className="text-gray-600">Role-Playing Game (RPG), Action</p>
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

export default FinalFantasy;
