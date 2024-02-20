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
          <h1 className="text-6xl sm:max-md:text-4xl text-center font-bold max-w-3xl mt-20 leading-tight">
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

        <div className="experience flex sm:max-md:flex-col mt-40 px-20">
          <div className="experience-info w-2/4">
            <p className="font-bold">Experienced</p>
            <h1 className="title text-5xl  sm:max-md:text-4xl font-bold max-w-3xl mt-5 leading-tight w-3/4">Delivering Exceptional Results with Personalized Service</h1>
            <p className="w-5/6">As a freelance developer, I bring expertise, personalized service, and flexibility to every project. With years of experience, I have a deep understanding of various technologies and can deliver exceptional results tailored to your specific needs.</p>
            <ul className="list-image-[url(/check.png)] p-10 list-outside text-lg">
              <li>Expertise in Cutting-Edge Technologies</li>
              <li>Custom Solutions for Your Business</li>
              <li>Flexible and Agile Development Process</li>
            </ul>

            <button className="bg-white  border-blue-400 border-1 py-3 mt-5 mr-20 rounded-lg hover:text-blue-400 transition-all delay-75">
              Learn more >
            </button>
          </div>
          <div className="image w-2/4 flex justify-center">
            <Image className="object-cover shrink-0" src="/experienced.jpg" alt="A photo representing personalized service" height={600} width={800} />
          </div>
        </div>
      </div>
    </div>
  );
}
