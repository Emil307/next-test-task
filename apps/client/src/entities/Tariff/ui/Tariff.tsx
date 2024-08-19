import { Button } from '@next-test-task/ui/button';

type TPossibility = {
    id: number;
    title: string;
};

interface ITariffProps {
    htmlFor: string;
    title: string;
    isActive: boolean;
    possibilities: TPossibility[];
}

export const Tariff: React.FC<ITariffProps> = ({ htmlFor, title, isActive, possibilities, ...props }) => {
    return (
        <label
            title={title}
            htmlFor={htmlFor}
            {...props}
            className='flex min-w-44 flex-col gap-4 rounded-8 border-2 border-black p-4'
        >
            <h5 className='text-20 font-600'>{title}</h5>
            <ul className='flex flex-col gap-1'>
                {possibilities.map((possibilitiy: TPossibility) => (
                    <li key={possibilitiy.id} className='opacity-60'>
                        - {possibilitiy.title}
                    </li>
                ))}
            </ul>
            <Button variant={isActive ? 'primary' : 'outline'}>{isActive ? 'selected' : 'select'}</Button>
        </label>
    );
};
