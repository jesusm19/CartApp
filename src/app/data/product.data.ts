import { Product } from "../models/products";

export const products: Product[] = [
    // Sample products form a electronic store
    {
        id: 1,
        name: 'Samsung Galaxy S21',
        description: 'Samsung Galaxy S21 is a flagship smartphone with a sleek design and powerful features. It boasts a stunning display, advanced camera system, and a long-lasting battery. With its high-performance processor and ample storage, the Galaxy S21 delivers a seamless user experience for both work and play.',
        price: 10.99
    },
    {
        id: 2,
        name: 'Apple iPhone 12',
        description: 'Apple iPhone 12 is a premium smartphone with a stunning Super Retina XDR display, A14 Bionic chip, and advanced camera system. It offers exceptional performance and a great user experience for all your needs.',
        price: 19.99
    },
    {
        id: 3,
        name: 'Google Pixel 6',
        description: 'Google Pixel 6 is a premium smartphone with a stunning OLED display, powerful Snapdragon processor, and advanced camera system. It offers exceptional performance and a great user experience for all your needs.',
        price: 5.99
    },
    {
        id: 4,
        name: 'Sony WH-1000XM4',
        description: 'Sony WH-1000XM4 is a premium noise-canceling wireless headphones with exceptional sound quality and long battery life. It offers a comfortable fit and seamless connectivity for an immersive audio experience.',
        price: 29.99
    },
    {
        id: 5,
        name: 'Bose QuietComfort 35 II',
        description: 'Bose QuietComfort 35 II is a premium noise-canceling wireless headphones with exceptional sound quality and long battery life. It offers a comfortable fit and seamless connectivity for an immersive audio experience.',
        price: 24.99
    }
];