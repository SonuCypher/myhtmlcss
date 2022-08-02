const { request } = require('express')
const express = require('express')
const app = express()
const morgan = require('morgan')

// app.use(morgan('dev'))
// app.use(morgan('common'))

 app.use(morgan('tiny'))
 app.use((req,res,next) => {
    req.requestTime = Date.now()
    console.log(req.method, req.path)
    next()
 })
 app.use('/dogs',(req,res,next) => {
    console.log("i hate dogs")
    next()
 })

 const verifyPassword =(req,res,next) => {
    const {password} = req.query
    if (password === 'password'){     
        next()
    }
    // res.send('Incorrect password')
    throw new Error('Passsword required')
 }

//  app.use((req,res,next) => {
//     const {password} = req.query
//     if (password === 'password'){      //we use this to protect all routes
//         next()
//     }
//     res.send('Incorrect password')
//  })

//  app.use((req,res,next) => {
//     req.method= 'GET'
//     console.log(req.method, req.path)  changing every request to GET
//     next()
//  })


//  app.use((req,res,next)=>{
//     console.log("This Is My First Middleware")
//     return next()
//     console.log("This Is My First Middleware after")
//  })
//  app.use((req,res,next)=>{
//     console.log("This Is My Second Middleware")
//     next()
//     console.log("This Is My Second Middleware after")
//  })


app.get('/', (req, res)=>{
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE')
})
app.get('/error', (req, res)=>{
    heaveb.fake()
})

app.get('/dogs', (req, res)=>{
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('woof woof!!')
})
 
app.get('/secret',verifyPassword,(req, res)=>{
    res.send('Congrats You are an Illuminati')
 })

 app.use((req, res)=>{
    res.status(404).send('NOT FOUND')
 })

 app.use((err,req,res,next)=>{
    console.log('************error************')
    // console.log(err)
    next(err)
 })

app.listen(3000, ()=>{
    console.log('App is running on localhost:3000')
})