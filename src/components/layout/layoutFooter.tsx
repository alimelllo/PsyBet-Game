import Link from "next/link";
import strings from '../../constants/strings';
import { INSTAGRAM_URL,TWITTER_URL,DISCORD_URL,EMAIL } from "../../constants/links";
import Image from 'next/image';
import Button from '../../components/utilities/button';
import useScroll from "../../hooks/useScroll";
import classNames from "classnames";
import useIsMobile from "../../hooks/useIsMobile";
import DiscordComponent from "../utilities/socials/discord";
import TwitterComponent from "../utilities/socials/twitter";
import EmailComponent from "../utilities/socials/email";
import InstagramComponent from "../utilities/socials/instagram";

const LayoutHeader = () => {
    const isMobile = useIsMobile();

    return (
        <nav className={
            classNames("w-full desktop:py-8 py-8 bg-darkgray-700")}>
            <div className="layout layout--center flex flex-col gap-y-4">
                <div className="flex justify-center">
                    <Link href={DISCORD_URL}>
                        <a>
                            <DiscordComponent className='footer-icon' />
                        </a>
                    </Link>
                    <Link href={TWITTER_URL}>
                        <a>
                            <TwitterComponent className='footer-icon' />
                        </a>
                    </Link>
                    <Link href={EMAIL}>
                        <a>
                            <EmailComponent className='footer-icon' />
                        </a>
                    </Link>
                    <Link href={INSTAGRAM_URL}>
                        <a>
                            <InstagramComponent className='footer-icon' />
                        </a>
                    </Link>
                </div>

              <h3 className="text-white desktop:text-lg text-sm text-center w-full font-semibold">Copyright 2022, psybet all right reserved</h3>
            </div>
        </nav>
    )
}

export default LayoutHeader;