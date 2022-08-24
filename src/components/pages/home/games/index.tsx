import Style from './style';
import { GAMES } from '../../../../constants/strings';
import Image from 'next/image';

const HomeGames = () => {
    return(
            <Style>
            <div 
                style={{background:'linear-gradient(90deg, #ff2875 0%,  #ff3e81 100%)'}} 
                className='relative overflow-hidden desktop:py-12 py-12 px-6 desktop:pb-24 scroll-mt-24' 
                id='games'
                >
            
                    <h2 className='text-center desktop:text-5xl mb-6 desktop:mb-0 font-bold text-3xl text-white'>
                        {GAMES.TITLE}
                    </h2>
                    <div className='relative flex items-center justify-center  desktop:mt-12'>

                    <div className='relative layout layout--center rounded-xl overflow-hidden'>
                        <Image 
                            width={1171} 
                            height={530} 
                            layout='responsive'
                            objectFit='cover'
                            alt={'games'} 
                            src='/home/game-cover.png'
                            className='shadow-lg border-1'
                            quality={100}
                            />
                            {/* comming soon */}
                            {true && <div className='bg-darkgray-600 opacity-50 absolute top-0 right-0 left-0 bottom-0'/>}
                            {true && <h3 className='text-white absolute text-center left-0 right-0 desktop:top-1/3 top-1/3 desktop:mt-12 mt-1 z-30 desktop:text-5xl text-2xl font-bold'> Coming soon... </h3>}

                            <div className='absolute bottom-0 left-0 right-0 bg-darkgray-400 opacity-50 flex justify-center font-semibold text-2xl desktop:py-12 py-6 z-30'/>
                            <h3 className='absolute text-center left-0 right-0 desktop:bottom-8 bottom-2 font-semibold desktop:text-2xl text-xl text-white z-30'>
                                Psydecks
                            </h3>
                    </div>
                    
                    </div>
                </div>
            </Style>
    )
}

export default HomeGames;