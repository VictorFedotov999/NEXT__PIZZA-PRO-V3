interface IProps {
    handlePlusProduct: () => void;
}

export const ItemBtnPlus = ({ handlePlusProduct }: IProps) => {
    return (
        <>
            <button className='basket__item__plus' onClick={handlePlusProduct}>
                +
            </button>
        </>
    );
};
