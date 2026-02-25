interface IBasketSum {}

export const BasketSum = () => {
    return (
        <>
            <div className='basket__sum'>
                <h3 className='basket__sum-text'>Итого:</h3>
                <h3 className='basket__sum-price'>₽</h3>
            </div>
            <div className='basket__sum'>
                <h3 className='basket__sum-text'>Налог 5%:</h3>
                <h3 className='basket__sum-price'>122 ₽</h3>
            </div>
        </>
    );
};
