type PropsType = {
    type: type;
};

type type = {
    id: number;
    type: string;
};

export const FilterTypeItem = ({ type, checked, onChange }: PropsType) => {
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
