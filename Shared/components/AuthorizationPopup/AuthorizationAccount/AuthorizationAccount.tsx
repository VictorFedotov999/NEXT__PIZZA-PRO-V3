import googleIcon from '../../../../public/google.png';
import githubIcon from '../../../../public/github.png';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

interface IProps {
    setOpenRegister: (open: boolean) => void;
}

export const AuthorizationAccount = ({ setOpenRegister }: IProps) => {
    return (
        <>
            <div className='popup__account'>
                <button
                    className='popup__account-btn github'
                    onClick={() => signIn('github', { callbackUrl: '/', redirect: true })}
                >
                    github
                    <Image className='popup__account-icon' src={githubIcon} alt='githubIcon' />
                </button>

                <button className='popup__account-btn google' onClick={() => setOpenRegister(true)}>
                    google
                    <Image className='popup__account-icon' src={googleIcon} alt='googleIcon' />
                </button>
            </div>
        </>
    );
};
