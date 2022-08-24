import Link from "next/link";
import strings from '../../constants/strings';
import { HEADER_SOCIALS } from "../../constants/links";
import Image from 'next/image';
import Button from '../../components/utilities/button';
import useScroll from "../../hooks/useScroll";
import classNames from "classnames";
import useIsMobile from "../../hooks/useIsMobile";

const LayoutHeader = () => {
    const { scrollY,setY } = useScroll();
    const isMobile = useIsMobile();
    const notscrolled = scrollY > 40;

    return (
        <nav className={
            classNames("w-full desktop:py-8 py-4 px-6 fixed block right-0 top-0 left-0 z-50 font-poppins transition-all duration-300", (notscrolled || isMobile) && "bg-gray-900 shadow-lg")}>
            <div className="layout layout--center flex justify-between">
                <div className="flex items-center desktop:gap-x-12 gap-x-6 text-white desktop:text-xl text-md font-semibold">
                    <a role='button' className='-mb-2' onClick={() => setY()}>
                        <Image src='/main/logo-string.png' width={117} height={31} alt='logo'/>
                    </a>
                    { !isMobile && strings.HOME_MENUS.map(menu => 
                        <div key={menu.title} className={classNames('text-white hover:text-red-100 transition-all duration-150',!notscrolled && 'hover:text-gray-900')}>
                            <Link href={menu.href}>
                                <a>
                                    {menu.title}
                                </a>
                            </Link>
                        </div>
                     )}
                </div>
                <div className="flex items-center gap-x-4">           
                    <Button type='classic' className='h-12'>
                        {strings.LAUNCH_APP}
                    </Button>
                </div>
            </div>

        </nav>
    )
}

export default LayoutHeader;