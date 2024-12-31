import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const UntilDawn = () => {
    return (
        <>
            <Head>
                <title>Until Dawn | Filkom Game Corner UB</title>
                <meta
                    name="description"
                    content="Until Dawn adalah game horor interaktif yang menegangkan dengan alur cerita bercabang berdasarkan pilihan pemain, berlatar di sebuah pegunungan terpencil."
                />
                <meta
                    name="keywords"
                    content="Until Dawn, horror game, interactive story, Supermassive Games, survival, psychological thriller"
                />
                <meta
                    property="og:title"
                    content="Until Dawn | Filkom Game Corner UB"
                />
                <meta
                    property="og:description"
                    content="Until Dawn adalah game horor interaktif yang menegangkan dengan alur cerita bercabang berdasarkan pilihan pemain, berlatar di sebuah pegunungan terpencil."
                />
                <meta
                    property="og:image"
                    content="/assets/untilDawn.jpg"
                />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-next.vercel.app/games/untildawn"
                />
            </Head>

            <div className="flex flex-col items-center py-7">
                <h1 className="text-3xl font-bold text-center mb-2">Until Dawn</h1>
                <p className="text-lg text-gray-600 text-center mb-6 italic">
                    Your choices will determine who survives the night.
                </p>
                <iframe
                    src="https://youtube.com/embed/3NcF7EOnjow?si=eU9hAZzOszS2STiu"
                    title="Until Dawn Trailer"
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
                            <span className="font-medium">Until Dawn</span> adalah game horor interaktif yang
                            dikembangkan oleh Supermassive Games. Berlatar di sebuah pegunungan terpencil, game ini
                            menceritakan kisah delapan teman yang terjebak di sebuah pondok, berusaha bertahan dari
                            ancaman misterius yang mengintai mereka. Game ini menawarkan alur cerita bercabang
                            berdasarkan pilihan pemain yang dikenal sebagai "Butterfly Effect," di mana setiap keputusan
                            yang Anda ambil memiliki konsekuensi besar dan dapat memengaruhi siapa yang hidup atau mati.
                        </p>
                        <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                            <FaFeatherAlt className="text-xl" /> Synopsis
                        </h2>
                        <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            Ketika delapan teman berkumpul di sebuah pondok di pegunungan untuk memperingati setahun
                            hilangnya dua teman mereka, perayaan tersebut berubah menjadi mimpi buruk. Malam yang
                            seharusnya penuh kenangan indah menjadi penuh teror ketika mereka menyadari bahwa mereka
                            tidak sendirian. Terjebak tanpa jalan keluar dan dikejar oleh ancaman misterius, mereka
                            harus membuat keputusan sulit untuk bertahan hidup. Setiap pilihan yang dibuat oleh pemain
                            akan memengaruhi alur cerita, membuka misteri, dan menentukan nasib setiap karakter.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={assets.untilDawn}
                            alt="Until Dawn"
                            width={300}
                            height={300}
                            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                        />
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <FaGamepad className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Genre</p>
                                    <p className="text-gray-600">Horror, Interactive Drama</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaCalendarAlt className="text-primary1 text-3xl" />
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                    <p className="text-gray-600">August 25, 2015</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UntilDawn;
