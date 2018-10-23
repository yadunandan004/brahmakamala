const express = require('express')
const app = express()
const port = process.ENV.PORT || 80

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))