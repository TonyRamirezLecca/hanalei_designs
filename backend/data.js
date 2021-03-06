import bcrypt from "bcryptjs";

const data = {
    users: [
        {
            name: "Tony",
            email: "tonyramirezlecca@gmail.com",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: true,
        },
        {
            name: "Peruvian",
            email: "thatoneperuvian@gmail.com",
            password: bcrypt.hashSync("1234", 10),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: "Nike Slim Shirt",
            category: "Shirts",
            image: "https://amazona.webacademy.pro/images/p1.jpg",
            price: 120,
            countInStock: 10,
            brand: "Nike",
            rating: 4.5,
            numReviews: 10,
            description: "Very high quality shirt",
        },
        {
            name: "Slim Pants",
            category: "Pants",
            image: "https://amazona.webacademy.pro/images/p2.jpg",
            price: 150,
            countInStock: 9,
            brand: "Adidas",
            rating: 3,
            numReviews: 8,
            description: "Very high quality pants",
        },
        {
            name: "Nice Belt",
            category: "Accessories",
            image: "https://amazona.webacademy.pro/images/p3.jpg",
            price: 120,
            countInStock: 25,
            brand: "Nike",
            rating: 4.5,
            numReviews: 10,
            description: "Very high quality shirt",
        },
        {
            name: "Watch",
            category: "Accessories",
            image: "https://amazona.webacademy.pro/images/p4.jpg",
            countInStock: 0,
            price: 120,
            brand: "Nike",
            rating: 4.5,
            numReviews: 10,
            description: "Very high quality shirt",
        },
        {
            name: "Stretchy Pants",
            category: "Pants",
            image: "https://amazona.webacademy.pro/images/p5.jpg",
            price: 120,
            countInStock: 44,
            brand: "Nike",
            rating: 4.5,
            numReviews: 10,
            description: "Very high quality shirt",
        },
        {
            name: "Straight Pants",
            category: "Pants",
            image: "https://amazona.webacademy.pro/images/p6.jpg",
            price: 120,
            countInStock: 10,
            brand: "Nike",
            rating: 4.5,
            numReviews: 10,
            description: "Very high quality shirt",
        },
    ],
};

export default data;
