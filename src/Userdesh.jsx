import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Userdesh = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate('/signin')
        }
    }, [])
    return (
        <div>Userdesh</div>
    )
}

export default Userdesh