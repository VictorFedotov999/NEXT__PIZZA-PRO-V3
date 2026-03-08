'use client';

import React from 'react';

import { Api } from '../../../services/api-client';
import { debounce } from 'lodash';
import { useClickAway } from 'react-use';
import { ProductIdType } from '../../../prisma/prismaType';
import InputPopop from './InputPopop';
import { InputSearch } from './InputSearch';
import { ClearQueryBtn } from './ClearQueryBtn';

export const HeaderInput = () => {
    const [searchQuery, setSearQuery] = React.useState<string>('');
    const [focused, setFocused] = React.useState<boolean>(false);
    const [products, setProducts] = React.useState<ProductIdType[]>([]);
    const ref = React.useRef(null);

    useClickAway(ref, () => {
        setFocused(false);
    });

    const onClickRemoveSearchQuery = () => {
        setSearQuery('');
    };

    const fetchProducts = React.useCallback(
        debounce(async (query: string) => {
            const data = await Api.searchProduct(query);
            setProducts(data);
        }, 500),
        [],
    );

    React.useEffect(() => {
        fetchProducts(searchQuery);
    }, [searchQuery, fetchProducts]);

    return (
        <>
            <div className={focused ? 'black--font' : ''} ref={ref}>
                <InputSearch
                    setFocused={setFocused}
                    searchQuery={searchQuery}
                    setSearQuery={setSearQuery}
                />
                {searchQuery.length >= 1 ? (
                    <ClearQueryBtn onClickRemoveSearchQuery={onClickRemoveSearchQuery} />
                ) : (
                    ''
                )}

                {focused && <InputPopop products={products} setFocused={setFocused} />}
            </div>
        </>
    );
};
