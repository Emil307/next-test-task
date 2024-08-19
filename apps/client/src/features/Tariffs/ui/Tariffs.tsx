'use client';

import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

interface IFormFileds {
    tariff: any;
}

export default () => {
    const { register, handleSubmit } = useForm<IFormFileds>();

    const onSubmit: SubmitHandler<IFormFileds> = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type='radio'
                {...register('tariff', {
                    required: 'Обязательное поле',
                })}
                value='free'
            />
            <input
                type='radio'
                {...register('tariff', {
                    required: 'Обязательное поле',
                })}
                value='pro'
            />
            <input
                type='radio'
                {...register('tariff', {
                    required: 'Обязательное поле',
                })}
                value='enterprice'
            />
            <button>submit</button>
        </form>
    );
};
