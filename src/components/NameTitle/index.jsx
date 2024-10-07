import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const NameTitle = () => {
    return (
        <>
            <div className="absolute bottom-0 bg-gradient-to-t from-[#111] to-transparent h-1/2 z-40 w-[550px] flex flex-col items-center justify-end gap-2 p-10">
                <h2 className="text-5xl font-bold">Ren Nolan</h2>
                <h4 className="text-cyan-400">Developer</h4>
                <div className="flex gap-5">
                    <Link href={'#'}>
                        <FaFacebookF size={20} />
                    </Link>
                    <Link href={'#'}>
                        <FaGithub size={20} />
                    </Link>
                    <Link href={'#'}>
                        <FaInstagram size={20} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NameTitle