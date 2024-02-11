import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import Carousel from './components/Carousel';

export default function Home() {
  return (
    <div>
      <nav className="flex justify-end">
        <button className="bg-white text-blue-400  border-blue-400 border-2 px-5 py-3 mt-5 mr-20 rounded-lg font-bold hover:bg-blue-400 hover:text-white transition-all delay-75">
          Hire me
        </button>
      </nav>
      <div className="hero">
        <div className="title mt-20 w-100 flex justify-center">
          <h1 className="text-6xl text-center font-bold max-w-3xl mt-20 leading-tight">
            Experienced freelance developer creating innovative solutions
          </h1>
        </div>
        <div className="title w-100 flex justify-center">
          <p className="text-center mt-8 max-w-3xl">
            With a passion for coding and a knack for problem-solving, I deliver
            high-quality websites and applications tailored to your needs.
          </p>
        </div>
        <div className="title w-100 flex justify-center">
          <button className="bg-blue-400 text-white px-5 py-3 mt-10 rounded-lg font-bold hover:bg-sapphire hover:text-white transition-all delay-75">
            Hire me
          </button>
        </div>

          <Carousel />
      </div>
    </div>
  );
}
