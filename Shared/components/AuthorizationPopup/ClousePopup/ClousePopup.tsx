import Image from 'next/image';
import deleteIcon from '../../../../public/deleteX.svg';

interface IProps {
    clousePopup: (open: boolean) => void;
}

export const ClousePopup = ({ clousePopup }: IProps) => {
    return (
        <>
            <div className='popup__clouse-btn' onClick={() => clousePopup(false)}>
                <Image
                    className='popup__clouse-icon'
                    src={deleteIcon}
                    alt='clousee'
                    width={50}
                    height={50}
                />
            </div>
        </>
    );
};
