const express = require('express')

const playlistscontroller = require('./controllers/playlists-controller')

const playlistrouter = express.router()

playlistrouter.post('/',playController.save)
playlistrouter.get(':id',playController.show)
playlistrouter.post('/',playController.save)
playlistrouter.put('/:id',playlistrouter.update)
playlistsrouter.delete('/:id',playlistscontroller.delete),

playlistrouter.post('/:id/musics',playlistsController.addMusic)

playlistrouter.delete('/:playlistId/musics/:musicId',playlistscontroller.removeMusic)

module.exports  = playlistrouter