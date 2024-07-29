import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'

const Signin = () => {
    const navigate = useNavigate()

    const [userDeta, setUserDeta] = useState({
        email: "",
        password: ''
    })

    const hendleDeta = (e) => {

        const { name, value } = e.target

        setUserDeta((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const hendaleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.post('http://localhost:5000/login', userDeta)


        if (res.data.status === true) {
            toast.success(res.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            localStorage.setItem("token", res.data.token)

            navigate('/userpage')
        } else {
            toast.error(res.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }


    }
    return (
        <>
            <div className='w-100'>
                <main className="form-signin w-100 d-flex justify-content-center mx-auto align-items-center" style={{ height: "85vh" }}>
                    <form className='w-50' onSubmit={hendaleSubmit}>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating mt-3">
                            <input type="email" name='email' className="form-control" id="floatingInput" placeholder="name@example.com" onChange={hendleDeta} />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" onChange={hendleDeta} />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className='mt-5 d-flex align-items-center justify-content-between'>
                            <button className="btn btn-primary w-25 py-2" type="submit">Sign in</button>
                            <span>Don't have an Accunt?<Link className="" to="/signup">Sign up</Link></span>
                        </div>
                    </form>
                </main>
            </div>

        </>
    )
}

export default Signin