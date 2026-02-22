import Image from 'next/image';
import ErrorImg from '../public/not-find/101-unlock 1.png';

export const Error = () => {
    return (
        <>
            <section className='not__found'>
                <div className='container'>
                    <div className='not__found__inner'>
                        <div className='not__found-info'>
                            <h1 className='not__found-title'>Доступ запрещён</h1>
                            <p className='not__found-text'>
                                Данную страницу могут просматривать только авторизованные
                                пользователи
                            </p>
                            <div className='not__found-btns'>
                                <button className='not__found-glaw'>
                                    <div className=''>
                                        <svg
                                            width='16'
                                            height='14'
                                            viewBox='0 0 16 14'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M14.7144 6.9939L1.00007 6.9939'
                                                stroke='#FE5F00'
                                                stroke-width='2'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                            />
                                            <path
                                                d='M7 12.988L1 6.99396L7 0.999878'
                                                stroke='#FE5F00'
                                                stroke-width='2'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                            />
                                        </svg>
                                    </div>
                                    На главную
                                </button>
                                <button className='not__found-obnow'>Обновить</button>
                            </div>
                        </div>
                        <div className='not__found-img'>
                            <Image
                                className='not__found-error'
                                src={ErrorImg}
                                alt='notFound'
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
