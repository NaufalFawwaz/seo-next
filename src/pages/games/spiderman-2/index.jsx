import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const SpiderMan2 = () => {
    return (
        <>
            <Head>
                <title>Spider-Man 2 | Filkom Game Corner UB</title>
                <meta
                    name="description"
                    content="Spider-Man 2 adalah game aksi petualangan dunia terbuka yang menggabungkan dua Spider-Men, Peter Parker dan Miles Morales, untuk melawan ancaman besar di kota New York. Rasakan pengalaman menjadi kedua Spider-Man dalam grafis memukau dan alur cerita yang mendalam."
                />
                <meta
                    name="keywords"
                    content="Spider-Man 2, Filkom UB Game corner, action-adventure, open-world, Peter Parker, Miles Morales, Venom, superhero, New York, Spider-Man game, PS5"
                />
                <meta property="og:title" content="Spider-Man 2 | Filkom Game Corner UB" />
                <meta
                    property="og:description"
                    content="Spider-Man 2 adalah game aksi petualangan dunia terbuka yang menggabungkan dua Spider-Men, Peter Parker dan Miles Morales, untuk melawan ancaman besar di kota New York. Rasakan pengalaman menjadi kedua Spider-Man dalam grafis memukau dan alur cerita yang mendalam."
                />
                <meta
                    property="og:image"
                    content="/assets/spiderman2.jpg"
                />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-next.vercel.app/games/spider-man-2"
                />
            </Head>

            <div className="flex flex-col items-center py-7">
                <h1 className="text-3xl font-bold text-center mb-2">Spider-Man 2</h1>
                <p className="text-lg text-gray-600 text-center mb-6 italic">
                    Swing into action as Peter Parker and Miles Morales in Spider-Man 2.
                </p>
                <iframe
                    src="https://www.youtube.com/embed/nq1M_Wc4FIc?si=78w1n01u5DEXDLoA"
                    title="Spider-Man 2 Trailer"
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
                            <span className="font-medium">Spider-Man 2</span> adalah game aksi petualangan dunia terbuka yang
                            menghadirkan dua pahlawan superhero legendaris, Peter Parker dan Miles Morales. Pemain dapat mengendalikan
                            kedua karakter ini untuk melawan ancaman baru yang muncul di kota New York. Dengan grafis memukau dan dunia
                            terbuka yang luas, game ini menawarkan pengalaman menjadi Spider-Man dalam segala hal, termasuk kemampuan
                            unik masing-masing karakter. Setiap karakter memiliki gaya bertarung dan kemampuan spesial, seperti web-swinging,
                            pertarungan tangan kosong, dan penggunaan kekuatan super lainnya.
                        </p>
                        <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                            <FaFeatherAlt className="text-xl" /> Synopsis
                        </h2>
                        <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            Dalam <span className="font-medium">Spider-Man 2</span>, pemain mengendalikan dua Spider-Men yang berbeda—Peter
                            Parker dan Miles Morales—yang bekerja sama untuk melawan ancaman besar yang muncul di New York. Musuh utama
                            mereka kali ini adalah Venom, yang membawa kehancuran dan kekacauan ke kota. Dengan dunia terbuka yang luas,
                            pemain dapat menjelajahi setiap sudut kota, melakukan misi utama maupun sampingan, dan bertarung melawan musuh-musuh
                            ikonik dari dunia Spider-Man. Game ini juga menghadirkan banyak elemen interaktif, seperti kemampuan untuk berayun
                            di antara gedung-gedung pencakar langit dan menggunakan teknologi serta kekuatan super untuk mengalahkan musuh.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src={assets.spiderman}
                            alt="Spider-Man 2 PS5"
                            width={300} height={300}
                            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                        />
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <FaGamepad className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Genre</p>
                                    <p className="text-gray-600">Action-Adventure, Open-World</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaCalendarAlt className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                    <p className="text-gray-600">October 20, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpiderMan2;
