import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const StreetFighter6 = () => {
    return (
        <>
            <Head>
                <title>Street Fighter 6 | Filkom Game Corner UB</title>
                <meta
                    name="description"
                    content="Street Fighter 6 membawa pengalaman pertarungan yang mendalam dengan karakter-karakter legendaris dan mode permainan yang menarik."
                />
                <meta
                    name="keywords"
                    content="Street Fighter 6, fighting game, Capcom, multiplayer, esports, arcade, versus mode"
                />
                <meta
                    property="og:title"
                    content="Street Fighter 6 | Filkom Game Corner UB"
                />
                <meta
                    property="og:description"
                    content="Street Fighter 6 membawa pengalaman pertarungan yang mendalam dengan karakter-karakter legendaris dan mode permainan yang menarik."
                />
                <meta
                    property="og:image"
                    content="/assets/StreetFighter6.jpg"
                />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-next.vercel.app/games/streetfighter6"
                />
            </Head>

            <div className="flex flex-col items-center py-7">
                <h1 className="text-3xl font-bold text-center mb-2">Street Fighter 6</h1>
                <p className="text-lg text-gray-600 text-center mb-6 italic">
                    Unleash your fighting spirit with Street Fighter 6.
                </p>
                <iframe
                    src="https://youtube.com/embed/U747IQXEoto?si=ncTO3NbPS9Ey_o8N"
                    title="Street Fighter 6 Trailer"
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
                            <span className="font-medium">Street Fighter 6</span> adalah game fighting terbaru dari
                            Capcom yang memperkenalkan mekanisme pertarungan baru, mode permainan inovatif, dan roster karakter yang
                            luas. Game ini dirancang untuk pemain kasual hingga profesional esports.
                        </p>
                        <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                            <FaFeatherAlt className="text-xl" /> Synopsis
                        </h2>
                        <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            Dalam Street Fighter 6, pemain akan merasakan atmosfer pertarungan epik dengan grafis
                            yang memukau dan kontrol yang responsif. Mode single-player dan multiplayer memberikan pengalaman
                            yang mendalam bagi semua penggemar genre fighting.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={assets.StreetFighter6}
                            alt="Street Fighter 6"
                            width={300}
                            height={300}
                            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                        />
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <FaGamepad className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Genre</p>
                                    <p className="text-gray-600">Fighting, Action</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaCalendarAlt className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                    <p className="text-gray-600">June 2, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StreetFighter6;
