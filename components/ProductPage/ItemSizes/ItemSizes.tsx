'use client';

import React from 'react';

const ItemSizes = ({ sizes }) => {
    const [sizeActive, setSize] = React.useState(0);

    const onClickSize = (index: number) => {
        setSize(index);
    };

    return (
        <>
            <div className='product__info-sizes'>
                {sizes.map((size, index: number) => (
                    <div
                        key={size.id}
                        onClick={() => onClickSize(index)}
                        className={
                            sizeActive === index
                                ? 'product__info-sizes-text active'
                                : 'product__info-sizes-text'
                        }
                    >
                        {size.size} см
                    </div>
                ))}
            </div>
        </>
    );
};
('product__info-sizes-text active');
export default ItemSizes;
