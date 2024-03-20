const express = require('express')
const app = express()

app.get('*', (_, res) => {
    res.send(`Hi from ${process.env.BACK_NAME}`)
})

app.listen(3000, () => {
    console.log('backend has started')
})