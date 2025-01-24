import Image from "next/image";
import Card from "../components/card";

export default function Home() {
  const locations = [
    {
      id: 1,
      name: 'Malappuram',
    },
    {
      id: 2,
      name: 'Kozhikode',
    },
    {
      id: 3,
      name: 'Kannur',
    },
    {
      id: 4,
      name: 'Wayanad',
    },
    {
      id: 5,
      name: 'Kasarkod',
    },
    {
      id: 6,
      name: 'Thrisur',
    },
    {
      id: 7,
      name: 'Aranakulam',
    },
    {
      id: 8,
      name: 'Palakad',
    },
  ];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-3 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance" >Namaz in Kerala</h1>
        </div>
        {/* display the locations in a searchable dropdown */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <label htmlFor="location">Select a location</label>
          <select
            id="location"
            name="location"
            className="p-2 border border-gray-300 rounded-md"
          >
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>

          {/* display a good date picker */}
          <label htmlFor="date">Select a date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="p-2 border border-gray-300 rounded-md"
          />
          
        </div>
        <div>
          <button className="p-2 bg-blue-500 text-white rounded-md">
            Search
          </button>
          <Card />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-blue-600"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-blue-600"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-blue-600"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
