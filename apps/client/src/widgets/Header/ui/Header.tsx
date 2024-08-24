'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@next-test-task/ui';
import { Modal, ModalRoot, ModalTriger } from '@next-test-task/ui/modal';

import { useTariffDialogState } from '~/features/TariffDialog';
import { Tariffs } from '~/features/Tariffs';

export default () => {
    const [isBorderActive, setIsBorderActive] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useTariffDialogState();

    useEffect(() => {
        if (!isMounted) {
            setIsMounted(true);
            return;
        }

        const callback = () => {
            if (window.pageYOffset >= 100) {
                setIsBorderActive(true);
                return;
            }
            setIsBorderActive(false);
            return;
        };

        window.addEventListener('scroll', callback);

        return () => window.removeEventListener('scroll', callback);
    }, [isMounted]);

    return (
        <ModalRoot open={isModalOpen} onOpenChange={setIsModalOpen}>
            <div
                className={cn(
                    'align-center fixed flex h-24 w-full justify-between bg-white pl-4 pr-8',
                    isBorderActive && 'border-b-2 border-solid border-black'
                )}
            >
                <Image src='/assets/icons/brand.svg' width={128} height={40} alt='brand' />
                <div className='flex items-center gap-4'>
                    <ModalTriger asChild>
                        <button>Tariffs</button>
                    </ModalTriger>
                    <Link href='#about-section'>About</Link>
                </div>
            </div>

            <Modal>
                <Tariffs />
            </Modal>
        </ModalRoot>
    );
};
