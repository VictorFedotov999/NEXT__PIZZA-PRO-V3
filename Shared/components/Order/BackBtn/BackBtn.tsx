import Link from 'next/link';
import Image from 'next/image';
import BackPageIcon from '../../../../public/not-find/arrow.svg';

export const BackBtn = () => {
    return (
        <>
            <div className='back-btn'>
                <Link href='/'>
                    <Image src={BackPageIcon} width={30} height={30} alt='Arrow' />
                </Link>
            </div>
        </>
    );
};
