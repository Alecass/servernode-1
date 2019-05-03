const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const query = req.query
  let msg = 'Ciao'

  if (query.sesso === 'm') {
    msg = `${msg} bel uomo`
  }
  if (query.colore) {
    msg = `${msg} ${query.colore}`
  }

  res.send(msg)
})

// router.get('/personaggi', (req, res) => {
//   res.send('personaggi')
// })

module.exports = router