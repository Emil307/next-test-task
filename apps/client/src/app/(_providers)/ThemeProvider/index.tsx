import { ThemeProvider as Provider } from '@next-test-task/ui/theme';

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Provider attribute={'class'} defaultTheme={'system'} enableSystem>
            {children}
        </Provider>
    );
};
