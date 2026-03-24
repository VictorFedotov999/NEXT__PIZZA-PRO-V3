interface IProps {
    setFocused: (focused: boolean) => void;
    setSearQuery: (query: string) => void;
    searchQuery: string;
}

export const InputSearch = ({ setFocused, searchQuery, setSearQuery }: IProps) => {
    return (
        <>
            <div className='header__search'>
                <input
                    className='header__input'
                    type=''
                    placeholder='Поиск пиццы...'
                    onFocus={() => setFocused(true)}
                    value={searchQuery}
                    onChange={(e) => setSearQuery(e.target.value)}
                />
            </div>
        </>
    );
};
