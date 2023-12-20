import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div className="mb-7 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-type-1">Home</h1>
        <div className="flex items-center">
          <div>
            <label
              htmlFor="toggleB"
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <input type="checkbox" id="toggleB" className="sr-only" />
                <div className="relative block h-10 w-20 rounded-full border border-[#FDDAD6] bg-white"></div>
                <div className="dot absolute left-1 top-0.5 h-9 w-9 rounded-full bg-white transition">
                  <Image
                    width={18}
                    height={18}
                    src="/images/noto-sun.svg"
                    alt="Toggle Image"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
                  />
                </div>
              </div>
              <div className="ml-5 flex items-center">
                {' '}
                <Image
                  width={48}
                  height={48}
                  src="/images/avatar.png"
                  alt="Toggle Image"
                  className="rounded-full"
                />
                <div>
                  <Image
                    width={26}
                    height={26}
                    src="/images/icon-down-arrow.png"
                    alt="Toggle Image"
                    className="rounded-full"
                  />
                </div>
              </div>
            </label>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Header;
