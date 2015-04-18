var express = require('express'),
    app = express(),
    path = require('path'),
    rootPath = path.normalize(__dirname),
    stylus = require('stylus');
    
    
var compile = function(str, path) {
        return stylus(str).set('filename', path);
    }
    
   
app.use(stylus.middleware(
    {
        src: rootPath + '/public',
        compile: compile
    }
));
var port = process.env.PORT || 80;

app.set('view engine', 'jade');

app.use(express.static(rootPath + '/public'));

app.get('/partials/*', function(req, res) {
    console.log('Rendering partial...');
    res.render(__dirname + '/public/views/' + req.params[0]);
        
});

app.get('*', function(req, res){
    console.log('rendering index...');
   res.render('index'); 
   
});

app.listen(port);
