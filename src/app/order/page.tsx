import Image from 'next/image';
import Product from '../../../public/order/product.png';

const PageOrder = () => {
    return (
        <>
            <section className='order'>
                <div className='container'>
                    <div className='order__inner'>
                        <div className='order__contant'>
                            <h3 className='title'>Оформление заказа</h3>
                            <div className='order__cart'>
                                <div className='order__decoration'>
                                    <div className='order__decoration__basket'>
                                        <div className='order__basket__top'>
                                            <h3 className='order__title'>1. Корзина</h3>

                                            <button className='order__basket-btn'>
                                                <div className='order__basket-btn-img'>
                                                    <svg
                                                        width='16'
                                                        height='16'
                                                        viewBox='0 0 16 16'
                                                        fill='none'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                    >
                                                        <path
                                                            d='M2.1499 3.5498H13.3499L12.2439 13.5038C12.206 13.8464 12.043 14.1629 11.7863 14.3928C11.5295 14.6227 11.197 14.7498 10.8523 14.7498H4.6475C4.30285 14.7498 3.9703 14.6227 3.71353 14.3928C3.45676 14.1629 3.29381 13.8464 3.2559 13.5038L2.1499 3.5498Z'
                                                            stroke='black'
                                                            stroke-width='1.5'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'
                                                        />
                                                        <path
                                                            d='M4.4913 1.5529C4.60453 1.31278 4.7837 1.1098 5.00791 0.967638C5.23212 0.825477 5.49213 0.749997 5.7576 0.75H9.742C10.0076 0.749864 10.2678 0.825282 10.4921 0.96745C10.7165 1.10962 10.8957 1.31267 11.009 1.5529L11.9498 3.55H3.5498L4.4913 1.5529Z'
                                                            stroke='black'
                                                            stroke-width='1.5'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'
                                                        />
                                                        <path
                                                            d='M0.75 3.5498H14.75'
                                                            stroke='black'
                                                            stroke-width='1.5'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'
                                                        />
                                                        <path
                                                            d='M6.3501 7.0498V10.5498'
                                                            stroke='black'
                                                            stroke-width='1.5'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'
                                                        />
                                                        <path
                                                            d='M9.1499 7.0498V10.5498'
                                                            stroke='black'
                                                            stroke-width='1.5'
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'
                                                        />
                                                    </svg>
                                                </div>
                                                Очистить корзину
                                            </button>
                                        </div>
                                        <div className='order__items'>
                                            <div className='order__item'>
                                                <Image className='order__item-img' src={Product} />

                                                <div className='order__item-info'>
                                                    <h1 className='order__item-title'>
                                                        Чизбургер-пицца
                                                    </h1>
                                                    <p className='order__item-text'>
                                                        Средняя 30 см, традиционное тесто
                                                    </p>
                                                </div>
                                                <h2 className='order__item-price'>965 ₽</h2>
                                                <div className='order__item-count'>
                                                    <div className='item__count'>
                                                        <button className='item__count-btn'>
                                                            -
                                                        </button>
                                                        <h4 className='item__count-number'>1</h4>
                                                        <button className='item__count-btn'>
                                                            +
                                                        </button>
                                                        <button>
                                                            <div className='item__remove-btn'>
                                                                <svg
                                                                    width='12'
                                                                    height='12'
                                                                    viewBox='0 0 12 12'
                                                                    fill='none'
                                                                    xmlns='http://www.w3.org/2000/svg'
                                                                >
                                                                    <path
                                                                        d='M0.75 0.75L10.75 10.75M0.75 10.75L10.75 0.75'
                                                                        stroke='#C0C0C0'
                                                                        stroke-width='1.5'
                                                                        stroke-linecap='round'
                                                                        stroke-linejoin='round'
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='order__item'>
                                                <Image className='order__item-img' src={Product} />

                                                <div className='order__item-info'>
                                                    <h1 className='order__item-title'>
                                                        Чизбургер-пицца
                                                    </h1>
                                                    <p className='order__item-text'>
                                                        Средняя 30 см, традиционное тесто
                                                    </p>
                                                </div>
                                                <h2 className='order__item-price'>965 ₽</h2>
                                                <div className='order__item-count'>
                                                    <div className='item__count'>
                                                        <button className='item__count-btn'>
                                                            -
                                                        </button>
                                                        <h4 className='item__count-number'>1</h4>
                                                        <button className='item__count-btn'>
                                                            +
                                                        </button>
                                                        <button>
                                                            <div className='item__remove-btn'>
                                                                <svg
                                                                    width='12'
                                                                    height='12'
                                                                    viewBox='0 0 12 12'
                                                                    fill='none'
                                                                    xmlns='http://www.w3.org/2000/svg'
                                                                >
                                                                    <path
                                                                        d='M0.75 0.75L10.75 10.75M0.75 10.75L10.75 0.75'
                                                                        stroke='#C0C0C0'
                                                                        stroke-width='1.5'
                                                                        stroke-linecap='round'
                                                                        stroke-linejoin='round'
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='order__cart'>
                                <h3 className='order__title'>2. Персональная информация</h3>
                                <div className='order__personal'>
                                    <form className='order__personal-form' action=''>
                                        <div className='order__form-inner'>
                                            <input
                                                className='order__form-input'
                                                type='text'
                                                placeholder='Имя'
                                            />

                                            <input
                                                className='order__form-input'
                                                type='text'
                                                placeholder='Фамилия'
                                            />
                                        </div>
                                        <div className='order__form-inner'>
                                            <input
                                                className='order__form-input'
                                                type='text'
                                                placeholder='E-Mail'
                                            />
                                            <input
                                                className='order__form-input'
                                                type='number'
                                                placeholder='Телефон'
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className='order__cart'>
                                <h3 className='order__title'>3. Адрес доставки</h3>
                                <div className='order__delivery'>
                                    <form className='' action=''>
                                        <h3 className='order__delivery-title'>Введите адрес</h3>
                                        <input className='order__delivery-input' type='text' />
                                        <div>
                                            <h3 className='order__delivery-title'>
                                                Комментарий к заказу
                                            </h3>
                                            <textarea
                                                className='order__dilivery-textarea'
                                                placeholder='Укажите тут дополнительную информацию для курьера'
                                                name=''
                                                id=''
                                            ></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className='order__result'>
                            <h3 className='order__result-title'>Итого:</h3>
                            <h3 className='order__result-price'>2365 ₽</h3>
                            <div className='order__result-contant'>
                                <div className='order__result-cost'>
                                    <h4 className='order__result-text'>
                                        <div className='order__result-icon'>
                                            <svg
                                                width='15'
                                                height='15'
                                                viewBox='0 0 15 15'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M14.5 4L7.5 0.5L0.5 4V11L7.5 14.5L14.5 11V4Z'
                                                    stroke='#B9B9B9'
                                                    stroke-linejoin='round'
                                                />
                                                <path
                                                    d='M11 2.25L4 5.75M0.5 4L7.5 7.5L0.5 4ZM7.5 14.5V7.5V14.5ZM14.5 4L7.5 7.5L14.5 4Z'
                                                    stroke='#B9B9B9'
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                />
                                            </svg>
                                        </div>
                                        Стоимость товаров:
                                    </h4>
                                    <h4 className='order__result-itog'>2005 ₽</h4>
                                </div>
                                <div className='order__result-cost'>
                                    <h4 className='order__result-text'>
                                        <div className='order__result-icon'>
                                            <svg
                                                width='13'
                                                height='13'
                                                viewBox='0 0 13 13'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    fill-rule='evenodd'
                                                    clip-rule='evenodd'
                                                    d='M2.54348 5.08696C2.04043 5.08696 1.54867 4.93779 1.1304 4.6583C0.712126 4.37882 0.386122 3.98159 0.193612 3.51683C0.00110204 3.05207 -0.0492673 2.54066 0.0488734 2.04727C0.147014 1.55388 0.389257 1.10068 0.744969 0.744969C1.10068 0.389257 1.55388 0.147014 2.04727 0.0488734C2.54066 -0.0492673 3.05207 0.00110204 3.51683 0.193612C3.98159 0.386122 4.37882 0.712126 4.6583 1.1304C4.93779 1.54867 5.08696 2.04043 5.08696 2.54348C5.08696 3.21805 4.81898 3.865 4.34199 4.34199C3.865 4.81898 3.21805 5.08696 2.54348 5.08696ZM2.54348 1.69565C2.3758 1.69565 2.21188 1.74538 2.07245 1.83854C1.93303 1.9317 1.82436 2.06411 1.76019 2.21903C1.69602 2.37395 1.67923 2.54442 1.71194 2.70888C1.74466 2.87334 1.82541 3.02441 1.94398 3.14298C2.06255 3.26155 2.21361 3.3423 2.37808 3.37501C2.54254 3.40773 2.71301 3.39094 2.86793 3.32677C3.02285 3.2626 3.15526 3.15393 3.24842 3.01451C3.34158 2.87508 3.39131 2.71116 3.39131 2.54348C3.38838 2.31953 3.29811 2.10558 3.13975 1.94721C2.98138 1.78885 2.76743 1.69858 2.54348 1.69565ZM0.904474 12.9435C0.79308 12.944 0.682703 12.9223 0.57982 12.8796C0.476936 12.8369 0.383619 12.774 0.305343 12.6948C0.146573 12.5358 0.0573935 12.3203 0.0573935 12.0957C0.0573935 11.871 0.146573 11.6555 0.305343 11.4965L11.4966 0.305219C11.5743 0.221921 11.6679 0.15511 11.7719 0.108771C11.8759 0.0624326 11.9881 0.0375155 12.102 0.035507C12.2158 0.0334985 12.3289 0.0544396 12.4345 0.0970808C12.54 0.139722 12.6359 0.20319 12.7164 0.283698C12.7969 0.364206 12.8604 0.460105 12.903 0.565674C12.9457 0.671243 12.9666 0.78432 12.9646 0.898158C12.9626 1.012 12.9377 1.12426 12.8914 1.22826C12.845 1.33226 12.7782 1.42586 12.6949 1.50348L1.5036 12.6948C1.42533 12.774 1.33201 12.8369 1.22913 12.8796C1.12624 12.9223 1.01587 12.944 0.904474 12.9435ZM9.04354 12.5713C9.46182 12.8508 9.95357 13 10.4566 13C11.1312 13 11.7781 12.732 12.2551 12.255C12.7321 11.778 13.0001 11.1311 13.0001 10.4565C13.0001 9.95344 12.8509 9.46169 12.5715 9.04341C12.292 8.62514 11.8947 8.29914 11.43 8.10663C10.9652 7.91412 10.4538 7.86375 9.96042 7.96189C9.46703 8.06003 9.01383 8.30227 8.65812 8.65798C8.3024 9.0137 8.06016 9.4669 7.96202 9.96029C7.86388 10.4537 7.91425 10.9651 8.10676 11.4298C8.29927 11.8946 8.62527 12.2918 9.04354 12.5713ZM9.9856 9.75155C10.125 9.65839 10.2889 9.60867 10.4566 9.60867C10.6806 9.6116 10.8945 9.70186 11.0529 9.86023C11.2113 10.0186 11.3015 10.2325 11.3045 10.4565C11.3045 10.6242 11.2547 10.7881 11.1616 10.9275C11.0684 11.0669 10.936 11.1756 10.7811 11.2398C10.6262 11.304 10.4557 11.3207 10.2912 11.288C10.1268 11.2553 9.97569 11.1746 9.85712 11.056C9.73855 10.9374 9.6578 10.7864 9.62509 10.6219C9.59238 10.4574 9.60917 10.287 9.67334 10.132C9.73751 9.97713 9.84618 9.84471 9.9856 9.75155Z'
                                                    fill='#CECECE'
                                                />
                                            </svg>
                                        </div>
                                        Налоги:
                                    </h4>
                                    <h4 className='order__result-itog'>240 ₽</h4>
                                </div>
                                <div className='order__result-cost'>
                                    <h4 className='order__result-text'>
                                        <div className='order__result-icon'>
                                            <svg
                                                width='16'
                                                height='12'
                                                viewBox='0 0 16 12'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M15.2631 5.80019L13.6231 1.97349C13.5812 1.87468 13.5112 1.79037 13.4218 1.73107C13.3323 1.67177 13.2274 1.6401 13.1201 1.64002H11.4801V0.546672C11.4801 0.401686 11.4225 0.262638 11.32 0.160117C11.2175 0.0575958 11.0784 0 10.9334 0H0.546672C0.401686 0 0.262637 0.0575958 0.160117 0.160117C0.0575956 0.262638 0 0.401686 0 0.546672V9.8401C0 9.98508 0.0575956 10.1241 0.160117 10.2267C0.262637 10.3292 0.401686 10.3868 0.546672 10.3868H1.71655C1.84244 10.85 2.11726 11.2589 2.49862 11.5505C2.87997 11.842 3.34667 12 3.82671 12C4.30674 12 4.77344 11.842 5.15479 11.5505C5.53615 11.2589 5.81097 10.85 5.93686 10.3868H9.36996C9.49585 10.85 9.77067 11.2589 10.152 11.5505C10.5334 11.842 11.0001 12 11.4801 12C11.9601 12 12.4268 11.842 12.8082 11.5505C13.1896 11.2589 13.4644 10.85 13.5903 10.3868H14.7601C14.9051 10.3868 15.0442 10.3292 15.1467 10.2267C15.2492 10.1241 15.3068 9.98508 15.3068 9.8401V6.01339C15.3067 5.94011 15.2918 5.86761 15.2631 5.80019ZM11.4801 2.73336H12.7593L13.9292 5.46672H11.4801V2.73336ZM3.82671 10.9334C3.61046 10.9334 3.39908 10.8693 3.21928 10.7492C3.03948 10.629 2.89934 10.4583 2.81659 10.2585C2.73383 10.0587 2.71218 9.83889 2.75437 9.6268C2.79656 9.41471 2.90069 9.21989 3.05359 9.06699C3.2065 8.91408 3.40132 8.80995 3.6134 8.76776C3.82549 8.72558 4.04533 8.74723 4.24511 8.82998C4.44489 8.91273 4.61565 9.05287 4.73579 9.23267C4.85593 9.41247 4.92005 9.62385 4.92005 9.8401C4.92005 10.1301 4.80486 10.4082 4.59982 10.6132C4.39477 10.8183 4.11668 10.9334 3.82671 10.9334ZM9.36996 9.29343H5.93686C5.81097 8.83019 5.53615 8.42126 5.15479 8.12971C4.77344 7.83816 4.30674 7.6802 3.82671 7.6802C3.34667 7.6802 2.87997 7.83816 2.49862 8.12971C2.11726 8.42126 1.84244 8.83019 1.71655 9.29343H1.09334V1.09334H10.3868V7.95955C10.1378 8.10402 9.91988 8.29622 9.74539 8.52512C9.5709 8.75402 9.44332 9.01511 9.36996 9.29343ZM11.4801 10.9334C11.2639 10.9334 11.0525 10.8693 10.8727 10.7492C10.6929 10.629 10.5527 10.4583 10.47 10.2585C10.3872 10.0587 10.3656 9.83889 10.4078 9.6268C10.45 9.41471 10.5541 9.21989 10.707 9.06699C10.8599 8.91408 11.0547 8.80995 11.2668 8.76776C11.4789 8.72558 11.6987 8.74723 11.8985 8.82998C12.0983 8.91273 12.2691 9.05287 12.3892 9.23267C12.5093 9.41247 12.5735 9.62385 12.5735 9.8401C12.5735 10.1301 12.4583 10.4082 12.2532 10.6132C12.0482 10.8183 11.7701 10.9334 11.4801 10.9334ZM14.2135 9.29343H13.5903C13.4694 8.82521 13.1967 8.41028 12.8149 8.11354C12.4331 7.81679 11.9637 7.65498 11.4801 7.65341V6.56007H14.2135V9.29343Z'
                                                    fill='#B9B9B9'
                                                />
                                            </svg>
                                        </div>
                                        Доставка:
                                    </h4>
                                    <h4 className='order__result-itog'>120 ₽</h4>
                                </div>
                            </div>
                            <div className='order__promo'>
                                <h3 className='order__promo-text'>У меня есть промокод</h3>
                                <input
                                    className='order__promo-input'
                                    placeholder='promokod'
                                    type='text'
                                />
                            </div>
                            <button className='order__promo-btn'>Перейти к оплате</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PageOrder;
