const express = require('express');
const router = express.Router();
// QUery
// chiedi http://localhost:7070/personaggi?colore=giallo&sesso=m
router.get('/', (req, res) => {
  const query = req.query
  let msg = 'Ciao'
  if (query.key === '76512765127635126') {
    msg = `${msg} Mario Rossi `
    if (query.sesso === 'm') {
      msg = `${msg} bel uomo`
    }
    if (query.colore) {
      msg = `${msg} ${query.colore}`
    }
  } else {
    msg = `Non sei autorizzato`
  }

  res.send(msg)
})

// Params
// http://localhost:7070/personaggi/9
router.get('/:id', (req, res) => {
  const id = req.params.id
  console.log('ID: ', id)
  res.send(`personaggio id: ${id}`)
})

module.exports = router