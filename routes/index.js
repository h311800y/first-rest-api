const {Router} = require('express')

const router = new Router()


router.get('/test',(req,res)=>{
    const data = {
        'name':'joaquin',
        'xd': 'xd'
    }
    res.json(data)
})


module.exports = router