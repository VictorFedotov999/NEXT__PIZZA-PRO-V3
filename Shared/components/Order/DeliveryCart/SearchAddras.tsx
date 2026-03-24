'use client';
import 'react-dadata/dist/react-dadata.css';
import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import { useFormContext } from 'react-hook-form';

interface IProps {
    register?: any;
    addressError: string;
}

export const SearchAddras = ({ addressError }: IProps) => {
    const { setValue, getValues } = useFormContext();
    const [value, setLocalValue] = React.useState<any>('');

    const handleAddressChange = (suggestion: any) => {
        setLocalValue(suggestion);
        if (suggestion) {
            setValue('address', suggestion.value, { shouldValidate: true });
        } else {
            setValue('address', '', { shouldValidate: true });
        }
    };

    return (
        <>
            {addressError && <span className='error'>{addressError}</span>}
            <AddressSuggestions
                token='fcdf620d655a307627f7a604d2ff33b7ffd8607e'
                value={value}
                onChange={handleAddressChange}
            />
        </>
    );
};
