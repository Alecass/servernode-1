const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // per queste query
  // chiedi http://localhost:7070/personaggi?colore=giallo&sesso=m
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

// router.get('/personaggi', (req, res) => {
//   res.send('personaggi')
// })

module.exports = router