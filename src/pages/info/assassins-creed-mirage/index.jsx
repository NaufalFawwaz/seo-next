import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from 'next/image';
import Head from 'next/head';

const AssassinCreed = () => {
  return (
    <>
      <Head>
        <title>Assassin's Creed Mirage | Filkom Game Corner UB</title>
        <meta name="description" content="Jelajahi Assassin's Creed Mirage di Filkom Game Corner UB! Temukan gameplay mendalam, sinopsis, dan lebih banyak lagi tentang game aksi-petualangan yang berlatar belakang di Baghdad abad ke-9." />
        <meta name="keywords" content="Assassin's Creed Mirage, Filkom Game Corner, UB, game, video game, game petualangan, game aksi, PS5, Xbox, RPG, open world, stealth" />
        <meta property="og:title" content="Assassin's Creed Mirage | Filkom Game Corner UB" />
        <meta property="og:description" content="Jelajahi Assassin's Creed Mirage di Filkom Game Corner UB! Temukan gameplay mendalam, sinopsis, dan lebih banyak lagi tentang game aksi-petualangan yang berlatar belakang di Baghdad abad ke-9." />
        <meta property="og:image" content="/assets/assassin.jpg" />
        <meta property="og:url" content="https://filkom-ub-game-corner-next.vercel.app/info/assassins-creed-mirage" />
      </Head>

      <div className="flex flex-col items-center py-7">
        <h1 className="text-3xl font-bold text-center mb-2">Assassin's Creed Mirage</h1>
        <p className="text-lg text-gray-600 text-center mb-6 italic">
          Explore the latest adventure of Basim in 9th-century Baghdad, only at Filkom Game Corner UB.
        </p>

        <div className="bg-gray-50 p-4 rounded-md shadow-xl w-full md:w-[50%] mb-4">
          <div className="bg-gray-50 p-1 rounded-md">
            <iframe
              src="https://youtube.com/embed/IRNOoOYVn80?si=e6f7xNpr5URQfdKA"
              title="Assassin's Creed Mirage Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[200px] md:h-[58vh] object-cover rounded-md"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between w-full xl:px-40 px-10 gap-10">
          <div className="text-left flex-1 bg-gray-50 rounded-lg p-6 shadow-lg">
            <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
              <FaFeatherAlt className="text-xl" /> Game Description
            </h2>
            <p className="text-lg xl:text-xl mb-8 max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
              <span className="font-medium">*Assassin's Creed Mirage*</span> adalah game aksi-petualangan yang membawa
              pemain kembali ke akar seri *Assassin's Creed*, dengan fokus pada stealth, parkour, dan eksplorasi. 
              Dengan cerita yang lebih mendalam, *Assassin's Creed Mirage* membawa pemain ke Baghdad pada abad ke-9, 
              sebuah kota yang penuh dengan intrik, pembunuhan, dan kekuatan politik yang saling bertentangan. Karakter utama, 
              Basim Ibn Ishaq, adalah seorang pencuri jalanan yang bergabung dengan *Hidden Ones*, sebuah organisasi rahasia 
              yang berjuang untuk menegakkan keadilan dan melawan kekuatan jahat. Dalam game ini, pemain akan merasakan pengalaman 
              menjadi seorang Assassin yang harus menavigasi kota yang penuh dengan tantangan dan misteri.
            </p>
            <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
              <FaFeatherAlt className="text-xl" /> Synopsis
            </h2>
            <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
              Dalam <span className="font-medium">*Assassin's Creed Mirage*</span>, pemain mengikuti perjalanan Basim, 
              seorang pencuri jalanan yang bermula di kota Baghdad yang penuh dengan konflik. Setelah dihantui oleh visi-visi 
              misterius, Basim bergabung dengan *Hidden Ones*, sebuah organisasi yang bergerak di balik layar untuk menegakkan 
              keadilan. Sepanjang permainan, Basim akan terlibat dalam konspirasi politik, menghadapi musuh-musuh kuat, dan 
              menggali lebih dalam mengenai masa lalunya yang kelam. 
              Dengan sistem permainan yang lebih mengutamakan stealth, eksplorasi, dan parkour, pemain akan merasakan kembali 
              atmosfer klasik dari game *Assassin's Creed* yang pertama, namun dengan grafik dan mekanisme yang lebih modern. 
              Menyusuri pasar-pasar yang sibuk, menara-menara tinggi, serta melompat dari atap ke atap untuk menghindari musuh, 
              menjadi bagian integral dari perjalanan Basim dalam menemukan kebenaran.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={assets.assassin}
              alt="Assassin's Creed Mirage"
              width={300} height={300}
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
    </>
  );
};

export default AssassinCreed;
