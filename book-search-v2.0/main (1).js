// Array
// map 
// filter

// Array / String
// includes

let books = [
    {
        id: 1,
        name: 'Гарри Поттер',
        author: 'Author',
        price: '100',
    },
    {
        id: 2,
        name: 'Биология',
        author: 'Author',
        price: '50',
    },
    {
        id: 3,
        name: 'Геометрия',
        author: 'Author',
        price: '80',
    },
    {
        id: 4,
        name: 'Ман ва пул',
        author: 'Author',
        price: '120',
    },
    {
        id: 5,
        name: 'Думай и богатей',
        author: 'Author',
        price: '100',
    },
    {
        id: 6,
        name: 'Принц Персии',
        author: 'Author',
        price: '108',
    },
    {
        id: 7,
        name: 'Бедный папа - богатый папа',
        author: 'Author',
        price: '100',
    },
    {
        id: 8,
        name: 'Самодисциплина',
        author: 'Author',
        price: '120',
    },
    {
        id: 9,
        name: '7 навыков высокоэффективный людей',
        author: 'Author',
        price: '700',
    },
    {
        id: 10,
        name: "You don't know JS",
        author: 'Author',
        price: '100',
    },
    {
        id: 11,
        name: 'CSS3',
        author: 'Author',
        price: '140',
    },
    {
        id: 12,
        name: 'React-быстрый фреймворк',
        author: 'Author',
        price: '1000',
    },
    {
        id: 13,
        name: 'Мёртвые души',
        author: 'Author',
        price: '300',
    },
    {
        id: 14,
        name: 'Dead inside',
        author: 'Author',
        price: '200',
    },
    {
        id: 15,
        name: 'Мартин Идэн',
        author: 'Author',
        price: '150',
    },
    {
        id: 16,
        name: 'Доктор Стрейндж',
        author: 'Author',
        price: '100',
    },
]

let numbers = [4,6,8,9,5,10];

//map
// numbers = numbers.map((item, idx, arr) => {
//     return item * 2;
// })

// filter
// numbers = numbers.filter((item, idx, arr) => {
//     return item % 2 == 0;
// })


let strings = ['Hello', 'Hi', 'Hey', 'Ooops']

// includes
// strings = strings.includes('Hi')

// let count = 0;

// strings.map((item) => {
//     if (item.includes('H')) {
//         count++
//     }
//     return item;
// })

// console.log(count)

books = books.map((item) => {
    let newItem = item;
    newItem.price = Number(newItem.price) + 20;
    return newItem;
})

let filterBooks = books.filter((item) => {
    return item.price > 100 && item.price < 500;
})

let text = 'Гарри'

let findBook = books.filter((item) => {
    return item.name.includes('а');
})



// let btn = document.createElement('button');
// btn.innerHTML = 'Send';














