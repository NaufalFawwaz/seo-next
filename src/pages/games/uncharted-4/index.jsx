import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const Uncharted4 = () => {
    return (
        <>
            <Head>
                <title>Uncharted 4 | Filkom Game Corner UB</title>
                <meta
                    name="description"
                    content="Uncharted 4 membawa Anda ke petualangan epik dengan narasi mendalam, visual yang memukau, dan aksi penuh teka-teki."
                />
                <meta
                    name="keywords"
                    content="Uncharted 4, action-adventure, Naughty Dog, treasure hunt, puzzle, cinematic game"
                />
                <meta
                    property="og:title"
                    content="Uncharted 4 | Filkom Game Corner UB"
                />
                <meta
                    property="og:description"
                    content="Uncharted 4 membawa Anda ke petualangan epik dengan narasi mendalam, visual yang memukau, dan aksi penuh teka-teki."
                />
                <meta
                    property="og:image"
                    content="/assets/uncharted.jpg"
                />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-next.vercel.app/games/uncharted4"
                />
            </Head>

            <div className="flex flex-col items-center py-7">
                <h1 className="text-3xl font-bold text-center mb-2">Uncharted 4</h1>
                <p className="text-lg text-gray-600 text-center mb-6 italic">
                    Embark on a thrilling treasure hunt with Nathan Drake in Uncharted 4.
                </p>
                <iframe
                    src="https://www.youtube.com/embed/hh5HV4iic1Y?si=uAVb1LmFRJch3m6m"
                    title="Uncharted 4 Trailer"
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
                            <span className="font-medium">Uncharted 4</span> adalah puncak dari petualangan Nathan Drake yang legendaris. Dengan grafis yang memukau dan gameplay yang halus, game ini membawa kita dalam perjalanan yang penuh aksi dan emosi. Jelajahi dunia yang eksotis, pecahkan teka-teki yang rumit, dan hadapi bahaya yang mengancam nyawa. Uncharted 4 bukan hanya sebuah game, tetapi sebuah karya seni interaktif yang akan membuat Anda terpesona dari awal hingga akhir.
                        </p>
                        <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                            <FaFeatherAlt className="text-xl" /> Synopsis
                        </h2>
                        <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            Dalam Uncharted 4: A Thief's End, Nathan Drake, yang telah memutuskan untuk hidup tenang, kembali ke dunia petualangan ketika saudaranya, Sam, muncul dengan sebuah petunjuk tentang harta karun legendaris Henry Avery. Bersama-sama, mereka menjelajahi pulau-pulau terpencil, hutan belantara yang lebat, dan kota-kota kuno. Namun, perjalanan mereka tidaklah mudah, karena mereka harus menghadapi persaingan dari kelompok pencari harta lainnya dan bahaya-bahaya yang mengintai di setiap sudut.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={assets.uncharted}
                            alt="Uncharted 4"
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
                                    <p className="text-gray-600">May 10, 2016</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Uncharted4;
