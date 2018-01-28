

module.exports=function(app){

  var io=require('socket.io');
      io = io(app).of('/chat');
      io.on('connection',function(socket){
        console.log("test");
      });
}
