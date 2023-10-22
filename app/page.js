import Image from "next/image";
import Carousel from "./components/carousel";

import Navbar from "./components/Navbar";
import HeroCard from "./components/HeroCard";
import About from "./components/About";
import Tajweed from "./components/Tajweed";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const handleHeroClick = () => {};
  return (
    <main className="w-screen h-screen">
      

      <div
        id="hero"
        className="relative w-screen xl:h-[calc(100%-70px)] 2xl:h-[60%]"
      >
        <div className="w-[90%] h-full">
          <Image
            src="/picture_3.jpg"
            alt="Random image"
            fill
            objectFit="cover"
          ></Image>
        </div>

        <div class="absolute inset-0 bg-gray-700 opacity-60"></div>
        <div class="absolute inset-0 flex flex-col space-y-4 items-center justify-center text-white">
          <h2 class="flex flex-col items-center space-y-4 xl:text-6xl 2xl:text-8xl font-bold">
            <span>PREPARING STUDENTS FOR</span>
            <span className="text-myYellow">SUCCESSFUL FUTURE</span>
          </h2>
          <p className="text-2xl text-white">Making learning easy!</p>
          <button className="border-white border-2 hover:bg-myYellow hover:border-myYellow py-3 px-6 text-white rounded-full drop-shadow-lg">
            Ready to get started?
          </button>
        </div>
      </div>

      <div className="w-[1320px] mx-auto">
        <div id="hero-cards" className="w-full py-12 ">
          <div className="w-full flex justify-center items-center p-8 mb-4">
            <h2 className="text-white text-4xl font-bold">
              Coaching Available For
            </h2>
          </div>
          <div className="w-full mx-auto flex justify-center space-x-12  ">
            <HeroCard
              props={{
                title: "Engineering & Polytechnic",
                image: "/picture_2.jpg",
              }}
            />
            <HeroCard
              props={{ title: "Intermediate", image: "/picture_3.jpg" }}
            />
            <HeroCard
              props={{ title: "Class I to X", image: "/picture_1.jpg" }}
            />
          </div>
        </div>

        <div id="sections" className="flex flex-col space-y-4">
          <div className=" border-b-4 border-opacity-20 border-myYellow"></div>

          <div id="engineering" className="w-full py-12">
            <div className="w-[70%] flex gap-10">
              <Image
                src="/picture_3.jpg"
                alt="Random image"
                width={400}
                height={280}
              ></Image>

              <div
                id="text-engineering"
                className="text-white flex flex-col space-y-4"
              >
                <h2 className="text-4xl font-bold text-myYellow">
                  Engineering & Polytechnic
                </h2>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged..
                </p>
              </div>
            </div>
          </div>
          
          <div className=" border-b-4 border-opacity-20 border-myYellow"></div>

          <div id="intermediate" className="py-12 w-full flex flex-col">
            <div className="w-[70%] self-end  flex flex-row-reverse gap-10">
              <Image
                src="/picture_3.jpg"
                alt="Random image"
                width={400}
                height={280}
              ></Image>

              <div
                id="text-engineering"
                className="text-white  flex flex-col space-y-4"
              >
                <h2 className="text-4xl font-bold text-myYellow">
                  Intermediate
                </h2>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged..
                </p>
              </div>
            </div>
          </div>
          <div className=" border-b-4 border-opacity-20 border-myYellow"></div>
          <div id="school" className="w-full py-12 ">
            <div className="w-[70%] flex gap-10">
              <Image
                src="/picture_3.jpg"
                alt="Random image"
                width={400}
                height={280}
              ></Image>

              <div
                id="text-engineering"
                className="text-white flex flex-col space-y-4"
              >
                <h2 className="text-4xl font-bold text-myYellow">
                  Class I to X
                </h2>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged..
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className=" border-b-4 border-opacity-20 border-myYellow"></div>     
        <About/>
        <div className=" border-b-4 border-opacity-20 border-myYellow"></div>   
        <Tajweed/>
        <div className=" border-b-4 border-opacity-20 border-myYellow"></div>   
        <Contact/>

        <div className=" border-b-4 border-opacity-20 border-myYellow"></div>  

        <div id="footer" className="w-full mt-12">
          <Footer/>
          <div
            id="copyright"
            className="w-full flex p-4 justify-center items-center"
          >
            <p className="text-white text-sm">
              Copyright © 2022 All Rights Reserved by
              <span className="text-myYellow"> Ed-World Academy</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
