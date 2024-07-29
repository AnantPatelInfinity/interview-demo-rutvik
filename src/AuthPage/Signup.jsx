import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'

const Signup = () => {
    const navigate = useNavigate()

    const [userDeta, setUserDeta] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNo: '',
        gender: '',
        education: '',
        password: '',
    })

    const hendleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.post('http://localhost:5000/register', userDeta)

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
            navigate('/signin')
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

    const hendleDeta = (e) => {

        const { name, value } = e.target

        setUserDeta((prev) => ({
            ...prev,
            [name]: value
        }))

    }

    return (
        <>
            <div className='w-100'>
                <main className="form-signin w-100 d-flex justify-content-center mx-auto align-items-center" style={{ height: "85vh" }}>
                    <form className='w-50' onSubmit={hendleSubmit}>
                        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

                        <div className="form-floating mt-3">
                            <input type="text" name="firstName" className="form-control" onChange={hendleDeta} />
                            <label htmlFor="floatingInput">First Name</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="text" name="lastName" className="form-control" onChange={hendleDeta} />
                            <label htmlFor="floatingPassword">Last Name</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="email" name="email" className="form-control" onChange={hendleDeta} />
                            <label htmlFor="floatingPassword">email</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="text" name="mobileNo" className="form-control" onChange={hendleDeta} />
                            <label htmlFor="floatingPassword">enter mobile no</label>
                        </div>
                        <div className='d-flex form-floating mt-3'>
                            gender:
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Male
                                </label>

                            </div>
                            <div className="form-check">

                                <input className="form-check-input" type="radio" name="gender" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    female
                                </label>
                            </div>
                        </div>
                        <select className="form-select mt-3" name="education" onChange={hendleDeta}>
                            <option value="Bca">Bca</option>
                            <option value="Mca">Mca</option>

                        </select>

                        <div className="form-floating mt-3">
                            <input type="password" name="password" className="form-control" onChange={hendleDeta} />
                            <label htmlFor="floatingPassword">Enter Password</label>
                        </div>


                        <div className='mt-5 d-flex align-items-center justify-content-between'>
                            <button className="btn btn-primary w-25 py-2" type="submit">Sign Up</button>
                            <span>Allready have an Accunt?<Link className="" to="/signin">Sign in</Link></span>
                        </div>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Signup