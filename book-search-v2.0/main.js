const booksListData = document.querySelector("[data-books-list]");

let books = [
  {
    id: 1,
    name: "Гарри Поттер",
    author: "Author",
    price: "100",
  },
  {
    id: 2,
    name: "Биология",
    author: "Author",
    price: "50",
  },
  {
    id: 3,
    name: "Геометрия",
    author: "Author",
    price: "80",
  },
  {
    id: 4,
    name: "Ман ва пул",
    author: "Author",
    price: "120",
  },
  {
    id: 5,
    name: "Думай и богатей",
    author: "Author",
    price: "100",
  },
  {
    id: 6,
    name: "Принц Персии",
    author: "Author",
    price: "108",
  },
  {
    id: 7,
    name: "Бедный папа - богатый папа",
    author: "Author",
    price: "100",
  },
  {
    id: 8,
    name: "Самодисциплина",
    author: "Author",
    price: "120",
  },
  {
    id: 9,
    name: "7 навыков высокоэффективный людей",
    author: "Author",
    price: "700",
  },
  {
    id: 10,
    name: "You don't know JS",
    author: "Author",
    price: "100",
  },
  {
    id: 11,
    name: "CSS3",
    author: "Author",
    price: "140",
  },
  {
    id: 12,
    name: "React-быстрый фреймворк",
    author: "Author",
    price: "1000",
  },
  {
    id: 13,
    name: "Мёртвые души",
    author: "Author",
    price: "300",
  },
  {
    id: 14,
    name: "Dead inside",
    author: "Author",
    price: "200",
  },
  {
    id: 15,
    name: "Мартин Идэн",
    author: "Author",
    price: "150",
  },
  {
    id: 16,
    name: "Доктор Стрейндж",
    author: "Author",
    price: "100",
  },
];
let data = ['']
function () {
    const card = booksListData.content.cloneNode(true)
    console.log(card) 
}