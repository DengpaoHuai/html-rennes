let books = [
  {
    id: 1,
    title: "Harry Potter",
    auteur: "J.K. Rowling",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    title: "Le Seigneur des Anneaux",
    auteur: "J.R.R. Tolkien",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    title: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
  },
];

function addBook(title, auteur, image) {
  let id = books.length + 1;
  books.push({ id: id, title: title, auteur: auteur, image: image });
  return books;
}
