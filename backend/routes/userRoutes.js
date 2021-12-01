import express from 'express'
import datas from '../datas/datas.js'

const router = express.Router()

//api route to the path of /api/users
router.get('/', (req, res) => {
    res.send(datas)
})

export default router