'use client';

import { Modal, ModalRoot, ModalTriger } from '@next-test-task/ui/modal';

import { useTariffDialogState } from '~/features/TariffDialog';
import { Tariffs } from '~/features/Tariffs';

export default () => {
    const [isModalOpen, setIsModalOpen] = useTariffDialogState();

    return (
        <ModalRoot open={isModalOpen} onOpenChange={setIsModalOpen}>
            <div className='flex h-screen items-center justify-center'>
                <div className='flex h-fit w-2/5 flex-col items-center gap-4'>
                    <h1 className='text-center text-44 font-600'>Make Ship Happen</h1>
                    <p className='text-center text-20'>
                        Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript,
                        written in Rust.
                    </p>
                    <ModalTriger asChild>
                        <button className='flex h-14 w-64 items-center justify-center rounded-8 bg-accent text-20 font-600 text-white'>
                            Tariffs
                        </button>
                    </ModalTriger>
                </div>
            </div>
            <Modal>
                <Tariffs />
            </Modal>
        </ModalRoot>
    );
};
