import { TypeOption } from '@prisma/client';

interface IProps {
    type: TypeOption;
    checked: boolean;
    onChange: () => void;
}

export const FilterTypeItem = ({ type, checked, onChange }: IProps) => {
    return (
        <li className='filter__type-item'>
            <input
                checked={checked}
                onChange={onChange}
                className='filter__type-text'
                type='checkbox'
                id={`filterCheckbox${type.id}`}
            />
            <label htmlFor={`filterCheckbox${type.id}`}>{type.type} </label>
        </li>
    );
};
