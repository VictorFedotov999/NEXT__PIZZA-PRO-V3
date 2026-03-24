import { useStoreTotalCost } from '@/store/BasketClientStore/BasketClientSelectors';

export const BasketSum = () => {
    const totalCost = useStoreTotalCost();
    return (
        <>
            <div className='basket__sum'>
                <h3 className='basket__sum-text'>Итого:</h3>
                <h3 className='basket__sum-price'>{totalCost}₽ </h3>
            </div>
            <div className='basket__sum'>
                <h3 className='basket__sum-text'>Налог 0%:</h3>
                <h3 className='basket__sum-price'>0 ₽</h3>
            </div>
        </>
    );
};
