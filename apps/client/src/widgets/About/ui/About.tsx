import { api } from '~/trpc/server';

export default async () => {
    const developers = await api.developers.addDeveloper();

    return (
        <div className='flex items-center justify-center py-32' id='about-section'>
            <div>
                <h2 className='text-center text-44 font-600'>We are used by</h2>
                <p className='text-center text-20'>{developers} developers</p>
            </div>
        </div>
    );
};
