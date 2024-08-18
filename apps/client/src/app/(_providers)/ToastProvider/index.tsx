import { Toaster } from '@next-test-task/ui/toast';

export const ToastProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            {children}
            <Toaster />
        </>
    );
};
