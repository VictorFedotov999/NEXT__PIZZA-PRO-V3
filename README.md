
# 🍕 NEXT__PIZZA-PRO

> 🚀 Современный full-stack интернет-магазин доставки еды  
> ⚡ Next.js + Prisma + PostgreSQL  

---

## 💥 О проекте
 **NEXT__PIZZA-PRO** — это полноценный сервис доставки еды с современным интерфейсом и продуманной архитектурой.


## 🧩 Функционал
- Регистрация и авторизация  
- Просмотр товаров  
- Поиск  (debounce) 
- Добавление в корзину 
- Настройка товара  
- Оформление заказа  
- История заказов
- Чистка корзины
- Удаление товара
- увеличение/уменьшение кол-во товара

---


## 🛠 Полный стек технологий

### 🎨 Frontend:

- ⚛️ **Next.js 16** (App Router) – React-фреймворк с серверным рендерингом
- ⚛️ **React 19** – пользовательские интерфейсы
- 🟦 **TypeScript** - строгая типизация
- 🎨 **SCSS** – стилизация
- 🧠 **Zustand** – управление состоянием корзины клиента
- 🧾 **React Hook Form** – работа с формами
- 🔔 **React Hot Toast** – уведомления


### ⚙️ Backend:
- 🔗 **Next.js API Routes** - backend внутри приложения
- 🗄 **Prisma ORM** - работа с базой данных
- 🐘 **PostgreSQL** -  база данных
- 🔐 **bcrypt** - хеширование паролей
- 🌐 **Axios** - HTTP-запросы

### 🔐 Авторизация:
- 🔑 **NextAuth (Credentials(email + password) + GitHub)**
---
## 📸 Схема БД:
![img](public/imgGit/img1.png)
## ~PostgreSQL
```
generator client {
    provider = "prisma-client-js"
}

datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
}

enum UserRole {
    ADMIN
    USER
}

enum OrderStatus {
    PENDING
    SUCCEEDED
    CANCELLED
}

model User {
    id Int @id @default(autoincrement())

    surname    String?
    name       String?
    patronymic String?

    email    String
    password String

    role UserRole

    UserBasket UserBasket?
    userOrders UserOrder[]

    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}

model UserBasket {
    id Int @id @default(autoincrement())

    userId Int  @unique
    user   User @relation(fields: [userId], references: [id])

    userBasketProducts UserBasketProduct[]

    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}

model UserBasketProduct {
    id Int @id @default(autoincrement())

    price Int?

    basketId Int
    basket   UserBasket @relation(fields: [basketId], references: [id])

    productId Int
    product   Product @relation(fields: [productId], references: [id])

    sizeOptionId Int?
    sizeOption   SizeOption? @relation(fields: [sizeOptionId], references: [id])

    typeOptionId Int?
    typeOption   TypeOption? @relation(fields: [typeOptionId], references: [id])

    ingredients Ingredient[]

    quantity Int @default(1)

    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}

model UserOrder {
    id Int @id @default(autoincrement())

    userId Int
    user   User @relation(fields: [userId], references: [id])

    surname    String?
    name       String?
    patronymic String?

    email   String
    phone   String
    address String
    comment String?

    status OrderStatus

    userOrderProduct UserOrderProduct[]

    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}

model UserOrderProduct {
    id Int @id @default(autoincrement())

    userOrderId Int
    userOrder   UserOrder @relation(fields: [userOrderId], references: [id])

    title       String
    image       String
    description String?
    rating      Int?
    price       Int

    quantity Int @default(1)

    sizeValue Int?
    sizePrice Int?

    typeValue String?
    typePrice Int?

    ingredients Json?

    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}

model Category {
    id Int @id @default(autoincrement())

    title String @unique

    products Product[]

    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}

model Product {
    id Int @id @default(autoincrement())

    title       String
    image       String
    description String?
    rating      Int?
    price       Int
    quantity    Int     @default(1)

    categoryId Int
    category   Category @relation(fields: [categoryId], references: [id])

    sizeOptions SizeOption[]
    typeOptions TypeOption[]
    ingredients Ingredient[]

    userBasketProducts UserBasketProduct[]

    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}

model Ingredient {
    id Int @id @default(autoincrement())

    image String
    title String
    price Int

    products Product[]

    userBasketProduct UserBasketProduct[]

    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}

model SizeOption {
    id Int @id @default(autoincrement())

    size  Int
    price Int?

    products           Product[]
    userBasketProducts UserBasketProduct[]

    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}

model TypeOption {
    id Int @id @default(autoincrement())

    type  String
    price Int?

    products           Product[]
    userBasketProducts UserBasketProduct[]

    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}

model Sorting {
    id Int @id @default(autoincrement())

    title String

    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}
```
## 🔐 Вход в аккаунт
![img](public/imgGit/img2.png)
## 📝 Регистрация
![img](public/imgGit/img3.png)
## 🏠 Главная
![img](public/imgGit/img4.png)
## 🛒 Корзина(пустая)
![img](public/imgGit/img5.png)
## 📦 Заказы(пусто)
![img](public/imgGit/img6.png)
## 📊 БД User(пустая)
![img](public/imgGit/img7.png)
## 📊 БД корзина ползователя(пустая)
![img](public/imgGit/img8.png)
## 🍕 Страница товара + добавление в корзину пользователя
![img](public/imgGit/img9.png)
![img](public/imgGit/img10.png)

![img](public/imgGit/img11.png)
## 📊  БД UserBasketProduct после добавления
![img](public/imgGit/img12.png)
## 📦 Оформление заказа
![img](public/imgGit/img19.png)
## 📌 Форма персональных данных + форма адреса
![img](public/imgGit/img13.png)
![img](public/imgGit/img14.png)
## 📜 Страница заказов пользователя после оформления
![img](public/imgGit/img15.png)
## 📊  БД UserOrder после оформления
![img](public/imgGit/img18.png)
## 🔍 Поиск товаров 
![img](public/imgGit/img16.png)
![img](public/imgGit/img17.png)

## 👨‍💻 Автор

V.Fedotov
