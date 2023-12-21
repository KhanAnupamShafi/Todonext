'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <div className="absolute top-5 z-10 -mx-6 -mb-1 flex w-screen items-center justify-between bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] pl-20 medium:static medium:mx-0 medium:mb-7 medium:w-auto medium:bg-none medium:pl-0 ">
        <h1 className="text-base font-semibold text-white dark:text-white medium:text-2xl medium:text-type-1">
          Home
        </h1>
        <div className="flex items-center">
          <div>
            <label
              htmlFor="toggleB"
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggleB"
                  className="sr-only"
                  checked={resolvedTheme === 'light'}
                  onChange={() =>
                    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                  }
                />
                <div className="relative block h-10 w-20 rounded-full border border-[#FDDAD6] bg-white"></div>
                <div
                  className={`dot absolute left-1 top-0.5 h-9 w-9 rounded-full bg-white transition dark:bg-[#263238]`}
                >
                  {resolvedTheme === 'light' ? (
                    <Image
                      width={18}
                      height={18}
                      src="/images/noto-sun.svg"
                      alt="Toggle Image"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
                    />
                  ) : (
                    <Image
                      width={18}
                      height={18}
                      src="/images/bi-moon-stars.svg"
                      alt="Toggle Image"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
                    />
                  )}
                </div>
              </div>
              <div className="ml-5 flex items-center pr-5 medium:pr-1">
                {' '}
                <Image
                  width={48}
                  height={48}
                  src="/images/avatar.png"
                  alt="Toggle Image"
                  className="rounded-full"
                />
                <div className="hidden medium:block">
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
