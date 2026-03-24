'use client';

import React from 'react';
import Image from 'next/image';
import { useClickAway } from 'react-use';
import { useRouter, useSearchParams } from 'next/navigation';
import ChoiceProductIcon from '../../../../public/choiceProduct/choiceProduct.svg';
import { Sorting } from '@prisma/client';

interface IProps {
    sorts: Sorting[];
}

export const SortProduct = ({ sorts }: IProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [OpenSortPopup, setOpenSortPopup] = React.useState<boolean>(false);

    const currentSort = searchParams.get('sort') || 'Рейтинг';

    const onClickPopup = () => {
        setOpenSortPopup(true);
    };

    const onClickSort = (sort: string) => {
        setOpenSortPopup(false);

        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', sort);

        router.replace(`/?${params.toString()}`);
    };

    const ref = React.useRef(null);
    useClickAway(ref, () => {
        setOpenSortPopup(false);
    });

    return (
        <div className='sort__inner' ref={ref}>
            <Image
                className='sort__img'
                src={ChoiceProductIcon}
                width={20}
                height={20}
                alt='Choice-Icon'
            />
            <p className='sort__title:' onClick={() => onClickPopup()}>
                Сортировка:
            </p>
            <p className='sort__text' onClick={() => onClickPopup()}>
                {currentSort}
            </p>

            <div
                className={OpenSortPopup ? ' header__sort__popup active' : ' header__sort__popup '}
            >
                {sorts.map((sort) => (
                    <div key={sort.id}>
                        <h3
                            onClick={() => onClickSort(sort.title)}
                            className={
                                currentSort === sort.title
                                    ? 'header__profile_popup-text active'
                                    : 'header__profile_popup-text '
                            }
                        >
                            {sort.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
