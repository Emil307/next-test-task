'use client';

import { useState } from 'react';
import Image from 'next/image';

import { cn } from '@next-test-task/ui';

export default () => {
    const [isBorderActive, setIsBorderActive] = useState<boolean>(false);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 100) {
            setIsBorderActive(true);
            return;
        }
        if (window.pageYOffset < 100) {
            setIsBorderActive(false);
        }
    });

    return (
        <div
            className={cn(
                'align-center fixed flex h-24 w-full justify-between bg-white pl-4 pr-8',
                isBorderActive && 'border-b-2 border-solid border-black'
            )}
        >
            <Image src='/assets/icons/brand.svg' width={128} height={40} alt='brand' />
            <div className='align-center flex gap-4'>
                <button>Tariffs</button>
                <button>About us</button>
            </div>
        </div>
    );
};
