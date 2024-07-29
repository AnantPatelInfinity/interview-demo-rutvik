import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

    const logout = () => {
        localStorage.removeItem('token')
    }
    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/userpage">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/userpage">UserDesh</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/aboutus'>About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contactus'>Contact us</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ">

                            {
                                localStorage.getItem("token") ? <button className='btn btn-danger' onClick={logout}>log out</button> : <li className="nav-item ">
                                    <Link className="nav-link" to='/signin'>Sign in</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Home