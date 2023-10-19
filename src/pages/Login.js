import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";


const Login = () => {


    const [loginData, setLoginData] = useState({})
    const [login, setLogin] = useState(null)


    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setLoginData({
            ...loginData,
            [name]:value
        })
    }

    const onSubmit= async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5050/login', {
                headers: {
                    "Content-type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify(loginData)
            })
            const data = await response.json()

            if (data.token) {
                localStorage.setItem('utenteLoggato', JSON.stringify(data.token)) //salvo il mio token all'interno del localStorage per poterlo utilizzare
                navigate('/home')
            }
            setLogin(data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Navbar />
            <div className="p-3 my-20 flex justify-center align-items-center">
                <form onSubmit={onSubmit}
                className="flex flex-col gap-2 p-3 bg-blue-800 text-white rounded min-w-[400px]">
                    <h1>EFFETTUA LOGIN</h1>
                    <input className="p-2 bg-zinc-100 text-black rounded"
                        type="text"
                        name="email"
                        required
                        onChange={handleInputChange}
                    />

                    <input className="p-2 bg-zinc-100 text-black rounded"
                        type="password"
                        name="password"
                        required
                        onChange={handleInputChange}
                    />
                    <button className="bg-green-600 p-2 rounded"
                    type="submit">
                        LOGIN
                    </button>

                </form>
            </div>
        </>
    )

}

export default Login