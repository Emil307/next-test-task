'use client';

import type { SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@next-test-task/ui/button';

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
    const { register, handleSubmit } = useForm<IFormFileds>();
    const [activeTariff, setActiveTariff] = useState('free');

    const onSubmit: SubmitHandler<IFormFileds> = data => {
        console.log(`selected tariff - ${data.tariff}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex items-start gap-4'>
                <Tariff
                    title='Free'
                    possibilities={freePossibilities}
                    isActive={activeTariff === 'free' ? true : false}
                    htmlFor='free-radio'
                />
                <input
                    className='hidden opacity-0'
                    id='free-radio'
                    type='radio'
                    {...register('tariff', {
                        required: 'Обязательное поле',
                    })}
                    value='free'
                    onChange={event => setActiveTariff(event.target.value)}
                />

                <Tariff
                    possibilities={proPossibilities}
                    isActive={activeTariff === 'pro' ? true : false}
                    title='Pro'
                    htmlFor='pro-radio'
                />
                <input
                    className='hidden opacity-0'
                    id='pro-radio'
                    type='radio'
                    {...register('tariff', {
                        required: 'Обязательное поле',
                    })}
                    value='pro'
                    onChange={event => setActiveTariff(event.target.value)}
                />

                <Tariff
                    possibilities={enterpricePossibilities}
                    isActive={activeTariff === 'enterprice' ? true : false}
                    title='Enterprice'
                    htmlFor='enterprice-radio'
                />
                <input
                    className='hidden opacity-0'
                    id='enterprice-radio'
                    type='radio'
                    {...register('tariff', {
                        required: 'Обязательное поле',
                    })}
                    value='enterprice'
                    onChange={event => setActiveTariff(event.target.value)}
                />
            </div>
            <Button variant={'primary'}>submit</Button>
        </form>
    );
};
