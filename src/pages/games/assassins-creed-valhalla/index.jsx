import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const Valhalla = () => {
    return (
        <>
            <Head>
                <title>Assassin's Creed Valhalla | Filkom Game Corner UB</title>
                <meta
                    name="description"
                    content="Assassin's Creed Valhalla adalah game aksi-petualangan berlatar era Viking yang epik, di mana Anda bermain sebagai Eivor, seorang prajurit Viking yang mencari rumah baru di tanah Inggris abad pertengahan."
                />
                <meta
                    name="keywords"
                    content="Assassin's Creed Valhalla, Ubisoft, Viking, open world, action-adventure, historical game"
                />
                <meta
                    property="og:title"
                    content="Assassin's Creed Valhalla | Filkom Game Corner UB"
                />
                <meta
                    property="og:description"
                    content="Assassin's Creed Valhalla adalah game aksi-petualangan berlatar era Viking yang epik, di mana Anda bermain sebagai Eivor, seorang prajurit Viking yang mencari rumah baru di tanah Inggris abad pertengahan."
                />
                <meta
                    property="og:image"
                    content="/assets/valhalla.jpg"
                />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-next.vercel.app/games/valhalla"
                />
            </Head>

            <div className="flex flex-col items-center py-7">
                <h1 className="text-3xl font-bold text-center mb-2">Assassin's Creed Valhalla</h1>
                <p className="text-lg text-gray-600 text-center mb-6 italic">
                    Lead your clan to glory in the age of Vikings.
                </p>
                <iframe
                    src="https://www.youtube.com/embed/yaoUZKnLvVA?si=5rcqlv0F-7-aPfO9"
                    title="Assassin's Creed Valhalla Trailer"
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
                            <span className="font-medium">Assassin's Creed Valhalla</span> adalah game aksi-petualangan 
                            yang dikembangkan oleh Ubisoft. Game ini berlatar di masa kejayaan era Viking pada abad ke-9 
                            dan mengikuti kisah Eivor, seorang prajurit Viking yang memimpin klan mereka untuk menemukan 
                            rumah baru di tanah Inggris. Pemain akan menjelajahi dunia terbuka yang luas, membangun 
                            permukiman, dan membuat aliansi strategis sambil bertempur melawan ancaman dari dunia luar 
                            dan menjalani konflik internal. Dengan mekanik RPG yang mendalam, pemain dapat menyesuaikan 
                            Eivor, memilih kemampuan, senjata, dan bahkan membangun hubungan.
                        </p>
                        <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                            <FaFeatherAlt className="text-xl" /> Synopsis
                        </h2>
                        <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            Setelah mengalami konflik besar di tanah asal mereka, Norwegia, Eivor dan klannya berlayar ke 
                            Inggris untuk mencari kehidupan yang lebih baik. Namun, tanah baru ini penuh dengan tantangan, 
                            dari kerajaan-kerajaan yang kuat hingga ancaman dari dalam klan mereka sendiri. Pemain akan 
                            memimpin serangan besar-besaran, membangun permukiman yang berkembang, dan membentuk aliansi 
                            yang akan menentukan nasib klan mereka. Di tengah semua ini, Eivor juga menghadapi takdir 
                            mereka sendiri yang terkait dengan sejarah rahasia Assassin dan Templar. Setiap keputusan yang 
                            dibuat pemain akan membentuk alur cerita, menghadirkan akhir yang unik untuk setiap perjalanan.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={assets.valhalla}
                            alt="Assassin's Creed Valhalla"
                            width={300}
                            height={300}
                            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                        />
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <FaGamepad className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Genre</p>
                                    <p className="text-gray-600">Action-Adventure, RPG</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaCalendarAlt className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                    <p className="text-gray-600">November 10, 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Valhalla;
