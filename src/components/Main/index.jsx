import { useProjectContext } from "@/lib/Providers";
import Details from "../Details";
import Particle from "../Particles"
import PictureContainer from "../PictureContainer";
import Sidebar from "../Sidebar";
import ProjectBtn from "../Projects/ProjectsBtn";
import ProjectsSection from "../Sidebar/ProjectsSection";

const Main = () => {
    const { isShowProjects } = useProjectContext()
    
    return (
        <section className="h-full flex items-center justify-center lg:p-10 ">
            <div className="absolute z-0">
                <Particle />
            </div>
            {isShowProjects ?
                <ProjectsSection />
                :
                <section className="bg-gray-100 bg-opacity-10 dark:bg-transparent max-w-screen-2xl mx-auto flex flex-col lg:flex-row absolute top-0 shadow-xl dark:shadow-custom z-50 w-[90%] backdrop-blur">
                    <Sidebar />
                    <div className="w-full flex flex-col lg:flex-row">
                        <PictureContainer />
                        <Details />
                    </div>
                </section>}
            <div className="fixed bottom-5 -left-[calc(75px-50%)] z-50">
                <ProjectBtn />
            </div>
        </section>
    )
}

export default Main;