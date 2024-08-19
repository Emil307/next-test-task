import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

export const ModalRoot: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <Dialog.Root>{children}</Dialog.Root>;
};

export const Modal: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className='fixed left-0 top-0 h-screen w-screen bg-black opacity-30' />
            <div className='fixed left-0 top-0 flex h-screen w-screen items-center justify-center'>
                <Dialog.Content className='relative h-fit w-fit rounded-4 bg-white p-4'>
                    {children}
                    <Dialog.Close asChild>
                        <button className='absolute right-4 top-4' aria-label='Close'>
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </div>
        </Dialog.Portal>
    );
};

interface IModalTriger extends React.PropsWithChildren {
    asChild?: boolean;
}

export const ModalTriger: React.FC<IModalTriger> = ({ children, asChild }) => {
    return <Dialog.Trigger asChild={asChild ? true : false}>{children}</Dialog.Trigger>;
};

export const ModalTitle: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <Dialog.Title>{children}</Dialog.Title>;
};

export const ModalDescription: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <Dialog.Description>{children}</Dialog.Description>;
};
