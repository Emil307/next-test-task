import { useAtom } from 'jotai';

import { tariffDialogOpenAtom } from './state';

export const useTariffDialogState = () => {
    return useAtom(tariffDialogOpenAtom);
};
