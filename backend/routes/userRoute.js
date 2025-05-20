import express from 'express'
import { login, logout, me, register } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/me', me)
userRouter.post('/logout', logout)

export default userRouter;