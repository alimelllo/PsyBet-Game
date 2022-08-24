import Style from './style';
import { ROADMAP } from '../../../../constants/strings';
import Image from 'next/image';
import useIsMobile from '../../../../hooks/useIsMobile';

const HomeRoadmap = () => {
    const isMobile = useIsMobile();

    return(
            <Style>
            <div className='bg-gray-950 desktop:p-12 p-0 scroll-mt-24' id='roadmap' >
                <div className='layout layout--center bg-gray-900 desktop:rounded-xl py-12 px-6 desktop:p-12 '>
                    <h2 className='text-center desktop:text-5xl font-bold text-3xl text-white'>
                        {ROADMAP.TITLE}
                    </h2>
                    <div className='desktop:mt-12 mt-12 flex desktop:flex-row flex-col desktop:gap-y-0 gap-y-6 desktop:justify-between'>
                        {
                            ROADMAP.ITEMS.map((data,key) => {
                                const { DONE } = data;
                                return(
                                    <div key={data.TITLE} className={`flex desktop:flex-col justify-around gap-y-4 text-white ${key === 0 || key/2 === 1 ? "flex-row-reverse" : "flex-row" }`}>
                                        <div className='relative flex items-center'>
                                            <div className='flex items-center relative'>
                                            <Image 
                                                src={data.IMG} 
                                                alt={data.TITLE} 
                                                width={278} 
                                                height={278} 
                                                className='ml-4'
                                            />
                                            { DONE && <div className='absolute top-0 right-2 bottom-2 left-0 border-4 border-red-100 rounded-full'/>}
                                            </div>
                                            { DONE && !isMobile && key !== ROADMAP.ITEMS.length - 1 &&  <div className='absolute right-0 -right-36'>
                                                     <Image width={144} height={4} alt='line' src='/home/roadmap-line.png'/>
                                                 </div>
                                            }
                                        </div>
                                        <div className='flex desktop:items-center flex-col  gap-y-4'>

                                            <h3 className='desktop:text-xl text-lg font-semibold'>{data.TITLE}</h3>
                                            <div className='flex flex-col desktop:text-lg text-md desktop:items-center desktop:gap-y-2 gap-y-1 font-poppins'>
                                                {data.PROPS.map(prps => <p key={prps} >{prps} </p>)}
                                            </div>
                                            <h4 className='desktop:text-xl text-lg'>{data.DATE}</h4>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            </Style>
    )
}

export default HomeRoadmap;