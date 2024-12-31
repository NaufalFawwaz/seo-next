import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const GodOfWar = () => {
    return (
        <>
            <Head>
                <title>God of War | Filkom Game Corner UB</title>
                <meta
                    name="description"
                    content="God of War adalah game aksi-petualangan epik yang mengikuti perjalanan Kratos dan Atreus di dunia mitologi Nordik."
                />
                <meta
                    name="keywords"
                    content="God of War, action-adventure, Kratos, Atreus, PlayStation, PS4, PS5"
                />
                <meta property="og:title" content="God of War | Filkom Game Corner UB" />
                <meta
                    property="og:description"
                    content="God of War adalah game aksi-petualangan epik yang mengikuti perjalanan Kratos dan Atreus di dunia mitologi Nordik."
                />
                <meta
                    property="og:image"
                    content="/assets/godOfwar.jpg"
                />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-next.vercel.app/games/god-of-war"
                />
            </Head>

            <div className="flex flex-col items-center py-7">
                <h1 className="text-3xl font-bold text-center mb-2">God of War</h1>
                <p className="text-lg text-gray-600 text-center mb-6 italic">
                    Embark on an epic journey with Kratos and Atreus.
                </p>
                <iframe
                    src="https://youtube.com/embed/K0u_kAWLJOA"
                    title="God of War Trailer"
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
                            <span className="font-medium">God of War</span> adalah sebuah mahakarya aksi-petualangan yang membawa kita dalam perjalanan emosional bersama Kratos, mantan dewa perang yang kini berusaha meninggalkan masa lalunya. Dalam petualangannya di dunia mitologi Nordik, Kratos tidak hanya menghadapi makhluk mitologis yang mengerikan, tetapi juga harus belajar menjadi ayah yang baik bagi putranya, Atreus. Dengan pertarungan yang epik, eksplorasi dunia yang luas, dan cerita yang menyentuh hati, God of War menawarkan pengalaman bermain yang tak terlupakan.
                        </p>
                        <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                            <FaFeatherAlt className="text-xl" /> Synopsis
                        </h2>
                        <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            Dalam <span className="font-medium">God of War</span>, Kratos, yang dikenal karena amarahnya yang tak terkendali, berusaha meninggalkan masa lalunya sebagai dewa perang Yunani. Bersama putranya, Atreus, ia memulai perjalanan untuk menyebarkan abu istri tercintanya di puncak tertinggi sembilan dunia. Perjalanan mereka membawa mereka ke dalam dunia mitologi Nordik yang penuh dengan keajaiban dan bahaya. Kratos harus belajar untuk mengendalikan amarahnya dan menjadi ayah yang baik bagi Atreus, sementara Atreus harus belajar tentang dunia yang keras dan penuh dengan misteri. Bersama-sama, mereka akan menghadapi dewa-dewa Nordik yang kuat, raksasa yang ganas, dan rahasia-rahasia yang tersembunyi di balik mitos-mitos kuno.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={assets.godOfwar}
                            alt="God of War"
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
                                    <p className="text-gray-600">April 20, 2018</p>
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
