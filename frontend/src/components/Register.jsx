import React, { useState } from 'react'
import { useContextProvider } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Register = () => {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const { register } = useContextProvider()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const user = await register(name, email, password)
            if (!user.success) {
                setError(user.message);
                console.log('user already exist');
                toast.error('User already exist')
            } else {
                setError('');
                navigate('/signin'); 
                toast.success('User created. Please login')
            }
        } catch (error) {
            setError('An unexpected error occurred. Please try again.');
        }
    }
    return (

        <form onSubmit={handleSubmit} class="bg-white text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">Signup</h2>
            <input id="name" class="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="text" placeholder="Enter your name" required value={name} onChange={e => setName(e.target.value)} />
            <input id="email" class="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required value={email} onChange={e => setEmail(e.target.value)} />
            <input id="password" class="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" required value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit" class="w-full mb-3 bg-indigo-500 hover:bg-indigo-600/90 active:scale-95 transition py-2.5 rounded-full text-white">Log in</button>

        </form>

    )
}

export default Register
