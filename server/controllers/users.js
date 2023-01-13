const argon2 = require('argon2');
const uuid = require('uuid');
const uid = uuid.v4();


const getAllUsers = async (req, res) => {
	const db = req.app.get('db');
	try {
        const users = db.users.data.filter(user =>  user.is_deleted == false);
		res.status(200).json(users);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
};

const createUsers = async (req, res) => {
	const db = req.app.get('db');
	const { lname,fname,address,postcode,pnumber,email,name,password,status,has_agreed } = req.body;
	try {
		const hash = await argon2.hash(password);
        const newUser = { 
            uid, 
            name, 
            email, 
			status,
            password: hash, 
            has_agreed, 
            is_deleted: false, 
			lname,
			fname,
			address,
			postcode,
			pnumber,
        };
        const existing = db.users.data.filter(user => user.email === email);

        if(existing.length === 0 ){
            db.users.data.push(newUser);
            res.status(201).json(newUser);
        }else{
            res.status(404).json({message: 'Existing email'});
        }
        
	} catch (error) {
		if (error.message) {
			return res.status(300).json(error.message);
		} else {
			console.error(error);
			res.status(500).end();
		}
	}
};

const updateUser = (req, res) => {
	const db = req.app.get('db');
	const index = db.users.data.find(user => req.params.uid == user.uid);
	if (index) {
		const { uid,lname,fname,address,postcode,pnumber,email,name,password } = req.body;

		Object.assign(index, {
			...(uid && { uid }),
			...(lname && { lname }),
			...(fname && { fname }),
			...(address && { address }),
			...(postcode && { postcode }),
			...(pnumber && { pnumber }),
			...(email && { email }),
			...(name && { name }),
			...(password && { password }),
		});

		return res.status(200).send(index);
	}
	return res.status(404).send({ error: 'Could not find user ID.' });
};

const removeUsers = async (req, res) => {
	const db = req.app.get('db');
	const index = db.users.data.find(user => req.params.uid == user.uid);
	if (index) {
		const is_deleted = { is_deleted: true }

		Object.assign(index, {
			...(is_deleted && { is_deleted: true }),
		});

		return res.status(200).send(index);
	}
	return res.status(404).send({ error: 'Could not find user ID.' });
};

module.exports = { getAllUsers, createUsers, updateUser, removeUsers };
