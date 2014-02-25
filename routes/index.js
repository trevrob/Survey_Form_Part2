module.exports = function Route(app){
  app.get('/', function(req, res){
    res.render('index', {title:'Submitting Form', session_data:req.session});
  });
  app.get('/result.ejs', function(req, res){
    res.render('result', {title:'Form Result', session_data:req.session});
  });
  app.io.route('post_form', function(req){
    var message = "You emitted the following information to the server: Name is "+ req.data.name + ", dojo location is " + req.data.location + ", favorite language is " + req.data.language + ", and comments I have are: " + req.data.comments; 
    req.io.emit('updated_message', message);
    var random = Math.floor((Math.random()*1000)+1);
    req.io.emit('random_number', random);
  })
  //   req.session.name = req.body.name;
  //   req.session.location = req.body.location;
  //   req.session.language = req.body.language; 
  //   req.session.comments = req.body.comments; 
  //   req.session.save(function() {
  //      res.redirect('/');
  //   });
  // })
}
