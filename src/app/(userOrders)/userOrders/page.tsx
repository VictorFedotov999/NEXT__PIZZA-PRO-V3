import { prisma } from '../../../../prisma/prisma-client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';

const userOrdersPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        return (
            <div className='container'>
                <h1>Нужно войти</h1>
                <p>Чтобы посмотреть историю заказов, авторизуйтесь.</p>
            </div>
        );
    }

    const userId = Number((session.user as any).id);

    // const orders = await prisma.userOrderProduct.findMany({
    //     where: userId
    //     include: {
    //         userOrder: {

    //         }
    //     }
    // });

    return (
        <div className='container'>
            {/* <h1>Мои заказы</h1>
            {orders.length === 0 ? (
                <p>Заказов пока нет.</p>
            ) : (
                <div className='orders'>
                    {orders.map((order) => (
                        <div key={order.id} className='order-card'>
                            <h3>Заказ #{order.id}</h3>
                            <p>
                                Статус: {order.status} <br />
                                Дата: {order.createdAt.toLocaleDateString('ru-RU')}
                            </p>
                            <p>
                                Сумма: {order.totalAmount} ₽ <br />
                                Позиции: {order.userOrderProducts.length}
                            </p>

                            <div className='order-items'>
                                {order.userOrderProducts.map((item) => (
                                    <div key={item.id} className='order-item'>
                                        <b>{item.product?.title ?? 'Продукт'}</b>
                                        <div>
                                            {item.sizeOption ? `${item.sizeOption.size}см` : ''}
                                            {item.typeOption ? `, ${item.typeOption.type}` : ''}
                                        </div>
                                        <div>
                                            Ингредиенты:{' '}
                                            {item.ingredients?.map((i) => i.title).join(', ') ??
                                                '-'}
                                        </div>
                                        <div>Количество: {item.quantity}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )} */}
        </div>
    );
};

export default userOrdersPage;
