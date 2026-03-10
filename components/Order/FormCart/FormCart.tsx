import { DeliveryCart } from '../DeliveryCart/DeliveryCart';
import { PersonalInfoCart } from '../PersonalInfoCart/PersonalInfoCart';

export const FormCart = () => {
    return (
        <>
            <PersonalInfoCart />
            <DeliveryCart />
        </>
    );
};
