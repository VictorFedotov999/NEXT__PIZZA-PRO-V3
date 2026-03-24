interface IProps {
    orderId: number;
    totalAmount: number;
    paymentUrl: string;
}

export function PayOrderTemplate({ orderId, totalAmount, paymentUrl }: IProps) {
    return (
        <div>
            <h1>Заказ, #{orderId}!</h1>
            <p>
                Оплатите заказ на cумму {totalAmount}₽. Перейдите по <a href={paymentUrl}>ссылке</a>
                для оплаты для оплаты
            </p>
        </div>
    );
}
