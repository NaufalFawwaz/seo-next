import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt, FaYoutube } from "react-icons/fa";

const DevilMyCry = () => {
    return (
        <div className="flex flex-col items-center py-7">
            <h1 className="text-3xl font-bold text-center mb-2">Devil May Cry 5</h1>
            <p className="text-lg text-gray-600 text-center mb-6 italic">
                Experience the ultimate action game with Nero, Dante, and V.
            </p>
            <iframe
                src="https://youtube.com/embed/k8d8OMM-XpA?si=0FUBCQSH-WRXcPdF"
                title="Devil May Cry 5 Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="self-center rounded-md w-full md:w-[50%] h-[200px] md:h-[58vh] z-10 mb-4 shadow-lg"
            ></iframe>
            <button
                className="bg-primary1 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-primary2 flex items-center gap-2 transition-all"
                onClick={() => window.open("https://youtu.be/k8d8OMM-XpA?si=0FUBCQSH-WRXcPdF", "_blank")}
            >
                <FaYoutube className="text-lg" />
                Watch Full Trailer on YouTube
            </button>
            <div className="flex flex-col md:flex-row items-start justify-between w-full xl:px-40 px-10 gap-10">
                <div className="text-left flex-1 bg-gray-50 rounded-lg p-6 shadow-lg">
                    <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                        <FaFeatherAlt className="text-xl" /> Game Description
                    </h2>
                    <p className="text-lg xl:text-xl mb-8 max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
                        <span className="font-medium">*Devil May Cry 5*</span> adalah game aksi hack-and-slash yang menampilkan
                        karakter utama Nero, Dante, dan V dalam perjuangan mereka melawan iblis dan ancaman yang ada. Dengan
                        grafis yang memukau dan gameplay yang cepat, game ini menawarkan aksi luar biasa dan tantangan yang
                        menghibur.
                    </p>
                    <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                        <FaFeatherAlt className="text-xl" /> Synopsis
                    </h2>
                    <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
                        Dalam <span className="font-medium">*Devil May Cry 5*</span>, pemain mengikuti kisah tiga karakter utama:
                        Nero, Dante, dan V. Ketiganya berjuang untuk menghentikan kekuatan jahat yang mengancam dunia. Dengan
                        elemen hack-and-slash yang sangat dinamis dan cerita yang mendalam, game ini menonjolkan pertarungan
                        cepat, grafis yang luar biasa, dan pengalaman gameplay yang sangat memuaskan.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src={assets.dmc5}
                        alt="Devil May Cry 5"
                        className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                    />
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <FaGamepad className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Genre</p>
                                <p className="text-gray-600">Action, Hack and Slash</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCalendarAlt className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                <p className="text-gray-600">March 8, 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevilMyCry;
