import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const AwayOut = () => {
  return (
    <div className="flex flex-col items-center py-7">
      <h1 className="text-3xl font-bold text-center mb-2">A Way Out</h1>
      <p className="text-lg text-gray-600 text-center mb-6 italic">
        Escape together with a friend in this co-op adventure.
      </p>
      <iframe
        src="https://youtube.com/embed/-r5fY05t_7g?si=BlmtlLJen0bCDZ4o"
        title="A Way Out Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="self-center rounded-md w-full md:w-[50%] h-[200px] md:h-[58vh] z-10 mb-4 shadow-lg"
      ></iframe>
      <button
        className="bg-primary1 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-primary2 flex items-center gap-2 transition-all"
        onClick={() => window.open("https://youtu.be/-r5fY05t_7g?si=Q64PVagNAFQ2fKXC", "_blank")}
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
            <span className="font-medium">*A Way Out*</span> adalah permainan petualangan co-op yang memungkinkan dua
            pemain bekerja sama untuk melarikan diri dari penjara dan mengungkap misteri di luar tembok penjara. Dengan
            mekanik permainan yang dirancang untuk pengalaman kooperatif, game ini menawarkan pengalaman cerita yang
            mendalam dan penuh ketegangan.
          </p>
          <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
            <FaFeatherAlt className="text-xl" /> Synopsis
          </h2>
          <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
            Dalam <span className="font-medium">*A Way Out*</span>, pemain mengikuti kisah dua narapidana, Leo dan
            Vincent, yang harus bekerja sama untuk melarikan diri dari penjara dan menghadapi dunia luar yang penuh
            tantangan. Setiap keputusan mereka akan mempengaruhi jalan cerita, dan hanya dengan kerja sama mereka dapat
            mencapai kebebasan.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={assets.away}
            alt="A Way Out"
            width={300} height={300}
            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaGamepad className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Genre</p>
                <p className="text-gray-600">Action-Adventure, Co-op</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                <p className="text-gray-600">March 23, 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwayOut;
