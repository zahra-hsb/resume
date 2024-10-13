import { SlSpeedometer } from "react-icons/sl";
import ProgressBar from "../ProgressBar";

const Details = () => {
    return (
        <>
            <section className="flex h-screen flex-col py-10 w-1/2 px-10 gap-5">
                <h3 className="text-6xl font-bold">resume</h3>
                <div className="flex gap-2 italic py-5">
                    <h5 className="text-cyan-300">security on server</h5> /
                    <h5 className="text-cyan-300">backend</h5> /
                    <h5 className="text-cyan-300">{`master's degree`}</h5>
                </div>
                <div>
                    <p className="text-gray-500 text-justify ">
                        web developer with 10 years of experience in designing and developing user interfaces, testing, debuging and training stuff within eCommerce technologies. Proven ability in optimizing web functionality that improve data retrieval and workflow efficiencies.
                    </p>
                </div>
                <hr />
                <div className="flex flex-col gap-5 justify-between h-full">
                    <div className="flex items-center gap-2">
                        <SlSpeedometer size={30} color="cyan"/>
                        <h2 className="text-3xl">skills</h2>
                    </div>
                    <ProgressBar percent={100} skill={'web development'} />
                    <ProgressBar percent={82} skill={'database'} />
                    <ProgressBar percent={9} skill={'server security'} />
                    <ProgressBar percent={82} skill={'database'} />
                    <ProgressBar percent={80} skill={'database'} />
                </div>
            </section>
        </>
    )
}

export default Details