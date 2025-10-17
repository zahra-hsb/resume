import Link from "next/link";
import Logo from "../Logo"
import { FiDownloadCloud } from "react-icons/fi";

const Sidebar = () => {
    return (
        <>
            <nav className="h-screen w-24 p-5 flex flex-col justify-between items-center ">
                <Logo />
                <Link href={'https://ecomerce.storage.iran.liara.space/Zahra-Hassan-Basti-FlowCV-Resume-20251008.pdf'}>
                    <FiDownloadCloud className="w-full" size={50} color="cyan" />
                </Link>
            </nav>
        </>
    )
}

export default Sidebar