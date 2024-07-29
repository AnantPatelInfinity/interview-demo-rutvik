import jwt from "jsonwebtoken";


const createTokan = (paylod) => {
    const token = jwt.sign(paylod, "token")

    return token
}

export default createTokan