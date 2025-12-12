import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectsSection = () => {
    const [workSamples, setWorkSamples] = useState([{
        name: "",
        github_link: "",
        website_link: "",
        readme_link: "",
        readme_texts: "",
    }])
    useEffect(() => {
        async function getDetails() {
            const result = await fetch("/api/get")
            const returnedDetails = (await result.json())
            setWorkSamples(returnedDetails.gotData)
        }
        getDetails()
    }, [workSamples])
    return (
        <section className="bg-gray-100 bg-opacity-10 dark:bg-transparent max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-20 md:gap-10 static top-0 shadow-xl dark:shadow-custom z-50 w-[90%] backdrop-blur p-10 ">
            {workSamples.map((web, index) => (
                <>
                    <div key={web._id} className="w-[70%] lg:w-full flex flex-col lg:flex-row items-center lg:items-start justify-evenly gap-5">
                        {/* <Image alt="" src={} /> */}
                        {/* <div className="w-full lg:w-1/3 h-48 rounded border-2 border-cyan-400"></div> */}
                        <div className="w-[95%] lg:w-2/3 flex flex-col gap-5" dir="ltr">
                            <p>نام پروژه: {web.name}</p>
                            <p className="flex items-center gap-2">
                                <FaGithub size={20} />
                                لینک گیتهاب: <Link href={web.github_link} target="_blank" className="text-sm font-mono text-cyan-400">{"click me"}</Link></p>
                            <p className="flex items-center gap-2">
                                <FaGlobe />
                                لینک وبسایت: <Link href={web.website_link} target="_blank" className="text-sm font-mono text-cyan-400">{web.website_link}</Link></p>
                            <div className="h-44 border rounded p-2">
                                <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }} dir="ltr" className="overflow-x-auto h-full">{web.readme_texts}</pre>
                            </div>
                        </div>
                    </div>
                    {workSamples.length - 1 !== index && <hr className="!w-[75%] lg:hidden" />}
                </>
            ))}
        </section>
    )
}

export default ProjectsSection;