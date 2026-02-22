import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const FilterTypeSkeleton = () => {
    return (
        <>
            <ul className='filter__type-items'>
                <li className='filter__type-item-skeleton'>
                    <Skeleton width={150} height={30} borderRadius={10} />
                </li>
                <li className='filter__type-item-skeleton'>
                    <Skeleton width={150} height={30} borderRadius={10} />
                </li>
            </ul>
        </>
    );
};
