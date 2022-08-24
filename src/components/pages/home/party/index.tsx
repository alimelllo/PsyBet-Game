import Style from './style';
import Image from 'next/image';
import { DISCORD_URL } from '../../../../constants/links';
import useIsMobile from '../../../../hooks/useIsMobile';

const HomeParty = () => {

    const isMobile = useIsMobile();

    return(
            <Style>
            <div 
                className='relative bg-gray-950' 
            >
                    <div className='layout layout--center desktop:py-24 pt-24 pb-12 px-6 desktop:px-0'>
                        <div className='flex desktop:flex-row flex-col desktop:gap-x-8 gap-y-8'>
                                    <a target={'_blank'} href={DISCORD_URL} 
                                        className='z-20 transition-all duration-200 gift-card desktop:py-10 py-6 rounded-2xl desktop:w-2/3 w-full flex flex-col desktop:gap-y-14 gap-y-6 justify-between shadow-2xl hover:scale-110'>
                                        <div className='flex justify-between w-full'>
                                            <div className='bg-red-400 text-md text-white w-max py-2 px-4 rounded-r-lg'>
                                                12 Winners
                                            </div>
                                            <div className='text-white flex desktop:text-2xl font-semibold pr-8'>
                                                <p className='-mt-1'>
                                                    $
                                                </p>
                                                300
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-x-6'>
                                            <Image src='/socials/discord-big.png' width={!isMobile ? 156 : 70 } height={!isMobile ? 156 : 70 } quality={100} alt={'discord'}/>
                                            <p className='font-semibold text-white desktop:text-5xl text-2xl'>
                                                Launch Gifts
                                            </p>
                                        </div>
                                        <div className='desktop:text-md text-md text-center text-white px-4'>
                                        we are giving away $300 to 12 lucky winner in discord 
                                        </div>
                                </a>
                                <div className='desktop:w-1/3 w-full relative flex flex-col text-white text-center desktop:gap-y-12 gap-y-6 items-center'>
                                    <h3 className='text-3xl font-semibold'>
                                        Join us now !
                                    </h3>
                                    <p className='desktop:text-xl text-md'>
                                        we are giving away a bunch of
                                        Gift in discord everyweek make
                                        sure you dont miss it.Join us now...
                                    </p>
                                    {!isMobile && <Image src='/main/logo-string-pic.png' width={150} height={200} alt='logo'/>}
                                </div>
                        </div>
                    </div>
            </div>
            </Style>
    )
}

export default HomeParty;