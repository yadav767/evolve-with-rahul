const formModel = require("../models/form.model")
const { sendWelcomeEmailToUser, sendEmailToInstructor } = require("../services/mail.service")

async function submitFormController(req, res) {
    const { fullName, email, phoneNumber, message, plan } = req.body
    try {
        const newUser = await formModel.create({
            fullName, email, phoneNumber, message, plan
        })

        console.log(newUser);
        await sendEmailToInstructor(newUser)
        await sendWelcomeEmailToUser(newUser)

        res.status(200).json({
            message: "Registration's successfully submited !",
            status: true,
            newUser
        })
    } catch (error) {
        res.status(500).json({
            satus: false,
            message: "Failed to register ! please enter valid details ."
        })
    }

}
module.exports = {
    submitFormController
}