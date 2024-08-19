import { About } from '~/widgets/About';
import { Header } from '~/widgets/Header';
import { Intro } from '~/widgets/Intro';

export default () => {
    return (
        <>
            <Header />
            <Intro />
            <div className='h-0.5 w-full bg-black'></div>
            <About />
        </>
    );
};
