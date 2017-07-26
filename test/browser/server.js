'use strict'
const path = require('path')
const express = require('express')
const app = express()


app.use('/prism', express.static('../../node_modules/prismjs/themes'))
app.use('/bootstrap', express.static('../../node_modules/bootstrap/dist'))
app.use('/static', express.static(__dirname))
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

// *** SERVER ERROR HANDLER ***
app.use(function (err, req, res, next) {
    console.log(err)
    return res.status(404).json({
        error: 'Server error',
        err: err
    })
})


/*
    ********** /END ERROR HANDLING **********
*/

module.exports = function (PORT, done) {
  const msg = '*** Listening on port: ' + PORT + ' ***'
  console.log(
    ' '  + '*'.repeat(msg.length) + '\n', msg + '\n', '*'.repeat(msg.length)
  )
  return app.listen(PORT, done)
}

module.exports(8080)
