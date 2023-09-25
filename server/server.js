import express from 'express';

import './config/dotenv.js';


import giftRouter from './routes/gifts.js'


const app = express();

app.use(express.static('public'));

app.use('/public', express.static('./public'));




app.use('/gifts', giftRouter)




app.use('/scripts', express.static('./public/scripts'))

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})



const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})

