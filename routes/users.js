import express, { response } from 'express';

const router = express.Router();

const users = [
    {
        "usename": "superpippo",
        "name": "pippo",
        "surname": "de pippis",
        "email": "superpippo@gmail.com",
        "password": "forzaCatania1",
        "yob": 2001,
        "newsletterSub": true,
        "gender": "male",
        "phone": "+3934567890"
    },
    {
        "usename": "plutino",
        "name": "pluto",
        "surname": "canis",
        "email": "plutino@gmail.com",
        "password": "forzaAtalanta1",
        "yob": 2001,
        "newsletterSub": true,
        "gender": "male",
        "phone": "+3934567899"
    },
    {
        "usename ": "paperinaKiss",
        "name": "paperina",
        "surname": "de paperis",
        "email": "paperina99@gmail.com",
        "password": "forzaAscoli1",
        "yob": 2001,
        "newsletterSub": true,
        "gender": "female",
        "phone": "+3934568890"
    }
]

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push(user);

    res.send(`User with the name ${user.name} added to the database!`);
})

export default router;