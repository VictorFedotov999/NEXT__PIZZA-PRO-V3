import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export const OrderItemSkeleton = () => {
    return (
        <>
            <div className='OrderItemSkeleton'>
                <Skeleton className='' width={650} height={70} borderRadius={15} />
            </div>
            <div className='OrderItemSkeleton'>
                <Skeleton className='' width={650} height={70} borderRadius={15} />
            </div>
        </>
    );
};
