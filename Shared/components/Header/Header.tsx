import { BasketBtn } from './BasketBtn/BasketBtn';
import { HeaderInput } from './HeaderInput/HeaderInput';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { ProfileBtn } from './ProfileBtn/ProfileBtn';

export const Header = () => {
    return (
        <div className='main'>
            <header className='header '>
                <div className='container'>
                    <div className='header__inner '>
                        <HeaderLogo />
                        <HeaderInput />
                        <div className='header__btns'>
                            <ProfileBtn />
                            <BasketBtn />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
