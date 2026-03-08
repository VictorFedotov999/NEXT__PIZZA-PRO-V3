'use client'; // Директива уже есть, это правильно для error.js

import Image from 'next/image';
import { useEffect } from 'react';

interface IProps {
    error: any;
    reset: any;
}

export default function Error({ error, reset }: IProps) {
    useEffect(() => {
        console.error('Error:', error);
    }, [error]);

    return (
        <section className='not__found'>
            <div className='container'>
                <div className='not__found__inner'>
                    <div className='not__found-info'>
                        <h1 className='not__found-title'>Доступ запрещён</h1>
                        <p className='not__found-text'>
                            Данную страницу могут просматривать только авторизованные пользователи
                        </p>
                        <div className='not__found-btns'>
                            <button
                                className='not__found-glaw'
                                onClick={() => (window.location.href = '/')}
                            >
                                <div>
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
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                        <path
                                            d='M7 12.988L1 6.99396L7 0.999878'
                                            stroke='#FE5F00'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </div>
                                На главную
                            </button>
                            <button
                                className='not__found-obnow'
                                onClick={() => reset()} // Используем reset из пропсов
                            >
                                Обновить
                            </button>
                        </div>
                    </div>
                    <div className='not__found-img'>
                        {/* Раскомментируйте когда добавите изображение
                        <Image
                            className='not__found-error'
                            src={ErrorImg}
                            alt='notFound'
                            width={100}
                            height={100}
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
