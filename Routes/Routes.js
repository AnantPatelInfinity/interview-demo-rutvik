import express from "express";
import bcrypt from "bcrypt";
import userValidate from "../Helper/Validation.js";
import user from "../Models/userModel.js";
import createTokan from "../Helper/GenerateToken.js";

const router = express.Router()

router.post("/register", async (req, res) => {

    const { firstName, lastName, email, mobileNo, education, password } = req.body

    // console.log("user details", firstName, lastName, email, mobileNo, education, password);

    const checkEmail = await user.findOne({ email: email })


    if (checkEmail) {
        res.json({
            status: false,
            message: 'email allready exist'
        })
    } else {
        const hashPss = await bcrypt.hash(password, 10)

        const { error, value } = userValidate.userValidate.validate({
            fName: firstName,
            lName: lastName,
            email: email,
            mobileNo: Number(mobileNo),
            education: education,
            password: hashPss
        })
        if (error) {
            res.json({
                status: false,
                message: error.message
            })
        } else {
            const addnewuser = user({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phonNumber: mobileNo,
                education: education,
                password: password,
            })

            const createUser = addnewuser.save()

            if (createUser) {
                res.json({
                    status: true,
                    message: "user registered"
                })
            }
        }
    }
})


router.post('/login', async (req, res) => {

    const { email, password } = req.body

    const checkUser = await user.findOne({ email: email })

    const { error, value } = userValidate.userLoginValidate.validate({
        email: email,
        password: password
    })

    if (error) {
        res.json({
            status: false,
            message: error.message
        })
    } else {
        if (checkUser) {

            const passworCheck = await bcrypt.compare(password, checkUser.password)

            if (passworCheck) {
                const paylod = {
                    id: checkUser._id
                }

                const token = createTokan(paylod)

                res.json({
                    status: true,
                    message: 'user logedin successful',
                    token: token
                })
            } else {
                res.json({
                    status: false,
                    message: 'wrong pass!'
                })
            }
        }
    }
})

export default router