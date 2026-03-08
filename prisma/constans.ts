export const categories = [
    {
        title: 'Все',
    },
    {
        title: 'Пиццы',
    },
    {
        title: 'Закуски',
    },
    {
        title: 'Кофе',
    },
    {
        title: 'Напитки',
    },
    {
        title: 'Десерты',
    },
];

export const filters = [
    {
        title: 'Можно собирать',
    },
    {
        title: 'Новинки',
    },
];

export const sorting = [
    {
        title: 'Рейтинг',
    },
    {
        title: 'Цене',
    },
    {
        title: 'Алфавиту',
    },
];

export const product = [
    //Пиццы
    {
        title: 'Пицца с хреном ',
        description:
            'Возможно, первая в истории пицца с пикантным сливочным хреном, свиной шейкой, красным луком.',
        image: '/allProducts/pizza/pizza1.avif',
        rating: 1,
        categoryId: 1,
        price: 429,
        quantity: 1,

        sizeOptions: {
            connect: [{ id: 1 }, { id: 3 }],
        },

        typeOptions: {
            connect: [{ id: 1 }],
        },

        ingredients: {
            connect: [{ id: 1 }, { id: 2 }, { id: 5 }],
        },
    },
    {
        title: 'Говядина с хреном',
        description: 'Пряная говядина, соус сливочный хрен, сладкий перец, красный лук, моцарелла.',
        image: '/allProducts/pizza/pizza2.avif',
        rating: 1,
        categoryId: 1,
        price: 339,
        quantity: 1,

        sizeOptions: {
            connect: [{ id: 1 }, { id: 3 }],
        },

        typeOptions: {
            connect: [{ id: 1 }],
        },

        ingredients: {
            connect: [{ id: 1 }, { id: 2 }, { id: 5 }],
        },
    },
    {
        title: 'Мясная',
        description: 'Перезагрузили рецепт: теперь пять видов мяса и новый фирменный соус.',
        image: '/allProducts/pizza/pizza3.avif',
        rating: 1,
        categoryId: 1,
        price: 449,
        quantity: 1,

        sizeOptions: {
            connect: [{ id: 1 }, { id: 3 }],
        },

        typeOptions: {
            connect: [{ id: 1 }],
        },

        ingredients: {
            connect: [{ id: 1 }, { id: 2 }, { id: 5 }],
        },
    },
    {
        title: 'Додо',
        description: 'Секрет обновленной пиццы — в новом соусе.',
        image: '/allProducts/pizza/pizza4.avif',
        rating: 1,
        categoryId: 1,
        price: 489,
        quantity: 1,

        sizeOptions: {
            connect: [{ id: 1 }, { id: 3 }],
        },

        typeOptions: {
            connect: [{ id: 1 }],
        },

        ingredients: {
            connect: [{ id: 1 }, { id: 2 }, { id: 5 }],
        },
    },
    {
        title: 'Пепперони фреш',
        description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты.',
        image: '/allProducts/pizza/pizza5.avif',
        rating: 1,
        categoryId: 1,
        price: 259,
        quantity: 1,

        sizeOptions: {
            connect: [{ id: 1 }, { id: 3 }],
        },

        typeOptions: {
            connect: [{ id: 1 }],
        },

        ingredients: {
            connect: [{ id: 1 }, { id: 2 }, { id: 5 }],
        },
    },
    {
        title: 'Чесночный цыпленок',
        description: 'Цыпленок, чеснок, томаты, моцарелла, фирменный соус альфредо.',
        image: '/allProducts/pizza/pizza6.avif',
        rating: 1,
        categoryId: 1,
        price: 259,
        quantity: 1,

        sizeOptions: {
            connect: [{ id: 1 }, { id: 3 }],
        },

        typeOptions: {
            connect: [{ id: 1 }],
        },

        ingredients: {
            connect: [{ id: 1 }, { id: 2 }, { id: 5 }],
        },
    },
    {
        title: 'Пикантные колбаски',
        description: 'Классические колбаски, лук красный, моцарелла, фирменный томатный соус.',
        image: '/allProducts/pizza/pizza7.avif',
        rating: 1,
        categoryId: 1,
        price: 259,
        quantity: 1,

        sizeOptions: {
            connect: [{ id: 1 }, { id: 3 }],
        },

        typeOptions: {
            connect: [{ id: 1 }],
        },

        ingredients: {
            connect: [{ id: 1 }, { id: 2 }, { id: 5 }],
        },
    },
    {
        title: 'Терияки',
        description: 'Цыпленок, красный лук, сладкий перец, соус терияки, сыр моцарелла.',
        image: '/allProducts/pizza/pizza8.avif',
        rating: 1,
        categoryId: 1,
        price: 339,
        quantity: 1,

        sizeOptions: {
            connect: [{ id: 1 }, { id: 3 }],
        },

        typeOptions: {
            connect: [{ id: 1 }],
        },

        ingredients: {
            connect: [{ id: 1 }, { id: 2 }, { id: 5 }],
        },
    },
    {
        title: 'Четыре сыра ',
        description: 'Сыр блю чиз, сыры чеддер и пармезан, моцарелла, фирменный соус альфредо.',
        image: '/allProducts/pizza/pizza9.avif',
        rating: 1,
        categoryId: 1,
        price: 359,
        quantity: 1,

        sizeOptions: {
            connect: [{ id: 1 }, { id: 3 }],
        },

        typeOptions: {
            connect: [{ id: 1 }],
        },

        ingredients: {
            connect: [{ id: 1 }, { id: 2 }, { id: 5 }],
        },
    },
    {
        title: 'Сырная ',
        description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо.',
        image: '/allProducts/pizza/pizza10.avif',
        rating: 1,
        categoryId: 1,
        price: 259,
        quantity: 1,

        sizeOptions: {
            connect: [{ id: 1 }, { id: 3 }],
        },

        typeOptions: {
            connect: [{ id: 1 }],
        },

        ingredients: {
            connect: [{ id: 1 }, { id: 2 }, { id: 5 }],
        },
    },
    {
        title: 'Мясной микс ',
        description: 'Добавили сочную свиную шейку к пряной говядине, пикантной пепперони.',
        image: '/allProducts/pizza/pizza11.avif',
        rating: 1,
        categoryId: 1,
        price: 549,
        quantity: 1,

        sizeOptions: {
            connect: [{ id: 1 }, { id: 3 }],
        },

        typeOptions: {
            connect: [{ id: 1 }],
        },

        ingredients: {
            connect: [{ id: 1 }, { id: 2 }, { id: 5 }],
        },
    },
    {
        title: 'Ветчина и сыр',
        description: 'Ветчина, моцарелла, фирменный соус альфредо.',
        image: '/allProducts/pizza/pizza12.avif',
        rating: 1,
        categoryId: 1,
        price: 299,
        quantity: 1,

        sizeOptions: {
            connect: [{ id: 1 }, { id: 3 }],
        },

        typeOptions: {
            connect: [{ id: 1 }],
        },

        ingredients: {
            connect: [{ id: 1 }, { id: 2 }, { id: 5 }],
        },
    },

    //Koфе
    {
        title: 'Латте Темный лес',
        description: 'Вишня, шоколад и мягкий кофе — вкус, как у знаменитого пирожного.',
        image: '/allProducts/koffes/koffe1.avif',
        rating: 1,
        categoryId: 3,
        price: 179,
        quantity: 1,
    },
    {
        title: 'Айс Американо',
        description: 'Лаконичная бодрость со льдом.',
        image: '/allProducts/koffes/koffe2.avif',
        rating: 1,
        categoryId: 3,
        price: 129,
        quantity: 1,
    },
    {
        title: 'Айс Кофе',
        description: 'Все освежающее — просто: эспрессо с молоком и несколько кубиков льда.',
        image: '/allProducts/koffes/koffe3.avif',
        rating: 1,
        categoryId: 3,
        price: 149,
        quantity: 1,
    },
    {
        title: 'Айс Кофе с карамелью',
        description:
            'Новинка со льдом — холодный напиток с эспрессо, молоком и карамельным сиропом.',
        image: '/allProducts/koffes/koffe4.avif',
        rating: 1,
        categoryId: 3,
        price: 179,
        quantity: 1,
    },
    {
        title: 'Айс Кофе Кокос',
        description:
            'Холодный напиток на основе эспрессо с увеличенной порцией молока и кокосовым сиропом.',
        image: '/allProducts/koffes/koffe5.avif',
        rating: 1,
        categoryId: 3,
        price: 179,
        quantity: 1,
    },
    {
        title: 'Холодный бамбл кофе',
        description:
            'Необычное сочетание слоев насыщенного эспрессо, цитрусового вкуса апельсинового сока.',
        image: '/allProducts/koffes/koffe6.avif',
        rating: 1,
        categoryId: 3,
        price: 179,
        quantity: 1,
    },

    //Напитки
    {
        title: 'Горячий сорбет манго-чили',
        description: 'Замороженный напиток на палочке со спелым манго, пряным перчиком.',
        image: '/allProducts/napitkis/napitki1.avif',
        rating: 1,
        categoryId: 4,
        price: 189,
        quantity: 1,
    },
    {
        title: 'Горячий сорбет апельсин и облепиха',
        description: 'Замороженный напиток на палочке с апельсином и облепихой.',
        image: '/allProducts/napitkis/napitki2.avif',
        rating: 1,
        categoryId: 4,
        price: 189,
        quantity: 1,
    },
    {
        title: 'Лимонад Домашний',
        description: 'Прохладный лимонад, как будто только что приготовленный дома.',
        image: '/allProducts/napitkis/napitki3.avif',
        rating: 1,
        categoryId: 4,
        price: 189,
        quantity: 1,
    },
    {
        title: 'Лимонад Клубничный Мохито',
        description: 'Клубничная вариация безалкогольного коктейля.',
        image: '/allProducts/napitkis/napitki4.avif',
        rating: 1,
        categoryId: 4,
        price: 189,
        quantity: 1,
    },
    {
        title: 'Санрайз апельсин-клубника',
        description: 'Это получается апельсиновый рассвет в вашем стакане.',
        image: '/allProducts/napitkis/napitki5.avif',
        rating: 1,
        categoryId: 4,
        price: 209,
        quantity: 1,
    },
    {
        title: 'Морс Черная смородина',
        description: 'Фирменный ягодный морс из натуральной душистой черной смородины.',
        image: '/allProducts/napitkis/napitki6.avif',
        rating: 1,
        categoryId: 4,
        price: 159,
        quantity: 1,
    },

    //Закуски
    {
        title: 'Ланчбокс с хреном',
        description: 'Это блюдо с ярким характером: дерзкий сливочный соус с хреном.',
        image: '/allProducts/zakyckis/zakycki1.avif',
        rating: 1,
        categoryId: 2,
        price: 319,
        quantity: 1,
    },
    {
        title: 'Паста Мясная',
        description: 'Встречайте новую Мясную пасту из печи: в ней соединились пряная говядина.',
        image: '/allProducts/zakyckis/zakycki2.avif',
        rating: 1,
        categoryId: 2,
        price: 399,
        quantity: 1,
    },
    {
        title: 'Холодный чикен ролл',
        description: 'Холодная закуска для легкого перекуса: ролл с цыпленком, свежим салатом.',
        image: '/allProducts/zakyckis/zakycki3.avif',
        rating: 1,
        categoryId: 2,
        price: 199,
        quantity: 1,
    },
    {
        title: 'Додстер',
        description: 'Легендарная горячая закуска с цыпленком, томатами, моцареллой.',
        image: '/allProducts/zakyckis/zakycki4.avif',
        rating: 1,
        categoryId: 2,
        price: 239,
        quantity: 1,
    },
    {
        title: 'Супермясной Додстер ',
        description: 'Горячая закуска, в которой много мяса — цыпленок, чоризо и пряная говядина.',
        image: '/allProducts/zakyckis/zakycki5.avif',
        rating: 1,
        categoryId: 2,
        price: 259,
        quantity: 1,
    },
    {
        title: 'Додстер с ветчиной ',
        description: 'Горячий завтрак с ветчиной, томатами, моцареллой, соусом ранч.',
        image: '/allProducts/zakyckis/zakycki6.avif',
        rating: 1,
        categoryId: 2,
        price: 199,
        quantity: 1,
    },

    //Десерты
    {
        title: 'Яблочный крамбл',
        description: 'Горячий пирог из печи с рассыпчатой крошкой и кислинкой зеленого яблока.',
        image: '/allProducts/decerts/decert1.avif',
        rating: 1,
        categoryId: 5,
        price: 179,
        quantity: 1,
    },
    {
        title: 'Додобоны',
        description: 'Когда сливочное встречается с пряным, получаются горячие булочки с корицей.',
        image: '/allProducts/decerts/decert2.avif',
        rating: 1,
        categoryId: 5,
        price: 249,
        quantity: 12,
    },
    {
        title: 'Бруслетики',
        description: 'Это задорные сладкие рулетики, в которых закрутился микс.',
        image: '/allProducts/decerts/decert3.avif',
        rating: 1,
        categoryId: 5,
        price: 279,
        quantity: 12,
    },
    {
        title: 'Пирожное Муравьешки',
        description: 'Сметанное печенье, вареная сгущенка и мед — просто и вкусно, как в детстве.',
        image: '/allProducts/decerts/decert4.avif',
        rating: 1,
        categoryId: 5,
        price: 149,
        quantity: 3,
    },
    {
        title: 'Чизкейк Дубайский',
        description: 'Мягкий чизкейк с насыщенным фисташковым вкусом и глазурью.',
        image: '/allProducts/decerts/decert5.avif',
        rating: 1,
        categoryId: 5,
        price: 219,
        quantity: 1,
    },
    {
        title: 'Слоенка с брусникой',
        description: 'Палочка из слоеного теста в удобном формате на одного.',
        image: '/allProducts/decerts/decert6.avif',
        rating: 1,
        categoryId: 5,
        price: 219,
        quantity: 1,
    },
    {
        title: 'Фондан',
        description: 'Французский шоколадный десерт с хрустящей корочкой и жидкой начинкой.',
        image: '/allProducts/decerts/decert7.avif',
        rating: 1,
        categoryId: 5,
        price: 389,
        quantity: 1,
    },
    {
        title: 'Тирамису',
        description: 'Многослойный десерт в лучших итальянских традициях.',
        image: '/allProducts/decerts/decert8.avif',
        rating: 1,
        categoryId: 5,
        price: 169,
        quantity: 1,
    },
    {
        title: 'Чизкейк карамельный с арахисом',
        description:
            'Сливочный десерт с очень карамельной начинкой, шоколадным печеньем и орехами.',
        image: '/allProducts/decerts/decert9.avif',
        rating: 1,
        categoryId: 5,
        price: 169,
        quantity: 1,
    },
];

export const sizeOption = [
    { size: 25, price: 25 },
    { size: 30, price: 50 },
    { size: 35, price: 75 },
];

export const typeOption = [
    { type: 'Традиционное', price: 100 },
    { type: 'Тонкое', price: 50 },
];

export const ingredients = [
    {
        image: '/allProducts/ingredients/ingredient1.png',
        title: 'Сырный бортик',
        price: 219,
    },
    {
        image: '/allProducts/ingredients/ingredient2.png',
        title: 'Прямая говядина',
        price: 139,
    },
    {
        image: '/allProducts/ingredients/ingredient3.png',
        title: 'Моцарелла',
        price: 115,
    },
    {
        image: '/allProducts/ingredients/ingredient4.png',
        title: 'Сыр чеддер и пармезан',
        price: 89,
    },
    {
        image: '/allProducts/ingredients/ingredient5.png',
        title: 'Сыр блю чиз',
        price: 169,
    },
    {
        image: '/allProducts/ingredients/ingredient6.png',
        title: 'Нежный цыпленок',
        price: 99,
    },
    {
        image: '/allProducts/ingredients/ingredient7.png',
        title: 'Шампиньоны',
        price: 79,
    },
    {
        image: '/allProducts/ingredients/ingredient8.png',
        title: 'Cвиная шейка',
        price: 79,
    },
    {
        image: '/allProducts/ingredients/ingredient9.png',
        title: 'Криветки',
        price: 79,
    },
    {
        image: '/allProducts/ingredients/ingredient10.png',
        title: 'Баварские колбаски',
        price: 79,
    },
];
