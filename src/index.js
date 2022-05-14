const express = require ('express')
const app = express()
const morgan = require('morgan')


//seting
app.set('port', process.env.PORT||3000)

//middlewares
//app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set('json spaces', 2)
//routes
app.use(require('../routes/index'))
app.use('/api/movies',require('../routes/movies'))
app.use('/api/users',require('../routes/users'))

//starting the server

app.listen(3000,()=>{
    console.log(`server in port ${app.get('port')}`)
})