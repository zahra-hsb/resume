import Link from "next/link";
import Logo from "../Logo"
import { FiDownloadCloud } from "react-icons/fi";

const Sidebar = () => {
    return (
        <>
            <nav className="w-full h-24 sm:h-screen sm:w-24 p-5 flex flex-row sm:flex-col justify-between items-center ">
                <Logo />
                <Link className="" title="دانلود رزومه" href={'https://ecomerce.storage.iran.liara.space/Zahra-Hassan-Basti-FlowCV-Resume-20251008.pdf'}>
                    <FiDownloadCloud className="w-full" size={50} color="cyan" />
                </Link>
            </nav>
        </>
    )
}

export default Sidebar