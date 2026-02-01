'use client';
import React from 'react';

import { SortProductSvg } from './SortProductSvg';
import { useClickAway } from 'react-use';

export const SortProduct = () => {
    const sorts = ['рейтингу', 'цене', 'алфавиту'];
    const [OpenSortPopup, setOpenSortPopup] = React.useState(false);
    const [activeSort, setActiveSort] = React.useState(0);

    const onClickPopup = () => {
        setOpenSortPopup(true);
    };
    //
    const onClickSort = (index: number) => {
        setActiveSort(index);
        setOpenSortPopup(false);
    };

    const ref = React.useRef(null);
    useClickAway(ref, () => {
        setOpenSortPopup(false);
    });

    return (
        <>
            <div className='sort__inner' ref={ref}>
                <SortProductSvg />

                <p className='sort__title:'>Сортировка:</p>
                <p className='sort__text' onClick={() => onClickPopup()}>
                    {sorts[activeSort]}
                </p>
                <div
                    className={
                        OpenSortPopup ? ' header__sort__popup active' : ' header__sort__popup'
                    }
                >
                    {sorts.map((typeSort, index) => (
                        <h3
                            key={`${typeSort}`}
                            onClick={() => onClickSort(index)}
                            className={
                                activeSort === index
                                    ? 'header__profile_popup-text active'
                                    : 'header__profile_popup-text'
                            }
                        >
                            {typeSort}
                        </h3>
                    ))}
                </div>
            </div>
        </>
    );
};
// 'header__profile_popup-text active'
