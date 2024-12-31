import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const NBA = () => {
    return (
        <>
            <Head>
                <title>NBA 2K25 | Filkom Game Corner UB</title>
                <meta
                    name="description"
                    content="NBA 2K25 membawa pengalaman simulasi bola basket yang realistis dengan grafis canggih dan gameplay yang mendalam."
                />
                <meta
                    name="keywords"
                    content="NBA 2K25, basketball, sports game, simulation, NBA, multiplayer, career mode"
                />
                <meta
                    property="og:title"
                    content="NBA 2K25 | Filkom Game Corner UB"
                />
                <meta
                    property="og:description"
                    content="NBA 2K25 membawa pengalaman simulasi bola basket yang realistis dengan grafis canggih dan gameplay yang mendalam."
                />
                <meta
                    property="og:image"
                    content="/assets/nba.jpg"
                />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-next.vercel.app/games/nba2k25"
                />
            </Head>

            <div className="flex flex-col items-center py-7">
                <h1 className="text-3xl font-bold text-center mb-2">NBA 2K25</h1>
                <p className="text-lg text-gray-600 text-center mb-6 italic">
                    Experience the thrill of basketball like never before with NBA 2K25.
                </p>
                <iframe
                    src="https://youtube.com/embed/zwQ9RjfvJN0?si=bKkI6JG1ZpllNyQB"
                    title="NBA 2K25 Trailer"
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
                            <span className="font-medium">NBA 2K25</span> adalah game simulasi bola basket terbaik yang
                            menghadirkan grafis canggih dan gameplay realistis. Game ini memungkinkan pemain untuk bermain sebagai
                            tim favorit mereka atau menciptakan pemain impian dalam mode karier yang mendalam. Dengan fitur online
                            multiplayer dan konten yang diperbarui secara berkala, game ini memberikan pengalaman basket yang
                            mendalam.
                        </p>
                        <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                            <FaFeatherAlt className="text-xl" /> Synopsis
                        </h2>
                        <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            <span className="font-medium">NBA 2K25</span> membawa pemain ke dunia bola basket dengan fitur-fitur
                            seperti alur cerita menarik dalam mode MyCareer, manajemen tim dalam MyGM, dan tantangan kompetitif
                            online. Dengan kontrol yang ditingkatkan dan animasi yang realistis, game ini menjadi pilihan utama
                            bagi penggemar olahraga.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={assets.nba}
                            alt="NBA 2K25"
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
                                    <p className="text-gray-600">September 8, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NBA;
