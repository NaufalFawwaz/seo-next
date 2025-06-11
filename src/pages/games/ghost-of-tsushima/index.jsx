import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const GhostTsushima = () => {
    return (
        <>
            <Head>
                <title>Ghost of Tsushima | Filkom Game Corner UB</title>
                <meta
                    name="description"
                    content="Ghost of Tsushima adalah game aksi-petualangan yang menceritakan perjuangan seorang samurai bernama Jin Sakai melawan invasi Mongol di pulau Tsushima."
                />
                <meta
                    name="keywords"
                    content="Ghost of Tsushima, action-adventure, samurai, Jin Sakai, PlayStation, PS4, PS5"
                />
                <meta property="og:title" content="Ghost of Tsushima | Filkom Game Corner UB" />
                <meta
                    property="og:description"
                    content="Ghost of Tsushima adalah game aksi-petualangan yang menceritakan perjuangan seorang samurai bernama Jin Sakai melawan invasi Mongol di pulau Tsushima."
                />
                <meta
                    property="og:image"
                    content="/assets/ghost.jpg"
                />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-next.vercel.app/games/ghost-of-tsushima"
                />
            </Head>

            <div className="flex flex-col items-center py-7">
                <h1 className="text-3xl font-bold text-center mb-2">Ghost of Tsushima</h1>
                <p className="text-lg text-gray-600 text-center mb-6 italic">
                    Embark on an epic samurai journey in Ghost of Tsushima.
                </p>
                <iframe
                    src="https://www.youtube.com/embed/MUz539AeC5Y?si=HLFPRV1f9aHIBDKS"
                    title="Ghost of Tsushima Trailer"
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
                            <span className="font-medium">Ghost of Tsushima</span> adalah game aksi-petualangan yang berlatar
                            di pulau Tsushima selama invasi Mongol pada abad ke-13. Pemain mengendalikan Jin Sakai, seorang samurai
                            yang harus meninggalkan tradisi untuk menjadi Ghost, pejuang legendaris yang bertempur untuk kebebasan
                            pulau Tsushima. Dengan dunia terbuka yang memukau, pertarungan yang intens, dan cerita yang mendalam,
                            game ini memberikan pengalaman bermain yang epik dan emosional.
                        </p>
                        <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                            <FaFeatherAlt className="text-xl" /> Synopsis
                        </h2>
                        <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            Dalam <span className="font-medium">Ghost of Tsushima</span>, Jin Sakai menghadapi pilihan sulit antara
                            mempertahankan kode kehormatan samurai atau mengadopsi taktik baru untuk melindungi rakyatnya. Dengan
                            lanskap yang memukau, pertarungan yang mendalam, dan cerita yang penuh emosi, game ini mengajak pemain
                            untuk menjelajahi dunia yang indah namun berbahaya. Pemain dapat menggunakan berbagai senjata dan gaya
                            bertarung untuk melawan musuh yang kuat dan mempertahankan kehormatan Tsushima.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={assets.ghost}
                            alt="Ghost of Tsushima"
                            width={300}
                            height={300}
                            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                        />
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <FaGamepad className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Genre</p>
                                    <p className="text-gray-600">Action-Adventure</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaCalendarAlt className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                    <p className="text-gray-600">July 17, 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GhostTsushima;
