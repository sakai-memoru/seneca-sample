var seneca = require('seneca')()

var messageBack = function( message, done ){
  done( null, {message:'hi.' + message.name } )
}

seneca.add({say:'hello'}, function(message,done){
  messageBack(message,done);
})
.listen(10102)
