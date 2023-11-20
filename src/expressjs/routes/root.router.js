import express from 'express'

export const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
    res.status(200).send({ message: "Soy una aplicación genial 😎" })
})