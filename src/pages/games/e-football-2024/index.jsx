import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const EFootball2024 = () => {
    return (
        <>
            <Head>
                <title>eFootball 2024 | Filkom Game Corner UB</title>
                <meta
                    name="description"
                    content="eFootball 2024 menghadirkan pengalaman sepak bola digital dengan gameplay inovatif dan visual yang memukau."
                />
                <meta
                    name="keywords"
                    content="eFootball 2024, football, soccer, sports game, Konami, multiplayer, career mode"
                />
                <meta
                    property="og:title"
                    content="eFootball 2024 | Filkom Game Corner UB"
                />
                <meta
                    property="og:description"
                    content="eFootball 2024 menghadirkan pengalaman sepak bola digital dengan gameplay inovatif dan visual yang memukau."
                />
                <meta
                    property="og:image"
                    content="/assets/pes.jpg"
                />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-next.vercel.app/games/efootball2024"
                />
            </Head>

            <div className="flex flex-col items-center py-7">
                <h1 className="text-3xl font-bold text-center mb-2">eFootball 2024</h1>
                <p className="text-lg text-gray-600 text-center mb-6 italic">
                    Experience the thrill of the pitch with eFootball 2024.
                </p>
                <iframe
                    src="https://www.youtube.com/embed/BdyXsZMPjWo?si=b4qH21oAxZ5dJfHT"
                    title="eFootball 2024 Trailer"
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
                            <span className="font-medium">eFootball 2024</span> adalah game simulasi sepak bola yang
                            membawa gameplay yang lebih realistis, kontrol yang ditingkatkan, dan visual memukau. Game ini
                            menawarkan mode online multiplayer yang kompetitif, mode karier mendalam, dan pembaruan konten
                            berkala yang menjaga permainan tetap segar.
                        </p>
                        <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                            <FaFeatherAlt className="text-xl" /> Synopsis
                        </h2>
                        <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            <span className="font-medium">eFootball 2024</span> menempatkan pemain di tengah pertandingan
                            sepak bola dengan atmosfer stadion yang hidup. Nikmati pengembangan strategi, kontrol pemain yang
                            mendalam, dan fitur kompetitif yang dirancang untuk para penggemar sepak bola di seluruh dunia.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={assets.pes}
                            alt="eFootball 2024"
                            width={300}
                            height={300}
                            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                        />
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <FaGamepad className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Genre</p>
                                    <p className="text-gray-600">Sports, Simulation</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaCalendarAlt className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                    <p className="text-gray-600">August 18, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EFootball2024;
