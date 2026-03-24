import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SETTINGS_PAGE, USER_ORDERS_PAGE } from '../../../../services/instance';

interface IProps {
    openPopup: boolean;
    setOpenPopup: (open: boolean) => void;
}

export const ProfilePopup = ({ setOpenPopup, openPopup }: IProps) => {
    const route = useRouter();
    const [setting, setSetting] = React.useState<number>(0);

    const settings = [
        {
            name: 'Настройки',
            path: SETTINGS_PAGE,
        },
        {
            name: 'Заказы',
            path: USER_ORDERS_PAGE,
        },
        {
            name: 'Выйти',
            path: '/',
        },
    ];

    const onClickSetting = (index: number) => {
        const selectedSetting = settings[index];

        if (selectedSetting.name === 'Настройки') {
            route.push(selectedSetting.path);
        }
        if (selectedSetting.name === 'Заказы') {
            route.push(selectedSetting.path);
        }
        if (selectedSetting.name === 'Выйти') {
            signOut({ callbackUrl: '/' });
        }
        setSetting(index);
        setOpenPopup(false);
    };

    return (
        <div className={openPopup ? 'header__profile_popup active' : 'header__profile_popup'}>
            {settings.map((set, index) => (
                <h3
                    key={index}
                    onClick={() => onClickSetting(index)}
                    className={
                        setting === index
                            ? 'header__profile_popup-text active'
                            : 'header__profile_popup-text'
                    }
                >
                    {set.name}
                </h3>
            ))}
        </div>
    );
};
