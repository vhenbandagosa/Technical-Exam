const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const loginUsers = async (req, res) => {
	const db = req.app.get('db');
	const { email, password } = req.body;

	try {
        const user = db.users.data.find(user => user.email === email);
		if (!user) {
            throw new Error('Invalid email');
		} else {
			const isValid = await argon2.verify(user.password, password);
			if (isValid) {
				const token = jwt.sign({ user }, process.env.SECRET_KEY);
				res.status(200).json({ token });
			} else {
				throw new Error('Invalid password');
			}
		}
	} catch (error) {
		if (error.message) {
			res.status(300).json(error.message);
		} else {
			console.error(error);
			res.status(500).end();
		}
	}
};

module.exports = { loginUsers };
