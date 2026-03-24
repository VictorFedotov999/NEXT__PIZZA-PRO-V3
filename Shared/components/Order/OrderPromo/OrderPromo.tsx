'use client';

import React from 'react';
import toast from 'react-hot-toast';

export const OrderPromo = () => {
    const [activePromo, setActivePromo] = React.useState(false);
    const onClickPromo = () => {
        toast.error('В разработке');
        setActivePromo(!activePromo);
    };

    return (
        <>
            <div className='order__promo'>
                <h3 className='order__promo-text' onClick={() => onClickPromo()}>
                    У меня есть промокод
                </h3>

                {activePromo === true ? (
                    <input
                        className='order__promo-input active'
                        placeholder='promokod'
                        type='text'
                    />
                ) : (
                    ''
                )}
            </div>
        </>
    );
};
