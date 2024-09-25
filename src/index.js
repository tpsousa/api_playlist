const express = require('express')
const playlistrouter = require('./routes')
const app = express ()

app.use(express.join())
 app.use('/api/playlists',playlistrouter)
 
const PORT = 3000

app.listen(port,()=> console.log('servidor iniciado'))