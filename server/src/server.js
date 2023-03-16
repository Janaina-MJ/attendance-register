import express from 'express';
import { prisma } from './prisma.js';

const app = express();

app.use(express.json());

app.post('/registers', async (req, res)=> {
    const today = new Date();
    const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

    const register = await prisma.register.create({
        data: {
           "eventName": req.body.name,
            "email": req.body.email,
            "date": date,
        }
    })

    return res.status(201).json({ data: register });
})


app.listen(3333, ()=> {
    console.log('HTTP server running on port http://localhost:3333');
});

