import http from 'http'

const server = http.createServer((_req, res) => {
    res.end('Hello!')
})

server.listen(3000, () => console.log(`Server running at http://${process.env.HOST}:${process.env.PORT}`))
