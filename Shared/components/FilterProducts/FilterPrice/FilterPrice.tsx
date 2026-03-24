export const FilterPrice = () => {
    return (
        <>
            <div className='filter__prices'>
                <h1 className='filter__prices-title'>Цена от и до:</h1>
                <div className='filter__price'>
                    <input className='filter__price-box' type='number' defaultValue='0' />
                    <input className='filter__price-box' type='number' defaultValue='100' />
                </div>
            </div>
        </>
    );
};
