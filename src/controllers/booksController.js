const booksModel = require("../models/booksModel");

module.exports = {
  //GET /api/books
  index: (req, res) => {
    const books = booksModel.getAllBooks();
    res.json(books);
  },
  //GET /api/books/:id
  show: (req, res) => {
    const { id } = req.params;

    const book = booksModel.getBookById(id);

    if (!book)
      return res.status(404).json({ message: "Livro não encontrado!" });

    res.json(book);
  },
  //POST /api/books
  save: (req, res) => {
    const { title, author, quantityAvailable } = req.body;

    if (!title || !author || !quantityAvailable)
      return res.status(400).json({ message: "Campos Inválidos" });

    const newBook = booksModel.createBook(title, author, quantityAvailable);
    res.status(201).json(newBook);
  },
  //PUT /api/books/:id
  update: (req, res) => {
    const { id } = req.params;
    const { title, author, quantityAvailable } = req.body
    const fieldsToUpdate = {}

    if(title) fieldsToUpdate.title = title
    if(author) fieldsToUpdate.author = author
    if(quantityAvailable) fieldsToUpdate.quantityAvailable = quantityAvailable

    const updatedBook = booksModel.updateBook(id, fieldsToUpdate)
    
    return res.status(200).json(updatedBook)
},

  //DELETE /api/books/:id
  delete: (req, res) => {
    const { id } = req.params
    const deletedBook = booksModel.deleteBook(Number(id))
    
    res.status(200).json(deletedBook)
  }
};
