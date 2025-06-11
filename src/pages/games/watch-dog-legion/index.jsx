import React from "react";
import assets from "../../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

const WatchDogs = () => {
    return (
        <>
            <Head>
                <title>Watch Dogs: Legion | Filkom Game Corner UB</title>
                <meta
                    name="description"
                    content="Watch Dogs: Legion is an open-world action-adventure game set in a dystopian London, where players can recruit and control different characters to fight an authoritarian regime."
                />
                <meta
                    name="keywords"
                    content="Watch Dogs: Legion, Filkom UB Game Corner, open-world, action-adventure, dystopian London, recruit characters, strategy, Ubisoft"
                />
                <meta property="og:title" content="Watch Dogs: Legion | Filkom Game Corner UB" />
                <meta
                    property="og:description"
                    content="Watch Dogs: Legion is an open-world action-adventure game set in a dystopian London, where players can recruit and control different characters to fight an authoritarian regime."
                />
                <meta
                    property="og:image"
                    content="/assets/watchdog.jpg"
                />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-next.vercel.app/info/watch-dogs"
                />
            </Head>

            <div className="flex flex-col items-center py-7">
                <h1 className="text-3xl font-bold text-center mb-2">Watch Dogs: Legion</h1>
                <p className="text-lg text-gray-600 text-center mb-6 italic">
                    Build your resistance and fight back against oppression in a futuristic London.
                </p>
                <iframe
                    src="https://www.youtube.com/embed/srXrGKGAU20?si=-q2N9wuSYhfAIwfw"
                    title="Watch Dogs: Legion Trailer"
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
                            <span className="font-medium">Watch Dogs: Legion</span> adalah game open-world yang memungkinkan pemain
                            untuk merekrut dan mengendalikan berbagai karakter di sebuah London dystopian. Pemain dapat merancang taktik
                            melalui berbagai kemampuan unik setiap karakter yang dapat direkrut, memungkinkan pendekatan permainan yang sangat
                            bervariasi. Dalam dunia yang penuh pengawasan dan teknologi canggih, pemain akan membangun sebuah perlawanan
                            yang berjuang melawan rezim otoriter yang menguasai kota. Setiap karakter yang direkrut membawa kelebihan dan
                            tantangan tersendiri, membuat setiap keputusan penting dalam merancang strategi untuk mencapai kemenangan.
                        </p>
                        <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                            <FaFeatherAlt className="text-xl" /> Synopsis
                        </h2>
                        <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            Dalam <span className="font-medium">Watch Dogs: Legion</span>, pemain dapat mengendalikan hampir setiap
                            karakter di dunia terbuka London. Pemain dapat merekrut siapa saja yang dijumpai di jalanan untuk bergabung
                            dalam pasukan perlawanan, berperang melawan penguasa otoriter yang mendominasi kota. Berbagai gaya bermain dapat
                            dipilih, mulai dari pendekatan diam-diam hingga pertempuran terbuka, dengan setiap keputusan yang diambil akan
                            mempengaruhi perjalanan cerita dan hasil akhir. Dengan grafis yang menakjubkan dan alur cerita yang penuh
                            intrik, game ini menawarkan pengalaman aksi yang mendalam dan penuh strategi.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src={assets.watchdog}
                            alt="Watch Dogs: Legion"
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
                                    <p className="text-gray-600">October 29, 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WatchDogs;
