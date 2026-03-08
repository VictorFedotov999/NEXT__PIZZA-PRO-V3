import HeaderIcon from '../../../public/header/HeaderLogo.png';
import Image from 'next/image';
import Link from 'next/link';

export const HeaderLogo = () => {
    return (
        <>
            <Link className='header__logo' href='/'>
                <Image src={HeaderIcon} width={40} height={40} alt='logo' />
                <div className='header__logo-contant'>
                    <h1 className='header__logo-title'>PIZZA PRO</h1>
                    <h3 className='header__logo-text'>вкусней уже точно некуда</h3>
                </div>
            </Link>
        </>
    );
};
