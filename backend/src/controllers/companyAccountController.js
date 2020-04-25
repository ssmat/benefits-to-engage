const Company = require('../models/companyAccount');


module.exports = {
    async store(req, res) {
        const { name, email, password } = req.body;

        const checkCompany = await Company.findOne({ email });
        if (!checkCompany) {
            const company = await Company.create({
                name,
                email,
                password
            });

            return res.json(company);
        } else {
            return res.json(
                {
                    error: true,
                    message: "Usuário já cadastrado!"
                }
            );
        }
    }
};