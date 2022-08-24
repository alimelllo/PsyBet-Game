import Image from 'next/image';
import Style from './style';
import Button from '../../../../components/utilities/button';
import DiscordComponent from "../../../utilities/socials/discord";
import useIsMobile from '../../../../hooks/useIsMobile';
import { HOME } from '../../../../constants/strings';
import { DISCORD_URL } from '../../../../constants/links';

const HomeHeader = () => {

    const isMobile = useIsMobile();
    return(
        <Style>
            <div 
            style={{background:'linear-gradient(90deg, #ff2875 0%,  #ff3e81 100%)'}} 
            className='w-full bg-gray-200 h auto relative desktop:pt-44 pt-32'
            >

                <div className='layout relative layout--center flex desktop:justify-between justify-center items-end'>
                    {
                    !isMobile && <div className='mb-24 flex-col gap-y-8 text-white desktop:flex hidden'>
                        <h2 className='whitespace-pre desktop:text-6xl desktop:leading-9 font-bold'> {HOME.HEADER.TITLE} </h2>
                        <h2 className='font-poppins whitespace-pre desktop:text-xl desktop:leading-4 font-semibold'> {HOME.HEADER.DESCRIPTION} </h2>
                        <div className='flex items-center gap-x-2'>
                            <div className='flex'>
                                <Button>
                                    Play Game
                                </Button>
                            </div>
                            <a href={DISCORD_URL}>
                                <DiscordComponent/>
                            </a>
                        </div>
                    </div>
                    }
                        <div className='desktop:mb-28 mb-4'>
                                    <Image 
                                        width={!isMobile ? 340 : 240} 
                                        height={!isMobile ? 340 : 240} 
                                        src='/main/logo-pic.png' 
                                        quality={100}
                                    />
                        </div>
                    </div>
                </div>
                {isMobile && <div className='layout relative layout--center flex bg-gray-950 px-6 py-12'>
                <div className='flex-col flex gap-y-8 text-white w-full'>
                        <h2 className='text-4xl w-full leading-12 font-bold'> {HOME.HEADER.TITLE} </h2>
                        <h2 className='font-poppins text-lg leading-12 font-semibold'> {HOME.HEADER.DESCRIPTION} </h2>
                        <div className='flex items-center gap-x-2 w-full'>
                            <div className='flex w-full'>
                                <Button className='w-full'>
                                    Play Game
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>}
        </Style>
    )
}

export default HomeHeader;