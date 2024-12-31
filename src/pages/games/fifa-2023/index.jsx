import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const Fifa = () => {
    return (
        <>
            <Head>
                <title>FIFA 23 | Filkom Game Corner UB</title>
                <meta
                    name="description"
                    content="FIFA 23 adalah game simulasi sepak bola terbaru yang menawarkan gameplay realistis, grafis memukau, dan pengalaman sepak bola terbaik dengan fitur-fitur baru."
                />
                <meta
                    name="keywords"
                    content="FIFA 23, football simulation, soccer, EA Sports, PS5, Xbox Series X, PC"
                />
                <meta property="og:title" content="FIFA 23 | Filkom Game Corner UB" />
                <meta
                    property="og:description"
                    content="FIFA 23 adalah game simulasi sepak bola terbaru yang menawarkan gameplay realistis, grafis memukau, dan pengalaman sepak bola terbaik dengan fitur-fitur baru."
                />
                <meta
                    property="og:image"
                    content="/assets/fifa.jpg"
                />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-next.vercel.app/info/fifa-23"
                />
            </Head>

            <div className="flex flex-col items-center py-7">
                <h1 className="text-3xl font-bold text-center mb-2">FIFA 23</h1>
                <p className="text-lg text-gray-600 text-center mb-6 italic">
                    Experience the ultimate football simulation with FIFA 23.
                </p>
                <iframe
                    src="https://youtube.com/embed/o3V-GvvzjE4"
                    title="FIFA 23 Trailer"
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
                            <span className="font-medium">FIFA 23</span> adalah game simulasi sepak bola terbaru dari EA Sports
                            yang menghadirkan pengalaman bermain yang realistis dan fitur-fitur baru. Dengan grafis memukau, animasi
                            HyperMotion2 yang ditingkatkan, dan pembaruan besar pada mode permainan, FIFA 23 memberikan pengalaman
                            sepak bola terbaik untuk para penggemar olahraga ini.
                        </p>
                        <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                            <FaFeatherAlt className="text-xl" /> Synopsis
                        </h2>
                        <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            Dalam <span className="font-medium">FIFA 23</span>, pemain dapat menikmati simulasi sepak bola yang
                            realistis dengan berbagai mode permainan, seperti Career Mode, Ultimate Team, dan Volta Football. Game ini
                            juga mencakup turnamen resmi seperti FIFA World Cup, Liga Champions UEFA, dan banyak lagi. Dengan gameplay
                            yang seru dan dinamis, FIFA 23 memastikan pengalaman bermain yang tak terlupakan bagi semua pemain.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={assets.fifa}
                            alt="FIFA 23"
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
                                    <p className="text-gray-600">September 30, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fifa;
