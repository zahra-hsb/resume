import Details from "@/components/Details";
import PictureContainer from "@/components/PictureContainer";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <section className="flex">
        <Sidebar />
        <PictureContainer />
        <Details />
      </section>
    </>
  );
}
