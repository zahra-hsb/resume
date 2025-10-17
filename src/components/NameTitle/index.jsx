import { FaFacebookF, FaGithub, FaGitlab, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const NameTitle = () => {
    return (
        <>
            <div className="absolute bottom-0 bg-gradient-to-t from-[#111] to-transparent h-1/2 z-40 w-full lg:w-[550px] left-1 lg:left-auto flex flex-col items-center justify-end lg:gap-2 p-5  lg:p-10">
                <h2 className="text-xl lg:text-5xl font-bold">زهرا حسن بستی</h2>
                <h4 className="text-cyan-400">Frontend Developer</h4>
                <div className="flex gap-2 mt-1 lg:mt-0 lg:gap-5">
                    <Link href={'https://www.linkedin.com/in/zahra-hasani-713760241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}>
                        <FaLinkedin size={20} />
                    </Link>
                    <Link href={'https://github.com/zahra-hsb'}>
                        <FaGithub size={20} />
                    </Link>
                    <Link href={'https://github.com/zahra-hsb'}>
                        <FaGitlab size={20} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NameTitle