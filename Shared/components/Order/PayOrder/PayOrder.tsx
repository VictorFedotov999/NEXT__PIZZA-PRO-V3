import { PayOrderInfo } from '../PayOrderInfo/PayOrderInfo';
import { OrderPromo } from '../OrderPromo/OrderPromo';
import { ResulPrice } from '../ResulPrice/ResulPrice';

export const PayOrder = () => {
    return (
        <>
            <div className='order__result'>
                <ResulPrice />

                <PayOrderInfo />
                <OrderPromo />
            </div>
        </>
    );
};
