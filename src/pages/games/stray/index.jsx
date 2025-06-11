import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const Stray = () => {
    return (
        <>
            <Head>
                <title>Stray | Filkom Game Corner UB</title>
                <meta
                    name="description"
                    content="Stray adalah petualangan aksi dengan gameplay yang unik, mengendalikan seekor kucing di dunia futuristik yang penuh misteri."
                />
                <meta
                    name="keywords"
                    content="Stray, cat, adventure, action, PS5, PS4, indie game, futuristic, exploration"
                />
                <meta property="og:title" content="Stray | Filkom Game Corner UB" />
                <meta
                    property="og:description"
                    content="Stray adalah petualangan aksi dengan gameplay yang unik, mengendalikan seekor kucing di dunia futuristik yang penuh misteri."
                />
                <meta
                    property="og:image"
                    content="/assets/stray.jpg"
                />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-next.vercel.app/games/stray"
                />
            </Head>

            <div className="flex flex-col items-center py-7">
                <h1 className="text-3xl font-bold text-center mb-2">Stray</h1>
                <p className="text-lg text-gray-600 text-center mb-6 italic">
                    Explore a futuristic world as a stray cat and uncover its mysteries.
                </p>
                <iframe
                    src="https://www.youtube.com/embed/u84hRUQlaio?si=S1yVnq-LNtwYO0jI"
                    title="Stray Trailer"
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
                            <span className="font-medium">Stray</span> adalah game petualangan aksi di mana pemain mengendalikan
                            seekor kucing di dunia futuristik yang penuh dengan robot, makhluk misterius, dan teknologi yang
                            terlupakan. Dengan grafis yang memukau dan gameplay yang imersif, Stray mengajak pemain untuk menjelajahi
                            kota yang luas, memecahkan teka-teki, dan bertarung melawan musuh yang menantang.
                        </p>
                        <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                            <FaFeatherAlt className="text-xl" /> Synopsis
                        </h2>
                        <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            Dalam <span className="font-medium">Stray</span>, pemain mengikuti petualangan seekor kucing yang
                            terjebak di dunia futuristik yang penuh dengan rahasia. Pemain harus menjelajahi dunia tersebut, berinteraksi
                            dengan robot, menghindari bahaya, dan mengungkap misteri yang ada di balik kota yang hancur. Dengan gameplay
                            yang menggabungkan eksplorasi dan aksi, Stray menawarkan pengalaman yang unik dan memikat.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={assets.stray}
                            alt="Stray"
                            width={300}
                            height={300}
                            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                        />
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <FaGamepad className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Genre</p>
                                    <p className="text-gray-600">Adventure, Action, Indie</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaCalendarAlt className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                    <p className="text-gray-600">July 19, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stray;
