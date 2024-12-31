import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const GTA = () => {
    return (
        <>
            <Head>
                <title>Grand Theft Auto V | Filkom Game Corner UB</title>
                <meta
                    name="description"
                    content="Grand Theft Auto V adalah game open-world dengan cerita menarik dan kebebasan eksplorasi yang luar biasa."
                />
                <meta
                    name="keywords"
                    content="GTA V, Grand Theft Auto V, open world, Rockstar Games, action, adventure"
                />
                <meta property="og:title" content="Grand Theft Auto V | Filkom Game Corner UB" />
                <meta
                    property="og:description"
                    content="Grand Theft Auto V adalah game open-world dengan cerita menarik dan kebebasan eksplorasi yang luar biasa."
                />
                <meta
                    property="og:image"
                    content="/assets/gtaV.jpg"
                />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-next.vercel.app/info/gta-v"
                />
            </Head>

            <div className="flex flex-col items-center py-7">
                <h1 className="text-3xl font-bold text-center mb-2">Grand Theft Auto V</h1>
                <p className="text-lg text-gray-600 text-center mb-6 italic">
                    Experience the freedom and chaos of Los Santos.
                </p>
                <iframe
                    src="https://youtube.com/embed/QkkoHAzjnUs"
                    title="Grand Theft Auto V Trailer"
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
                            <span className="font-medium">Grand Theft Auto V</span> adalah game open-world yang membawa pemain ke
                            dunia luas dan dinamis di Los Santos dan Blaine County. Game ini menampilkan tiga protagonis: Michael,
                            Franklin, dan Trevor, yang masing-masing memiliki cerita, kepribadian, dan keterampilan unik. Pemain
                            dapat bebas menjelajahi dunia, menyelesaikan misi, atau sekadar menikmati berbagai aktivitas yang tersedia.
                        </p>
                        <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                            <FaFeatherAlt className="text-xl" /> Synopsis
                        </h2>
                        <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            Dalam <span className="font-medium">Grand Theft Auto V</span>, pemain mengikuti kisah tiga karakter utama:
                            Michael, mantan perampok bank yang mencari kehidupan baru; Franklin, seorang pemuda ambisius yang ingin
                            keluar dari jalanan; dan Trevor, seorang kriminal yang tidak stabil namun sangat loyal. Mereka bekerja
                            sama dalam serangkaian perampokan yang menantang, menghadapi pengkhianatan, dan melawan kekuatan besar
                            di Los Santos. Dunia yang kaya dan interaktif memberikan kebebasan luar biasa kepada pemain untuk menentukan
                            cara mereka menjalani permainan.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={assets.gtaV}
                            alt="Grand Theft Auto V"
                            width={300}
                            height={300}
                            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                        />
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <FaGamepad className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Genre</p>
                                    <p className="text-gray-600">Action-Adventure, Open World</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaCalendarAlt className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                    <p className="text-gray-600">September 17, 2013</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GTA;
