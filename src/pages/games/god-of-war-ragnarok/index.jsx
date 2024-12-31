import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const GodOfWar = () => {
  return (
    <>
      <Head>
        <title>God of War Ragnarök | Filkom Game Corner UB</title>
        <meta
          name="description"
          content="Jelajahi dunia mitologi Nordik bersama Kratos dan Atreus dalam game God of War Ragnarök. Temukan petualangan epik di Filkom Game Corner UB dengan sinopsis lengkap dan ulasan mendalam tentang game ini!"
        />
        <meta
          name="keywords"
          content="God of War Ragnarök, Filkom UB Game Corner, UB, game petualangan, game aksi, Kratos, Atreus, mitologi Nordik, RPG, PS5, game epic"
        />
        <meta property="og:title" content="God of War Ragnarök | Filkom Game Corner UB" />
        <meta
          property="og:description"
          content="Ikuti perjalanan Kratos dan Atreus dalam God of War Ragnarök di dunia mitologi Nordik. Pelajari lebih lanjut tentang game aksi-petualangan ini di Filkom Game Corner UB!"
        />
        <meta
          property="og:image"
          content="/assets/gow.jpg"
        />
        <meta
          property="og:url"
          content="https://filkom-ub-game-corner-next.vercel.app/info/god-of-war-ragnarok"
        />
      </Head>

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


        <div className="flex flex-col md:flex-row items-start justify-between w-full xl:px-40 px-10 gap-10">
          <div className="text-left flex-1 bg-gray-50 rounded-lg p-6 shadow-lg">
            <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
              <FaFeatherAlt className="text-xl" /> Game Description
            </h2>
            <p className="text-lg xl:text-xl mb-8 max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
              <span className="font-medium">God of War Ragnarök</span> adalah game aksi-petualangan
              yang mengikuti perjalanan Kratos dan Atreus di dunia mitologi Nordik. Dalam game ini,
              mereka berdua menghadapi dewa-dewa dan makhluk legendaris dari berbagai dunia, sambil
              berusaha menghindari kehancuran yang diprediksi dalam ramalan Ragnarök. Dengan gameplay yang
              memadukan pertarungan brutal dan cerita emosional, game ini menyuguhkan pengalaman
              mendalam tentang hubungan ayah dan anak, takdir, dan pengorbanan.
            </p>
            <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
              <FaFeatherAlt className="text-xl" /> Synopsis
            </h2>
            <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
              Dalam God of War Ragnarök, Kratos dan Atreus melanjutkan perjalanan mereka yang penuh
              tantangan. Setelah peristiwa dari game sebelumnya, mereka kini menghadapi ancaman besar yang
              datang dari dunia Nordik, termasuk pertempuran dengan dewa-dewa dan makhluk mitologi yang
              legendaris. Kratos yang masih berjuang dengan takdirnya sebagai dewa perang, kini harus
              menghadapi ancaman terbesar dalam hidupnya, yaitu kemungkinan akhir dunia—Ragnarök.
              Bersama Atreus, yang semakin dewasa dan penuh rasa ingin tahu, mereka berusaha mencegah
              kehancuran yang tak terhindarkan. Cerita ini tidak hanya berfokus pada pertarungan,
              tetapi juga menggali lebih dalam tentang hubungan ayah-anak dan pengorbanan yang diperlukan
              untuk menghadapi takdir yang penuh kekacauan.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={assets.gow}
              alt="God of War Ragnarök"
              width={300}
              height={300}
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
    </>
  );
};

export default GodOfWar;
