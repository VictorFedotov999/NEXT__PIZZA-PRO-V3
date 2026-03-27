interface IProps {
    title: string;
}

export const Title = ({ title }: IProps) => {
    return (
        <>
            <h3 className='order__title'>{title}</h3>
        </>
    );
};
