import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const FinalFantasy = () => {
    return (
        <>
            <Head>
                <title>Final Fantasy 7 Rebirth | Filkom Game Corner UB</title>
                <meta
                    name="description"
                    content="Final Fantasy 7 Rebirth adalah sekuel dari Final Fantasy 7 Remake, melanjutkan kisah Cloud Strife dan teman-temannya dalam menghadapi ancaman global dan kekuatan jahat yang lebih besar."
                />
                <meta
                    name="keywords"
                    content="Final Fantasy 7 Rebirth, Filkom UB Game Corner, RPG, action, Cloud Strife, Shinra, sekuel, game PS5, PlayStation, Square Enix"
                />
                <meta property="og:title" content="Final Fantasy 7 Rebirth | Filkom Game Corner UB" />
                <meta
                    property="og:description"
                    content="Final Fantasy 7 Rebirth adalah sekuel dari Final Fantasy 7 Remake, melanjutkan kisah Cloud Strife dan teman-temannya dalam menghadapi ancaman global dan kekuatan jahat yang lebih besar."
                />
                <meta
                    property="og:image"
                    content="/assets/finalfantasy7rebirth.jpg"
                />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-next.vercel.app/info/final-fantasy-7-rebirth"
                />
            </Head>

            <div className="flex flex-col items-center py-7">
                <h1 className="text-3xl font-bold text-center mb-2">Final Fantasy 7 Rebirth</h1>
                <p className="text-lg text-gray-600 text-center mb-6 italic">
                    The next chapter in the iconic Final Fantasy 7 saga.
                </p>
                <iframe
                    src="https://youtube.com/embed/Q56cRDseTGQ?si=ajNTs0MwWaR2KFtX"
                    title="Final Fantasy 7 Rebirth Trailer"
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
                            <span className="font-medium">*Final Fantasy 7 Rebirth*</span> adalah sekuel dari *Final Fantasy 7 Remake*,
                            yang melanjutkan kisah legendaris Cloud Strife dan para pahlawan lainnya dalam menghadapi ancaman global
                            dari Shinra dan ancaman yang lebih besar. Dengan grafis yang memukau, dunia terbuka yang lebih luas, dan
                            cerita yang mendalam, game ini menawarkan pengalaman RPG yang luar biasa. Pemain akan menjelajahi dunia
                            yang lebih besar dengan kebebasan yang lebih tinggi, bertarung melawan musuh-musuh ikonik, dan membuat pilihan
                            yang akan memengaruhi jalan cerita.
                        </p>
                        <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                            <FaFeatherAlt className="text-xl" /> Synopsis
                        </h2>
                        <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            Dalam <span className="font-medium">*Final Fantasy 7 Rebirth*</span>, pemain melanjutkan petualangan
                            Cloud Strife dan teman-temannya yang berusaha mengungkap misteri di balik kekuatan jahat yang mengancam
                            dunia mereka. Dengan menghadapi berbagai musuh kuat dan membuat pilihan jalur cerita yang bisa mengubah
                            takdir mereka, *Final Fantasy 7 Rebirth* menjanjikan sebuah kisah epik yang tak terlupakan. Cerita baru
                            ini akan memperkenalkan karakter-karakter baru dan mengembangkan cerita dari *Final Fantasy 7 Remake*,
                            menggabungkan aksi, eksplorasi, dan narasi yang mendalam.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={assets.finalfantasy}
                            alt="Final Fantasy 7 Rebirth"
                            width={300} height={300}
                            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                        />
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <FaGamepad className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Genre</p>
                                    <p className="text-gray-600">Role-Playing Game (RPG), Action</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaCalendarAlt className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                    <p className="text-gray-600">TBA 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FinalFantasy;
