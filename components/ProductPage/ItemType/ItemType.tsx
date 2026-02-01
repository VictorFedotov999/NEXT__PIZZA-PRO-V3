'use client';
import React from 'react';

const ItemType = ({ types }) => {
    const [typeActive, setTypeActive] = React.useState(0);
    const onClickType = (index) => {
        setTypeActive(index);
    };
    console.log(types);
    return (
        <>
            <div className='product__info-types'>
                {types.map((type, index) => (
                    <div
                        key={type.id}
                        onClick={() => onClickType(index)}
                        className={
                            typeActive === index
                                ? 'product__info-sizes-text active'
                                : 'product__info-sizes-text'
                        }
                    >
                        {type.type}
                    </div>
                ))}

                {/* {types.map((type.map) =>
                    item.typeOptions.map((types) => (
                        <div
                            key={types.index}
                            onClick={() => onClickType(types.typeOption.id)}
                            className={
                                type === types.typeOption.id
                                    ? 'product__info-sizes-text active'
                                    : 'product__info-sizes-text'
                            }
                        >
                            {types.typeOption.type}
                        </div>
                    )),
                )} */}
            </div>
        </>
    );
    ('product__info-type-text');
};
export default ItemType;
