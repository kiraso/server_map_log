const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors')

const middleware = require('./middleware')

app.use(morgan('common'))
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.get('/',(rq,rs) => {
    rs.json({
        message: 'Hi there'
    });
})

app.use(middleware.notFound)

app.use(middleware.errorHandler)


const port = process.env.PORT || 2020

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})