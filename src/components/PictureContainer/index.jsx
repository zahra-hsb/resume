import Image from "next/image"
// import pic from '../../../public/pic.webp'
// import pic from '../../../public/pic.jpg'
import pic from '../../../public/pic1.jpg'
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const PictureContainer = () => {
    return (
        <>
            <section className="w-1/2 relative h-screen overflow-hidden px-5 flex items-center ">
                <Image src={pic} alt="" className="shadow-custom w-[550px]" />
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
            </section>
        </>
    )
}

export default PictureContainer