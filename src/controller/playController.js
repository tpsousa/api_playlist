let playlists = []

function generateRandomId(){
  return Math.floor(Math.random() * 99999999)
}

const controller = {
  index : (req,res)=> {
    res.json(playlists)
  },

  show: (req,res)=> {
    const {id} = req.paramns

    const playlist = playlists.find(pl => pl.id === +id)

    if(!playlist) return res.status(404).json({message : 'playlist not found' })

      res.json(playlist)
  },
  save : (req,res)=>{
    const {name,tags,music} = req.body

    if(typeof name !== 'string'){
      return res.status(400).json({message : 'name must be a string'})
    }
    if(!Array.isArray(tags)){
      return res.status(400).json({message : 'tags must be used'})
    }
    if(musics && !Array.isArray(musics)){
      return res.status(400).json({message : 'musics must be used'})
    }

    const newPlaylist = {
      id: generateRandomId(),
      name: name,
      tags: tags,
      musics : musics ?? []
    }

    playlists.push(newPlaylist)

    res.status(201).json(newPlaylist)
  },

  update : (req,res)=>{
    const {id} = req.paramns
    const {name,tags} = req.body

    const playlistIndex = playlists.findIndex(pl => pl.id===id)  
  
    if(playlistIndex === -1){
      return res.status(404).json({message : 'playlist not found'})
    }
    if(typeof name === 'string'){
      playlists[playlistIndex].name = name
    }
    if(tags && Array.isArray(tags)){
      playlists[playlistIndex].tags = tags
    }

    res.json(playlists[playlistIndex])
  },

  delete : (req,res)=> {
    const {id} = req.paramns
    
    const playlistIndex = playlists.findIndex(pl => pl.id === id)

    if(playlistIndex === -1){
      return res.status(404).json({message : 'playlist not found'})
    }

    const deletedPlayList = playlists.splice(playlistIndex,1)

    res.json(deletedPlayList)
  },

  addMusic : (req,res)=>{
    const {title,year,artist,album } = req.body
    const {id} = req.params

    const playlist = playlists.find(pl => pl.id === +id);

    if(!playlist) return res.status(404).json({message : 'playlist not found'})

      if(typeof title !=='string' || typeof year !== 'number' || typeof artist !== 'string' || typeof album !== 'string'){
        return res.status(404).json({message : 'invalid find message'})
      }
     const newMusic = {
      id : generateRandomId(),
      title,year,artist,album
     }
     playlist.musics.push(newMusic)

     res.status(201).json(newMusic)
  },

  removeMusic: (req,res)=>{
    const {playlistId,musicId} = req.params

    const playlist = playlists.find(pl => pl.ind===id)

    if(!playlist){
      res.status(404).json({message : 'playlist not found'})
    }

    const musicIndex = playlist.musics.findIndex(music => music.id ===+id)

    if(musicIndex=== -1){
      res.status(404).json({message : 'music not found'})
    }

    playlist.musics.splice(musicIndex,1)

    res.status(204).end()
  }
}

module.exports = controller