import { Router } from 'express'

const subscriptionRouter = Router()

subscriptionRouter.get("", (req, res) => {
    res.send({
        title: "GET all subscription"
    })
})

subscriptionRouter.get("/:id", (req, res) => {
    res.send({
        title: "GET subscription details"
    })
})

subscriptionRouter.post("", (req, res) => {
    res.send({
        title: "CREATE subscription"
    })
})

subscriptionRouter.put("", (req, res) => {
    res.send({
        title: "UPDATE subscription"
    })
})

subscriptionRouter.delete("/:id", (req, res) => {
    res.send({
        title: "DELETE subscription"
    })
})

subscriptionRouter.get("/user/:id", (req, res) => {
    res.send({
        title: "GET all user subscription"
    })
})

subscriptionRouter.put("/:id/cancel", (req, res) => {
    res.send({
        title: "CANCEL subscription"
    })
})

subscriptionRouter.get("", (req, res) => {
    res.send({
        title: "GET updated subscription"
    })
})

export default subscriptionRouter