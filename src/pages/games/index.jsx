import { useRouter } from 'next/router';
import { useState } from 'react';
import assets from '../../assets';
import Head from 'next/head';
import Image from 'next/image';

const InfoCollection = ({ games }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Filkom Game Corner Collection</title>
        <meta name="description" content="Temukan koleksi game terbaru di Filkom Game Corner!" />
        <meta name="keywords" content="Filkom UB Game Corner, Filkom Game Corner, koleksi game, PS5, Xbox, game seru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Filkom UB Game Corner Collection" />
        <meta property="og:description" content="Jelajahi berbagai game seru yang bisa dimainkan di berbagai konsol." />
      </Head>

      <div className="p-10">
        <h1 className="text-3xl font-bold text-center mb-6">Filkom Game Corner Collection</h1>
        
        <div className="mb-6 text-center">
          <input
            type="text"
            placeholder="Cari game"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-md"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredGames.map((game, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => router.push(`/games/${game.route}`)}
            >
              <Image
                src={game.img}
                alt={game.name}
                className="w-full object-contain bg-gray-100"
                width={500}
                height={300}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-out">
                <p className="text-white font-bold text-lg mb-2">{game.name}</p>
                <p className="text-sm text-gray-300">Click to View Details</p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredGames.length === 0 && (
          <p className="text-center text-3xl font-bold text-gray-500 mt-6">Game belum ada.</p>
        )}
      </div>
    </>
  );
};

// SSG
export async function getStaticProps() {
  const games = [
    { name: 'Assassins Creed Mirage', img: assets.assassin, route: 'assassins-creed-mirage' },
    { name: 'God of War: Ragnarok', img: assets.gow, route: 'god-of-war-ragnarok' },
    { name: 'Resident Evil 2', img: assets.re2, route: 'resident-evil-2' },
    { name: 'Resident Evil 3', img: assets.re3, route: 'resident-evil-3' },
    { name: 'Spider-Man 2', img: assets.spiderman, route: 'spiderman-2' },
    { name: 'Tekken 8', img: assets.tekken, route: 'tekken8' },
    { name: 'Gran Turismo 7', img: assets.turismo, route: 'gran-turismo-7' },
    { name: 'Devil My Cry 5', img: assets.dmc5, route: 'devil-my-cry-5' },
    { name: 'A Way Out', img: assets.away, route: 'a-way-out' },
    { name: 'Call Of Duty Modern Warfare III', img: assets.cod, route: 'call-of-duty-modern-warfare-III' },
    { name: 'Watch Dog Legion', img: assets.watchdog, route: 'watch-dog-legion' },
    { name: 'Final Fantasy VII Rebirth', img: assets.finalfantasy, route: 'final-fantasy-VII' },
    { name: 'Elden Ring', img: assets.EldenRing, route: 'elden-ring' },
    { name: 'FIFA 2023', img: assets.fifa, route: 'fifa-2023' },
    { name: 'Ghost Of Tsushima', img: assets.ghost, route: 'ghost-of-tsushima' },
    { name: 'God Of War', img: assets.godOfwar, route: 'god-of-war' },
    { name: 'Grand Theft Auto V', img: assets.gtaV, route: 'grand-theft-auto-v' },
    { name: 'It Takes Two', img: assets.itTakestwo, route: 'it-takes-two' },
    { name: 'Spider-man Miles Morales', img: assets.miles, route: 'spiderman-miles-morales' },
    { name: 'Stray', img: assets.stray, route: 'stray' },
    { name: 'Call Of Duty Modern Warfare II', img: assets.mw2, route: 'call-of-duty-modern-warfare-II' },
    { name: 'NBA 2K25', img: assets.nba, route: 'nba-2025' },
    { name: 'PES 2024', img: assets.pes, route: 'e-football-2024' },
    { name: 'Street Fighter 6', img: assets.StreetFighter6, route: 'street-fighter-6' },
    { name: 'Uncharted 4', img: assets.uncharted, route: 'uncharted-4' },
    { name: 'Until Dawn', img: assets.untilDawn, route: 'until-dawn' },
    { name: 'Assassins Creed Valhalla', img: assets.valhalla, route: 'assassins-creed-valhalla' },
  ];

  return {
    props: {
      games,
    },
  };
}

export default InfoCollection;
