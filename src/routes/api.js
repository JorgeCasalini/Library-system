const express = require('express')
const booksController = require('../controllers/booksController')
const loansController = require('../controllers/loansController')
const { ensureAuth } = require('../middlewares/authMiddleware')

const apiRouter = express.Router()

apiRouter.get('/books', booksController.index)
apiRouter.get('/book/:id', booksController.show)

apiRouter.post('/books', booksController.save)
apiRouter.put('/books/:id', booksController.update)
apiRouter.delete('/books/:id', booksController.delete)

apiRouter.get('/loans', loansController.index)
apiRouter.get('/loans/:id', loansController.show)
apiRouter.post('/loans/', ensureAuth, loansController.save)
apiRouter.post('/loans/:id/return', loansController.return)


module.exports = apiRouter