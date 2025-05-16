'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12,13,13,0', 'rgba(12,13,13,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header
      style={{
        background,
        backdropFilter: backdropBlur,
      }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='flex-between custom-container h-20 md:h-21.5'>
        <Link
          href='#home'
          className='z-10 cursor-pointer transition-transform hover:scale-110'
        >
          <Image
            src='/Icons/Logo.png'
            alt='logo'
            width={141}
            height={32}
            className='h-auto'
          />
        </Link>
        <nav className='hidden lg:block'>
          <ul className='flex-start gap-8'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  className='hover:bg-purple-gradient text-md-regular bg-white bg-clip-text px-2 text-transparent transition-all duration-300'
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button asChild className='hidden lg:flex'>
          <Link href='#contact' className='lg:flex-center'>
            <Mail className='size-5' color='#FDFDFD' />
            <span className='hidden lg:inline'>Hire Me</span>
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Image
              src='/Icons/menu.svg'
              alt='logo'
              width={24}
              height={24}
              className='cursor-pointer lg:hidden'
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className='flex-start h-16'>
              <SheetClose asChild>
                <Link href='#home'>
                  <Image
                    src='/Icons/Logo-black.png'
                    alt='logo'
                    width={141}
                    height={32}
                    className='cursor-pointer hover:scale-110'
                  />
                </Link>
              </SheetClose>
            </SheetHeader>
            <nav className='mt-4'>
              <ul className='flex flex-col gap-4'>
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <SheetClose asChild>
                      <Link
                        href={data.href}
                        className='hover:bg-purple-gradient text-md-regular bg-neutral-950 bg-clip-text py-2 text-transparent transition-all duration-300'
                      >
                        {data.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>

            <SheetClose asChild>
              <Button
                asChild
                className='mt-4 w-full'
                variant='default'
                size='default'
              >
                <Link href='#contact' className='flex-center'>
                  <Mail className='size-5' color='#FDFDFD' />
                  <span className='inline'>Hire Me</span>
                </Link>
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};
