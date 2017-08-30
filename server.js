var express = require('express')
var app = express()

app.use(express.static('./public/'))

// 404 page
app.get('/404', function(req,res){
    res.sendFile('./html/404.html', {root: './public'})
})

// 404 error handling middleware
app.use(function(req, res, next){
    res.status(404)
    res.redirect('/404')
})

app.listen(8080)
