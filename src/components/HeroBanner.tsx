import Image from 'next/image';
import soodMan from '@/assets/sood-man.png';

export const HeroBanner = () => {
  return (
    <>
    <section id="heroBanner" className="container flex flex-col lg:flex-row items-center justify-between relative w-full p-4 lg:py-16">
      <div className="flex justify-center w-full lg:w-auto mb-8 sm:mt-4 lg:mb-0">
        <Image src={soodMan} alt='SOoD' 
        width={100}
        height={100}
  className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"/>
      </div>
      <div className="flex flex-col justify-center items-center text-center w-full">
        <div>
          <span className="font-oswald font-bold pr-2 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px]">STRAIGHT </span>
          <span className="font-oswald font-bold pr-2 text-green-500 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px]">OUT </span>
        </div>
        <div>
          <span className="font-oswald font-bold pr-2 text-[30px] sm:text-[50px] md:text-[60px] lg:text-[70px]">OF</span>
          <span className="font-oswald font-bold text-green-500 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px]">DARKNESS</span>
        </div>
        <div className="mt-2 sm:mt-4">
          <span className="font-oswald pr-2 text-[30px] sm:text-[50px] md:text-[60px] lg:text-[70px]">RECOVERY MINISTRY</span>
        </div>
      </div>
    </section>
    </>
  );
};
