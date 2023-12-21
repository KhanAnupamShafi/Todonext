import Image from 'next/image';
import { HERO_ITEMS } from '../../../constants';

const Hero = () => {
  return (
    <div className="relative medium:static">
      <div className="-mx-6 flex h-[498px] w-screen  flex-col items-center justify-center overflow-hidden rounded-b-md bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] p-8 medium:mx-0 medium:h-auto medium:w-auto medium:flex-row medium:justify-between medium:rounded-md medium:p-4 large:max-w-[718px]">
        <div className="relative h-[200px] w-[200px]">
          <Image fill src={'/images/svg-sample-1.svg'} alt="" />
        </div>
        <div className="mx-auto w-full text-white medium:w-auto">
          <h1 className="text-xl font-semibold medium:text-2xl">
            Hello, Mary Jane!{' '}
          </h1>
          <p className="my-3 text-sm font-medium medium:text-base">
            Stay Up-to-Date with your appointments.
          </p>
          <p className="text-sm font-medium medium:text-base">
            {' '}
            You Have No pending Reports
          </p>{' '}
        </div>
      </div>
      <h1 className="block py-6 font-semibold text-dark dark:text-white medium:hidden">
        Your Vitals
      </h1>
      <div className="grid grid-cols-4 gap-7 medium:pt-7 large:max-w-[718px]">
        {HERO_ITEMS.map((item) => (
          <div
            className="shadow-customTwo hover:custom-hover hover:flip-horizontal hover:rotate-y-180 col-span-2 flex  flex-1 transform cursor-pointer flex-col gap-2 rounded-lg border border-type-4 bg-white bg-opacity-10 p-2 text-dark transition-all duration-300 hover:scale-110 hover:shadow-xl dark:border-none dark:text-[#D1D5DB] medium:col-span-1"
            key={item.title}
          >
            <div className="flex h-10 w-10  items-center justify-center rounded-md bg-[#FF2D2D99] dark:bg-white dark:bg-opacity-50">
              {item.icon}
            </div>
            <h2 className="text-xs font-semibold ">{item.title}</h2>
            <h2 className="text-lg "> {item.bpm}</h2>
            <p
              className={`flex items-center gap-2 text-xs font-light ${
                item.pressure === 'Normal' ? 'text-type-5' : 'text-[#82AB0D]'
              } dark:text-[#D1D5DB]`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    className="fill-dark dark:fill-[#D1D5DB]"
                    d="M2.23764 8.31777H9.97369C10.052 8.31753 10.1288 8.29593 10.1957 8.25529C10.2627 8.21466 10.3173 8.15653 10.3537 8.08717C10.3901 8.01781 10.4069 7.93984 10.4022 7.86165C10.3976 7.78347 10.3717 7.70803 10.3274 7.64345L6.45937 2.05631C6.29907 1.82466 5.91312 1.82466 5.75239 2.05631L1.88436 7.64345C1.83959 7.70789 1.81334 7.78337 1.80845 7.86169C1.80356 7.94001 1.82023 8.01816 1.85665 8.08767C1.89307 8.15718 1.94783 8.21538 2.015 8.25595C2.08217 8.29651 2.15917 8.3179 2.23764 8.31777Z"
                  />
                </svg>
              </span>{' '}
              {item.pressure}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
