import express from 'express'

export const catsRouter = express.Router();

catsRouter.get("/", (req, res) => {
    res.status(200).send({ message: "Soy una aplicación genial 😎" })
})

const cats = [
    {
        name: "Yellow Cat",
        email: "yellow@cat.com",
        age: 2
    }
]