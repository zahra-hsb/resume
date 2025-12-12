"use client"
import { useProjectContext } from "@/lib/Providers";
import Details from "../Details";
import Particle from "../Particles"
import PictureContainer from "../PictureContainer";
import Sidebar from "../Sidebar";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProjectBtn from "../Projects/ProjectsBtn";

const Main = () => {
    const { isShowProjects } = useProjectContext()
    const [workSamples, setWorkSamples] = useState([{
        name: "",
        github_link: "",
        website_link: "",
        readme_link: "",
        readme_texts: "",
        readme: ""
    }])
    useEffect(() => {
        async function getDetails() {
            const result = await fetch("/api/get")
            const returnedDetails = (await result.json())
            setWorkSamples(returnedDetails.gotData)
        }
        getDetails()
        console.log(typeof workSamples[0].readme_texts)
    }, [])
    return (
        <section className="h-full flex items-center justify-center lg:p-10 realtive">
            <div className="absolute z-0">
                <Particle />
            </div>
            {isShowProjects ?
                <section className="bg-gray-100 bg-opacity-10 dark:bg-transparent max-w-screen-2xl mx-auto flex flex-col lg:flex-row absolute top-0 shadow-xl dark:shadow-custom z-50 w-[90%] backdrop-blur p-10">
                    {workSamples.map((web) => (
                        <div key={web._id} className="w-full flex items-start justify-evenly gap-5">
                            {/* <Image alt="" src={} /> */}
                            <div className="w-1/3 h-48 rounded border-2 border-cyan-400"></div>
                            <div className="w-2/3 flex flex-col gap-5">
                                <p>name: {web.name}</p>
                                <p>github link: {web.github_link}</p>
                                <p>website link: {web.website_link}</p>
                                <div className="h-48">details:
                                    <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }} dir="ltr" className="overflow-x-auto h-full">{web.readme_texts}</pre>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
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