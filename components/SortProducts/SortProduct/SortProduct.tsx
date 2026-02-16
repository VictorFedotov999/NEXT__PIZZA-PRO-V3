'use client';

import React from 'react';
import { SortProductSvg } from './SortProductSvg';
import { useClickAway } from 'react-use';
import { getSorts } from '../../../services/sorts';
import { useRouter, useSearchParams } from 'next/navigation';

type PropsType = {};

type SortType = {
    id: number;
    title: string;
};

export const SortProduct: React.FC<PropsType> = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [sorts, setSorts] = React.useState<SortType[]>([]);
    const [OpenSortPopup, setOpenSortPopup] = React.useState(false);

    const currentSort = searchParams.get('sort') || 'Рейтинг';

    const onClickPopup = () => {
        setOpenSortPopup(true);
    };

    const onClickSort = (sort: string) => {
        setOpenSortPopup(false);

        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', sort);

        router.push(`/?${params.toString()}`);
    };

    const ref = React.useRef(null);
    useClickAway(ref, () => {
        setOpenSortPopup(false);
    });

    React.useEffect(() => {
        getSorts().then((data) => setSorts(data));
    }, []);

    return (
        <div className='sort__inner' ref={ref}>
            <SortProductSvg />
            <p className='sort__title:' onClick={() => onClickPopup()}>
                Сортировка:
            </p>
            <p className='sort__text' onClick={() => onClickPopup()}>
                {currentSort}
            </p>

            <div
                className={OpenSortPopup ? ' header__sort__popup active' : ' header__sort__popup '}
            >
                {sorts.map((sort: SortType, index: number) => (
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
