import express from 'express'
import * as uuid from 'uuid'

export const catsRouter = express.Router();

catsRouter.get("/", (_, res) => {
    res.send({ data: cats })
})

catsRouter.get("/:id", (req, res) => {
    const catId = req.params.id
    const foundCat = cats.find(cat => cat.id === catId)

    //TODO: ¿Y si el gato no es encontrado?

    res.send({ data: foundCat })
})

catsRouter.post("/", (req, res) => {
    const catPayload = req.body

    // throw new Error("Elephats not allowed! 🐘❌")
    //TODO: ¿Qué pasa si el payload (los datos a agregar) no fue enviado?

    const id = uuid.v4()

    cats.push({ id, ...catPayload })

    res.status(201).send({ data: { id }, message: "New 😾 created!" })
})

catsRouter.patch("/:id", (req, res) => {
    const catId = req.params.id
    const catPayload = req.body

    const index = cats.findIndex(cat => cat.id === catId)

    //TODO: ¿Qué pasa si el index es -1 (El registro no existe)?

    //TODO: ¿Qué pasa si el payload (la data a cambiar) no fue enviado?


    cats[index] = { ...cats[index], ...catPayload }

    res.send({ data: cats[index], message: "😸 successfully modified!" })
})

catsRouter.delete("/:id", (req, res) => {
    const catId = req.params.id
    const index = cats.findIndex(cat => cat.id === catId)

    //TODO: ¿Qué pasa si el index es -1 (El registro no existe)?

    cats.splice(index, 1)

    res.send({ message: "😿 no longer with us" })
})

const cats = [
    {
        id: "e5479f7b-93b6-4177-a987-f493adcb5e7e",
        name: "Yellow",
        email: "yellow@cat.com",
        age: 2
    }
]