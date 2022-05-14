const {Router} = require('express')
const router = new Router()
const movies = require('../src/sample.json')
const _ = require('underscore')


router.get('/',(req,res)=>{
    res.json(movies)
})

router.post('/',(req,res)=>{
    const {tittle,director,year,rating} = req.body
    const id = movies.length + 1
    const newMovie = {...req.body,id}

    if(id && tittle && director && year && rating){
        movies.push(newMovie)
        res.json(movies)
    }else{
        res.json('error')
    }
})
    router.put('/:id',(req,res)=>{
        const{id} = req.params
        const {tittle,director,year,rating} = req.body
        
        if(id&&tittle&&director&&year&&rating){
            _.each(movies,(movie, i)=>{
                if(movie.id == id){
                    movie.tittle = tittle;
                    movie.director = director;
                    movie.year = year;
                    movie.rating = rating;
                }
            })            
            res.json(movies)
        }else{
            res.status(500).json({error:'error'})
        }
    })

    router.delete('/:id',(req,res)=>{
        const {id} = req.params

        _.each(movies,(movie, i)=>{
            if(movie.id == id){
                movies.splice(i, 1)
            }
        })
        res.send(movies)
    })


module.exports = router