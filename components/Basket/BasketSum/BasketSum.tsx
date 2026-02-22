interface IBasketSum {
    totalCost: number;
}

export const BasketSum = ({ totalCost }: IBasketSum) => {
    return (
        <>
            <div className='basket__sum'>
                <h3 className='basket__sum-text'>Итого:</h3>
                <h3 className='basket__sum-price'>{totalCost}₽</h3>
            </div>
            <div className='basket__sum'>
                <h3 className='basket__sum-text'>Налог 5%:</h3>
                <h3 className='basket__sum-price'>122 ₽</h3>
            </div>
        </>
    );
};
