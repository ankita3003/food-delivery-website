const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


const db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'sruji',
    password : '',
    database : 'food-delivery'
  }
});

app.post('/signin', (req,res) => {
	const {email, password} = req.body;
	if (!email || !password) {
		return res.status(400).json('incorrect form submission');
	}
	db.select('email','hash').from('login')
	.where('email','=',req.body.email)
	.then(data => {
		const isValid = bcrypt.compareSync(password, data[0].hash);
		if(isValid) {
			return db.select('*').from('users')
			.where('email','=',email)
			.then(user => {
				res.json(user[0]);
			})
			.catch(err => res.status(400).json('unable to get user'))
		} else {
			res.status(400).json('wrong credentials')
		}
	})
	.catch(err => res.status(400).json('wrong credentials'));
})

app.post('/register',(req,res) => {
	const { email, password, name } = req.body;
	if (!email || !password || !name ) {
		return res.status(400).json('incorrect form submission');
	}
	const hash = bcrypt.hashSync(password);
		db.transaction(trx => {
			trx.insert({
				hash: hash,
				email: email
			})
			.into('login')
			.returning('email')
			.then(loginEmail => {
				return trx('users')
					.returning('*')
					.insert({
						email: loginEmail[0],
						name: name,
						joined: new Date()
					})
					.then(user => {
						res.json(user[0]);
					})
				}
			).then(trx.commit)
			 .catch(trx.rollback)
		}
	)
	.catch(err => res.status(400).json("unable to register"));
})

app.get('/menu',(req,res) => {
	return db.select('*').from('menu')
		.then(item => res.json(item))
})

app.get('/images',(req,res) => {
	return db.select('image_src').from('menu')
		.then(url => res.json(url))
})

app.listen(3000, () => {
	console.log('app running on port 3000');
})