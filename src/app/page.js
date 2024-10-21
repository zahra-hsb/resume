import Details from "@/components/Details";
import Particle from "@/components/Particles";
import PictureContainer from "@/components/PictureContainer";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-center p-10 ">
        <div className="absolute z-0">
          <Particle />
        </div>
        <section className="flex absolute top-0 shadow-custom z-50 w-[90%] backdrop-blur">
          <Sidebar />
          <PictureContainer />
          <Details />
        </section>
      </section>
    </>
  );
}
