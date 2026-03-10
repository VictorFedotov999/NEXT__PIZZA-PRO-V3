import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export const ProductSkeleton = () => {
    return (
        <>
            <div className='item active-setting'>
                <Skeleton className='item-img ' circle width={240} height={240} />

                <h1 className='item-title'>
                    <Skeleton width={260} height={25} />
                </h1>
                <p className='item-text'>
                    <Skeleton width={260} />
                    <Skeleton width={260} />
                    <Skeleton width={260} />
                </p>
                <div className='item-bottom'>
                    <p className='item-price'>
                        <Skeleton width={100} height={30} />
                    </p>

                    <Skeleton width={130} height={40} borderRadius={20} />
                </div>
            </div>
        </>
    );
};
