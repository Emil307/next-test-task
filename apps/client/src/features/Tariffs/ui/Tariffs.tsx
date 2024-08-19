'use client';

import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { ModalDescription, ModalTitle } from '@next-test-task/ui/modal';

import { Tariff } from '~/entities/Tariff';

type TTariff = 'free' | 'pro' | 'enterprice';

interface IFormFileds {
    tariff: TTariff;
}

const freePossibilities = [
    {
        id: 1,
        title: 'Figma editor',
        level: 1,
    },
    {
        id: 2,
        title: '3 collaborative design files',
        level: 1,
    },
    {
        id: 3,
        title: 'Unlimited personal drafts',
        level: 1,
    },
];

const proPossibilities = [
    {
        id: 1,
        title: 'Figma editor',
        level: 1,
    },
    {
        id: 2,
        title: '3 collaborative design files',
        level: 1,
    },
    {
        id: 3,
        title: 'Unlimited personal drafts',
        level: 1,
    },
    {
        id: 4,
        title: 'View annotations',
        level: 2,
    },
    {
        id: 5,
        title: 'VS Code extension',
        level: 3,
    },
];

const enterpricePossibilities = [
    {
        id: 1,
        title: 'Figma editor',
        level: 1,
    },
    {
        id: 2,
        title: '3 collaborative design files',
        level: 1,
    },
    {
        id: 3,
        title: 'Unlimited personal drafts',
        level: 1,
    },
    {
        id: 4,
        title: 'View annotations',
        level: 2,
    },
];

export default () => {
    const { register, watch, handleSubmit } = useForm<IFormFileds>();

    const watchTariff = watch('tariff', 'free');

    const onSubmit: SubmitHandler<IFormFileds> = data => {
        console.log(`selected tariff - ${data.tariff}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-end gap-8'>
            <div className='flex flex-col gap-4'>
                <ModalTitle>
                    <p className='text-24 font-600'>Tariffs</p>
                </ModalTitle>
                <ModalDescription></ModalDescription>
                <div className='flex items-start gap-4'>
                    <Tariff
                        title='Free'
                        possibilities={freePossibilities}
                        isActive={watchTariff === 'free' ? true : false}
                        htmlFor='free-radio'
                    />
                    <input
                        className='hidden opacity-0'
                        id='free-radio'
                        type='radio'
                        {...register('tariff')}
                        value='free'
                        defaultChecked
                    />

                    <Tariff
                        possibilities={proPossibilities}
                        isActive={watchTariff === 'pro' ? true : false}
                        title='Pro'
                        htmlFor='pro-radio'
                    />
                    <input
                        className='hidden opacity-0'
                        id='pro-radio'
                        type='radio'
                        {...register('tariff')}
                        value='pro'
                    />

                    <Tariff
                        possibilities={enterpricePossibilities}
                        isActive={watchTariff === 'enterprice' ? true : false}
                        title='Enterprice'
                        htmlFor='enterprice-radio'
                    />
                    <input
                        className='hidden opacity-0'
                        id='enterprice-radio'
                        type='radio'
                        {...register('tariff')}
                        value='enterprice'
                    />
                </div>
            </div>
            <button className='flex h-14 w-64 items-center justify-center rounded-8 bg-accent text-20 font-600 text-white'>
                Apply
            </button>
        </form>
    );
};
