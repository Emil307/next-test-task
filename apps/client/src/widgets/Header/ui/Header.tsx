'use client';

import { useState } from 'react';
import Image from 'next/image';

import { cn } from '@next-test-task/ui';
import { Modal, ModalRoot, ModalTriger } from '@next-test-task/ui/modal';

import { Tariffs } from '~/features/Tariffs';

export default () => {
    const [isBorderActive, setIsBorderActive] = useState<boolean>(false);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 100) {
            setIsBorderActive(true);
            return;
        }
        if (window.pageYOffset < 100) {
            setIsBorderActive(false);
            return;
        }
    });

    return (
        <ModalRoot>
            <div
                className={cn(
                    'align-center fixed flex h-24 w-full justify-between bg-white pl-4 pr-8',
                    isBorderActive && 'border-b-2 border-solid border-black'
                )}
            >
                <Image src='/assets/icons/brand.svg' width={128} height={40} alt='brand' />
                <div className='align-center flex gap-4'>
                    <ModalTriger asChild>
                        <button>Tariffs</button>
                    </ModalTriger>
                    <button>About us</button>
                </div>
            </div>

            <Modal>
                <Tariffs />
            </Modal>
        </ModalRoot>
    );
};
