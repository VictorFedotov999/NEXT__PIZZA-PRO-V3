import { SizeOption } from '@prisma/client';

interface IProps {
    size: SizeOption;
    checked: boolean;
    onChange: () => void;
}

export const FilterSizeItem = ({ size, checked, onChange }: IProps) => {
    return (
        <>
            <li className='filter__type-item'>
                <input
                    checked={checked}
                    onChange={onChange}
                    className='filter__type-text'
                    type='checkbox'
                    id={`filterCheckboxSize${size.id}`}
                />
                <label htmlFor={`filterCheckboxSize${size.id}`}>{size.size} см</label>
            </li>
        </>
    );
};
