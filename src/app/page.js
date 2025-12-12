import Details from "@/components/Details";
import Particle from "@/components/Particles";
import PictureContainer from "@/components/PictureContainer";
import ProjectBtn from "@/components/Projects/ProjectsBtn";
import Sidebar from "@/components/Sidebar";
import Providers from "@/lib/Providers";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <>
      {/* <section className="flex items-center justify-center lg:p-10">
        <div className="absolute z-0">
          <Particle />
        </div>
        <section className="bg-gray-100 bg-opacity-10 dark:bg-transparent max-w-screen-2xl mx-auto flex flex-col lg:flex-row absolute top-0 shadow-xl dark:shadow-custom z-50 w-[90%] backdrop-blur">
          <Sidebar />
          <div className="w-full flex flex-col lg:flex-row">
            <PictureContainer />
            <Details />
          </div>
        </section>
      </section> */}
    </>
  );
}
