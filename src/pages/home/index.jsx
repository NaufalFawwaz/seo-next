import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ContentLayout from '../../components/ContentLayout';
import Image from 'next/image';
import assets from '../../assets';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Marquee = dynamic(() => import('react-marquee-slider'), { ssr: false });

const StructuredData = () => (
  <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Filkom UB Game Corner",
          "description": "Filkom UB Game Corner menawarkan pengalaman bermain game yang seru dengan koleksi game terbaru dan fasilitas gaming lengkap.",
          "publisher": {
            "@type": "Organization",
            "name": "FILKOM UB"
          },
          "url": "https://filkom-ub-game-corner-next.vercel.app/",
        }),
      }}
    />
  </Head>
);

export const Banner = ({ style }) => {
    return (
      <motion.div
        style={style}
        className="flex flex-col items-center pt-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-primary3 text-3xl sm:text-5xl 2xl:text-[3.15rem] font-bold text-center mb-8 overflow-hidden whitespace-nowrap border-r-4 border-primary1 animate-typing">
          Welcome To Filkom Game Corner
        </h1>
        <p className="text-white text-center text-xl sm:text-2xl lg:text-2xl font-medium w-full sm:w-auto lg:w-[786px] px-4 sm:px-6 lg:px-0">
          Rasakan pengalaman bermain game yang seru di Filkom Game Corner! Mainkan koleksi game terbaru kami, atau tantang temanmu dalam pertandingan seru.
        </p>
        <Link href="/info" className="bg-primary3 text-xl rounded-lg font-semibold text-primary1 py-4 text-center w-[350px] mt-10 hover:bg-[#1B9BA2] hover:text-white transition duration-300">
          Explore Filkom Game Collection
        </Link>
      </motion.div>
    );
  };

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center pt-7 gap-4 bg-[#EFF0F3]">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl text-primary1">ABOUT</h2>
        <Image src={assets.garis} alt="Line separator" className="pt-4" width={255} height={39} />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 text-primary2">
        <p className="text-lg font-semibold leading-relaxed text-center md:text-left md:w-1/2 pb-8">
          FILKOM UB secara resmi telah meresmikan “Game Corner”, sebuah ruang khusus yang diperuntukkan bagi mahasiswa untuk menghabiskan waktu luang mereka antar kuliah. Game Corner ini merupakan bentuk Kerjasama FILKOM UB dengan Bank Rakyat Indonesia (BRI). Letak dari ruang Game Corner ini berada di Gedung F lantai 1 di depan Loket Pelayanan Akademik.
        </p>
        <div className="md:w-1/2 flex justify-center">
          <Image src={assets.pict} alt="Filkom Game Corner interior showing gaming consoles" className="rounded-lg shadow-lg max-w-full h-auto" width={500} height={299} />
        </div>
      </div>
    </div>
  );
};

const Fasilitas = () => {
  const consoleData = [assets.pumpItUp, assets.ps5, assets.xbox, assets.rog, assets.pumpItUp, assets.ps5, assets.xbox, assets.rog];
  const gameData = [assets.assassin, assets.gow, assets.re2, assets.re3, assets.spiderman, assets.tekken, assets.cod, assets.finalfantasy, assets.dmc5, assets.away, assets.watchdog, assets.turismo];

  return (
    <div id="facility" className="flex flex-col items-center pt-7 bg-primary3 transition-opacity duration-1000 transform">
      <h2 className="font-bold text-3xl text-primary1">FACILITY</h2>
      <Image src={assets.garis} alt="Line separator" className="pt-4" width={255} height={39} />

      <div className="overflow-hidden py-6 w-full">
        <h3 className="font-bold text-2xl text-primary1 p-4">Gaming Console</h3>
        <Marquee gradient={false} speed={50} className="gap-8">
          {consoleData.map((imgSrc, index) => (
            <Image key={index} src={imgSrc} alt="Console" className="px-3" width={300} height={300} quality={100} layout="intrinsic"/>
          ))}
        </Marquee>
      </div>

      <div className="overflow-hidden py-6 w-full">
        <h3 className="font-bold text-2xl text-primary1 p-4">Available Games</h3>
        <Marquee gradient={false} speed={50} className="gap-8">
          {gameData.map((imgSrc, index) => (
            <Image key={index} src={imgSrc} alt="Game" className="px-3" width={300} height={300} quality={100} layout="intrinsic" />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <StructuredData />
      <Head>
        <meta name="description" content="Filkom Game Corner menawarkan pengalaman bermain game yang seru dengan koleksi game terbaru dan fasilitas gaming lengkap." />
        <meta name="keywords" content="Filkom UB Game Corner, Filkom UB, Filkom Game Corner, Game Corner, gaming console, available games, PS5, Xbox, gaming facility" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Filkom Game Corner - Enjoy the Latest Games" />
        <meta property="og:description" content="Rasakan pengalaman bermain game di Filkom Game Corner dengan koleksi game terbaru dan fasilitas lengkap." />
        <meta property="og:image" content="../assets/pict.jpg" />
        <meta property="og:url" content="https://filkom-ub-game-corner-next.vercel.app/" />
        <title>Filkom Game Corner | Mainkan Game Terbaru dan Seru!</title>
      </Head>
      <ContentLayout>
        <Banner style={{ backgroundImage: `url(${assets.background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '540px' }} />
        <About />
        <Fasilitas />
      </ContentLayout>
    </div>
  );
};

export default Home;
