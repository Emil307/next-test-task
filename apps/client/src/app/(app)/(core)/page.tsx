import { api } from '~/trpc/server';
import { About } from '~/widgets/About';
import { Header } from '~/widgets/Header';
import { Intro } from '~/widgets/Intro';

export default async () => {
    const _data = await api.google.greeting('Mike');

    return (
        <>
            <Header />
            <Intro />
            <div className='h-0.5 w-full bg-black'></div>
            <About />
        </>
    );
};
