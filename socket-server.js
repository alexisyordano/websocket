
const express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;
var server = require('http').Server(app);

var io = require('socket.io')(server);

app.get('/main', (req, res) => {
    res.status(200).send({
        status: 'success',
        message: 'Conectado al Server'
    })
})

io.on('connection', function (socket) {
    console.log("usuario conectado");

    socket.emit('test event', 'server socket activo');
});


server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
});


