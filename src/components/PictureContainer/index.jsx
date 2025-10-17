import Image from "next/image"
// import pic from '../../../public/pic.webp'
// import pic from '../../../public/pic.jpg'
import pic from '../../../public/InShot_20250325_023858620.jpg'
import NameTitle from "../NameTitle"

const PictureContainer = () => {
    return (
        <>
            <section className="w-full sm:w-1/2 relative sm:h-screen overflow-hidden px-5 flex items-center ">
                <Image src={pic} alt="" className="shadow-custom w-full sm:w-[550px]" />
                <NameTitle />
            </section>
        </>
    )
}

export default PictureContainer