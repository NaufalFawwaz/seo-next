import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from 'next/image';
import Head from "next/head";

const CallOfDuty = () => {
  return (
    <>
      <Head>
        <title>Call of Duty: Modern Warfare III | Filkom Game Corner UB</title>
        <meta
          name="description"
          content="Call of Duty: Modern Warfare 3 adalah game FPS yang menjadi penutup trilogi Modern Warfare. Rasakan intensitas kampanye dan aksi multiplayer di game tembak-menembak ini!"
        />
        <meta
          name="keywords"
          content="Call of Duty, Modern Warfare 3, Filkom UB Game Corner, FPS, first-person shooter, action, PS3, Xbox 360, video game"
        />
        <meta property="og:title" content="Call of Duty: Modern Warfare III | Filkom Game Corner UB" />
        <meta
          property="og:description"
          content="Call of Duty: Modern Warfare 3 adalah game FPS yang menjadi penutup trilogi Modern Warfare. Rasakan intensitas kampanye dan aksi multiplayer di game tembak-menembak ini!"
        />
        <meta
          property="og:image"
          content="/assets/cod.jpg"
        />
        <meta
          property="og:url"
          content="https://filkom-ub-game-corner-next.vercel.app/games/call-of-duty-modern-warfare-iii"
        />
      </Head>

      <div className="flex flex-col items-center py-7">
        <h1 className="text-3xl font-bold text-center mb-2">Call of Duty: Modern Warfare III</h1>
        <p className="text-lg text-gray-600 text-center mb-6 italic">
          Experience the epic conclusion to the Modern Warfare saga.
        </p>
        <iframe
          src="https://youtube.com/embed/i3IsLrPeZG8?si=KcBFgfC51mQJp-ki"
          title="Call of Duty: Modern Warfare 3 Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="self-center rounded-md w-full md:w-[50%] h-[200px] md:h-[58vh] z-10 mb-4 shadow-lg"
        ></iframe>
        
        <div className="flex flex-col md:flex-row items-start justify-between w-full xl:px-40 px-10 gap-10">
          <div className="text-left flex-1 bg-gray-50 rounded-lg p-6 shadow-lg">
            <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
              <FaFeatherAlt className="text-xl" /> Game Description
            </h2>
            <p className="text-lg xl:text-xl mb-8 max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
              <span className="font-medium">Call of Duty: Modern Warfare 3</span> adalah game tembak-menembak FPS
              yang menjadi penutup dari trilogi Modern Warfare. Dengan mode kampanye yang intens dan multiplayer yang
              penuh aksi, game ini menawarkan pengalaman perang modern yang luar biasa dengan grafis dan mekanika
              permainan yang disempurnakan. Pemain akan terlibat dalam misi-misi berbahaya yang melibatkan pasukan
              khusus, penyusupan, dan peperangan skala besar di berbagai lokasi di seluruh dunia. Grafik yang tajam,
              pengalaman audio yang memukau, dan gameplay yang cepat membuat game ini menjadi pilihan utama bagi penggemar
              genre FPS.
            </p>
            <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
              <FaFeatherAlt className="text-xl" /> Synopsis
            </h2>
            <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
              Dalam <span className="font-medium">Call of Duty: Modern Warfare 3</span>, pemain mengikuti kisah
              Soap MacTavish, Captain Price, dan tim operasi khusus lainnya yang berusaha menghentikan ancaman global.
              Melalui berbagai misi yang menegangkan di seluruh dunia, mereka berusaha untuk melawan teroris yang
              ingin menguasai dunia. Pemain akan berperan sebagai anggota tim elite yang terlibat dalam operasi-operasi
              berisiko tinggi, mengungkapkan konspirasi dan menghadapi musuh-musuh yang semakin kuat. Cerita epik ini
              menghadirkan pengalaman yang mendalam dengan beragam aksi dan situasi yang mendebarkan.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={assets.cod}
              alt="Call of Duty: Modern Warfare 3"
              width={300} height={300}
              className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
            />
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <FaGamepad className="text-primary1 text-3xl" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">Genre</p>
                  <p className="text-gray-600">First-Person Shooter, Action</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaCalendarAlt className="text-primary1 text-3xl" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">Release Date</p>
                  <p className="text-gray-600">November 8, 2011</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallOfDuty;
