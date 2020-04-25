const User = require('../models/userAccount');

module.exports = {
    async store(req, res) {
        const { name, email, password } = req.body;

        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            const user = await User.create({
                name,
                email,
                password
            });

            return res.json(user);
        } else {
            return res.json(
                {
                    error: true,
                    message: "Usuário já cadastrado!"
                }
            );
        }
    },
};