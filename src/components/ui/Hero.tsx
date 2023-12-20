import Image from 'next/image';
import { HERO_ITEMS } from '../../../constants';

const Hero = () => {
  return (
    <div>
      <div className="flex items-center justify-between rounded-md bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] p-4 large:max-w-[718px]">
        <div className="relative h-[200px] w-[200px]">
          <Image fill src={'/images/svg-sample-1.svg'} alt="" />
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-semibold">Hello, Mary Jane! </h1>
          <p className="my-3 font-medium">
            Stay Up-to-Date with your appointments.
          </p>
          <p className="font-medium"> You Have No pending Reports</p>{' '}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-7 pt-7 large:max-w-[718px]">
        {HERO_ITEMS.map((item) => (
          <div
            className="col-span-2 flex flex-1 cursor-pointer flex-col gap-2  rounded-lg border border-type-4 p-2 shadow-custom transition-all duration-300 hover:shadow-xl medium:col-span-1"
            key={item.title}
          >
            <div className="flex h-10 w-10  items-center justify-center rounded-md bg-[#FF2D2D99]">
              {item.icon}
            </div>
            <h2 className="text-xs font-semibold text-dark"> {item.title}</h2>
            <h2 className="text-lg  text-dark"> {item.bpm}</h2>
            <p className="text-xs font-light text-dark"> {item.pressure}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
