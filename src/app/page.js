import Details from "@/components/Details";
import Particle from "@/components/Particles";
import PictureContainer from "@/components/PictureContainer";
import Sidebar from "@/components/Sidebar";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-center lg:p-10">
        <div className="absolute z-0">
          <Particle />
        </div>
        {/* <section className="bg-gray-100 bg-opacity-10 dark:bg-transparent max-w-screen-2xl mx-auto flex flex-col lg:flex-row absolute top-0 shadow-xl dark:shadow-custom z-50 w-[90%] backdrop-blur">
          <Sidebar />
          <div className="w-full flex flex-col lg:flex-row">
            <PictureContainer />
            <Details />
          </div>
        </section> */}
      </section>
      {/* <div className="fixed bottom-5 -left-[calc(75px-50%)] z-50">
        <button
          className="flex flex-col items-center justify-center hover: gap-2 rounded-full p-2 backdrop-blur-md bg-opacity-15 w-[150px]  bg-cyan-300"
        >
          پروژه ها
          <MdOutlineKeyboardDoubleArrowDown size={20} className="animate-bounce" />
        </button>
      </div> */}
    </>
  );
}
