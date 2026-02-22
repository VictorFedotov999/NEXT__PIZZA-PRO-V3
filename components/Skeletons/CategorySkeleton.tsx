import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CategorySkeleton = () => {
    return (
        <>
            <Skeleton width={730} height={35} borderRadius={10} />
        </>
    );
};
