import Image from "next/image"
// import pic from '../../../public/pic.webp'
// import pic from '../../../public/pic.jpg'
import pic from '../../../public/IMG_20231225_162134_779.jpg'
import NameTitle from "../NameTitle"

const PictureContainer = () => {
    return (
        <>
            <section className="w-1/2 relative h-screen overflow-hidden px-5 flex items-center ">
                <Image src={pic} alt="" className="shadow-custom w-[550px]" />
                <NameTitle />
            </section>
        </>
    )
}

export default PictureContainer