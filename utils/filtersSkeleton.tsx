import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const filtersSkeleton = (limit: number, name: string, width: number, height: number) => {
    const emptyArray = Array(limit).fill(0);
    return (
        <>
            <div className='filter__title'>{name}</div>
            <div className='filter__type'>
                <ul className='filter__type-items'>
                    {emptyArray.map((_, index) => (
                        <li key={index} className='filter__type-item-skeleton'>
                            <Skeleton width={width} height={height} borderRadius={10} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
