'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { SIDENAV_ITEMS } from '../../../constants';
import { SideNavItems } from '../../../types';

const SideNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const { setTheme, resolvedTheme } = useTheme();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="absolute left-6 top-6 z-50 block h-10 hover:animate-wiggle medium:hidden">
        <button
          onClick={() => setMenuOpen(true)}
          className={`flex h-[42px] w-[42px]  ${
            !menuOpen && 'animate-wiggle'
          } items-center justify-center rounded-md bg-zinc-50 shadow-custom transition duration-500 hover:scale-[0.98]`}
        >
          <Image width={28} height={28} src="/images/fi-menu.svg" alt="" />
        </button>
      </div>
      <nav className="relative z-50  h-screen bg-white medium:sticky medium:top-0 medium:self-start ">
        <div
          className={` ${
            menuOpen ? 'w-[264px] large:w-[264px]' : 'medium:w-24 large:w-24'
          } fixed ${
            !menuOpen && 'hidden'
          } h-[calc(100vh+2rem)] flex-1 border-r border-zinc-200 bg-white p-7 duration-300  dark:bg-dark medium:static medium:flex large:flex`}
        >
          {menuOpen && (
            <button
              onClick={toggleMenu}
              className="absolute -right-4 top-9 flex items-center justify-center hover:animate-wiggle "
            >
              <div className="h-9 w-9 p-0 ">
                {resolvedTheme === 'light' ? (
                  <Image
                    className={`hover:drop-shadow-xl ${
                      !menuOpen && 'rotate-180'
                    }`}
                    fill
                    src="/images/arrowleft.svg"
                    alt=""
                  />
                ) : (
                  <Image
                    className={`hover:drop-shadow-xl ${
                      !menuOpen && 'rotate-180'
                    }`}
                    fill
                    src="/images/dark-arrow.svg"
                    alt=""
                  />
                )}
              </div>
            </button>
          )}
          <div className="flex w-full flex-col space-y-[100px]">
            {menuOpen ? (
              <Link
                href="/"
                className="flex h-12 w-full flex-row items-center justify-center md:justify-start"
              >
                <div className="h-12 w-12  ">
                  <Image
                    width={48}
                    height={48}
                    src="/Icon_Vector_Icon_Vector_1:19961.svg"
                    alt="Picture of the Logo"
                  />
                </div>

                <h2 className="ml-6 text-2xl font-medium medium:flex">
                  Medi<span className="font-semibold text-hot-pink">Doc</span>
                </h2>
              </Link>
            ) : (
              <div className="h-12 hover:animate-wiggle">
                <button
                  onClick={toggleMenu}
                  className={`flex h-[42px] w-[42px]  ${
                    !menuOpen && 'animate-wiggle'
                  } items-center justify-center rounded-md shadow-custom transition duration-500 hover:scale-[0.98] hover:bg-zinc-50 dark:bg-hot-pink`}
                >
                  {resolvedTheme === 'light' ? (
                    <Image
                      width={28}
                      height={28}
                      src="/images/fi-menu.svg"
                      alt=""
                    />
                  ) : (
                    <Image
                      width={28}
                      height={28}
                      src="/images/fi-menu-dark.svg"
                      alt=""
                    />
                  )}
                </button>
              </div>
            )}

            <ul className="flex flex-col space-y-5 pb-20">
              {SIDENAV_ITEMS.map((item, idx) => {
                return (
                  <MenuItem
                    key={idx}
                    item={item}
                    menuOpen={menuOpen}
                    resolvedTheme={resolvedTheme}
                  />
                );
              })}
            </ul>
            <div
              className={`relative !mt-auto basis-14 transition-all duration-200 medium:pb-[136px] `}
            >
              <div
                className={`absolute -left-2 top-0 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#FF7594] via-[#FF7C65] to-[#FF7C65] ${
                  !menuOpen ? 'block' : 'hidden'
                }`}
              >
                <div className="relative h-8 w-8 cursor-pointer">
                  <Image fill src={'/images/plus.svg'} alt="" />
                </div>
              </div>

              <div
                className={`absolute top-0 m-auto w-full ${
                  !menuOpen ? 'hidden' : 'block'
                }`}
              >
                <button className="w-full whitespace-nowrap rounded-md bg-gradient-to-r from-[#FF7594] via-[#FF7C65] to-[#FF7C65] p-3 px-3 text-center text-white shadow-custom">
                  New Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideNavbar;

const MenuItem = ({
  item,
  menuOpen,
  resolvedTheme,
}: {
  item: SideNavItems;
  menuOpen: boolean;
  resolvedTheme?: string;
}) => {
  const pathname = usePathname();
  const updatedIcon = updateFillInPath(
    item.icon as React.ReactElement,
    item.path === pathname
      ? '#FF7594'
      : resolvedTheme === 'light'
        ? '#2E1619'
        : '#fff',
  );
  return (
    <li className="">
      <Link
        href={item.path}
        className={`flex flex-row items-center space-x-7 rounded-lg p-1 hover:bg-zinc-100 dark:hover:bg-transparent ${
          item.path === pathname
            ? 'text-hot-pink'
            : resolvedTheme === 'light'
              ? '#2E1619'
              : '#fff'
        }`}
      >
        <span className="relative">
          {item.path === '/'
            ? updatedIcon
            : resolvedTheme === 'light'
              ? item.icon
              : item.iconDark}
        </span>
        {menuOpen && (
          <span className="flex text-base font-medium ">{item.title}</span>
        )}
      </Link>
    </li>
  );
};

const updateFillInPath = (
  element: React.ReactNode,
  newFill: string,
): React.ReactNode => {
  if (React.isValidElement(element)) {
    const { type, props } = element;

    if (type === 'path' && props) {
      // If it's a path element, update the fill prop
      return React.cloneElement(element as React.ReactElement, {
        ...props,
        fill: newFill,
      });
    }

    // Recursively update fill in children
    const updatedChildren = React.Children.map(props.children, (child) =>
      updateFillInPath(child, newFill),
    );

    // Clone the element with updated children
    return React.cloneElement(
      element as React.ReactElement,
      {},
      updatedChildren,
    );
  }

  return element;
};
