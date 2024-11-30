import { useRouter } from 'next/router';
import assets from '../../assets';
import Head from 'next/head';

const InfoCollection = ({ games }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Filkom Game Corner Collection</title>
        <meta name="description" content="Temukan koleksi game terbaru di Filkom Game Corner! Jelajahi berbagai game seru yang bisa dimainkan di berbagai konsol." />
        <meta name="keywords" content="Filkom Game Corner, Filkom UB Game Corner, koleksi game, game terbaru, PS5, Xbox, PC, game seru" />
        <meta property="og:title" content="Filkom UB Game Corner Collection" />
        <meta property="og:description" content="Temukan koleksi game terbaru di Filkom Game Corner! Jelajahi berbagai game seru yang bisa dimainkan di berbagai konsol." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path/to/your/thumbnail.jpg" />
      </Head>

      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Filkom Game Corner Collection</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => router.push(`/info/${game.route}`)}
            >
              <img
                src={game.img}
                alt={game.name}
                className="w-full object-contain bg-gray-100"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-out">
                <p className="text-white font-bold text-lg mb-2">{game.name}</p>
                <p className="text-sm text-gray-300">Click to View Details</p>
              </div>
            </div>
          ))}
        </div>
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
  ];

  return {
    props: {
      games,
    },
  };
}

export default InfoCollection;
