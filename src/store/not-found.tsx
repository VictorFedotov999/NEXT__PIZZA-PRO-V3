import Image from 'next/image';
import notFoundImages from '../../public/not-find/notFound.png';
import Link from 'next/link';
export default function NotFound() {
    return (
        <>
            <section className='not__found'>
                <div className='container'>
                    <div className='not__found__inner'>
                        <div className='not__found-info'>
                            <h1 className='not__found-title'>Страница не найдена</h1>
                            <p className='not__found-text'>
                                Проверьте корректность введённого адреса или повторите попытку позже
                            </p>

                            <div className='not__found-btns'>
                                <Link href='/'>
                                    <button className='not__found-glaw'>
                                        <svg
                                            className='not__found-glaw-svg'
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
                                        На главную
                                    </button>
                                </Link>
                                <button className='not__found-obnow'>Обновить</button>
                            </div>
                        </div>
                        <div className='not-found-img'>
                            <Image src={notFoundImages} alt='no-found' width={350} height={300} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
