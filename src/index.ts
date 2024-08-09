import http from 'http'
import { initializeApp, FirebaseOptions } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const config: FirebaseOptions = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
}

const app = initializeApp(config)

const database = getDatabase(app)

const server = http.createServer((_, response) => {
    response.end('{"message":"ok"}')
})

server.listen(3000, () => console.log(`Server running at http://${process.env.HOST}:${process.env.PORT}`))
