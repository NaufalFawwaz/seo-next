import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const MilesMorales = () => {
    return (
        <>
            <Head>
                <title>Spider-Man: Miles Morales | Filkom Game Corner UB</title>
                <meta
                    name="description"
                    content="Spider-Man: Miles Morales adalah game aksi-petualangan yang mengikuti kisah Miles Morales saat ia menjadi Spider-Man."
                />
                <meta
                    name="keywords"
                    content="Spider-Man: Miles Morales, action, adventure, Marvel, superhero, PS5, PS4"
                />
                <meta property="og:title" content="Spider-Man: Miles Morales | Filkom Game Corner UB" />
                <meta
                    property="og:description"
                    content="Spider-Man: Miles Morales adalah game aksi-petualangan yang mengikuti kisah Miles Morales saat ia menjadi Spider-Man."
                />
                <meta
                    property="og:image"
                    content="/assets/miles.jpg"
                />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-next.vercel.app/games/spiderman-miles-morales"
                />
            </Head>

            <div className="flex flex-col items-center py-7">
                <h1 className="text-3xl font-bold text-center mb-2">Spider-Man: Miles Morales</h1>
                <p className="text-lg text-gray-600 text-center mb-6 italic">
                    Step into the shoes of Miles Morales as he takes on the mantle of Spider-Man.
                </p>
                <iframe
                    src="https://youtube.com/embed/ymEnvJSFqfw?si=TZaQBIazIgQSSleM"
                    title="Spider-Man: Miles Morales Trailer"
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
                            <span className="font-medium">Spider-Man: Miles Morales</span> adalah game aksi-petualangan yang dikembangkan oleh
                            Insomniac Games. Pemain mengikuti perjalanan Miles Morales saat ia melatih kekuatannya dan mengambil
                            tanggung jawab sebagai Spider-Man baru di New York City. Dengan grafis memukau dan gameplay dinamis,
                            game ini menawarkan pengalaman yang intens dan emosional.
                        </p>
                        <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                            <FaFeatherAlt className="text-xl" /> Synopsis
                        </h2>
                        <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            Dalam <span className="font-medium">Spider-Man: Miles Morales</span>, pemain akan mengikuti kisah Miles, yang
                            berjuang untuk menemukan tempatnya sebagai Spider-Man saat Peter Parker sedang pergi. Dengan kekuatan
                            baru yang unik seperti bio-electric venom blast dan kamuflase, Miles harus melindungi kota dari ancaman
                            berbahaya, termasuk konflik antara perusahaan energi Roxxon dan kelompok militan The Underground.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={assets.miles}
                            alt="Spider-Man: Miles Morales"
                            width={300}
                            height={300}
                            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                        />
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <FaGamepad className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Genre</p>
                                    <p className="text-gray-600">Action, Adventure</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaCalendarAlt className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                    <p className="text-gray-600">November 12, 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MilesMorales;
