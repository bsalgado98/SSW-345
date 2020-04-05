const express = require("express")
const app = express()
const port = 3000
const retrievalIds = {}

// Generate a random 6 character, alpha-numeric id
function generateRetrievalId() {
    let id = ""
    for (let i = 0; i < 5; i++) {
        const lowerOrUpper = Math.random()
        if (lowerOrUpper < 0.5) {
            const lower = Math.floor(Math.random() * (90 - 65) + 65)
            id += String.fromCharCode(lower)
        } else {
            const upper = Math.floor(Math.random() * (122 - 97) + 97)
            id += String.fromCharCode(upper)
        }
    }
    const num = Math.floor(Math.random() * 9)
    id += num
    return id
}

function updateRoutes() {
    for (let id in retrievalIds) {
        app.get("/" + id, (req, res) => {
            if (retrievalIds[id]) {
                res.send(JSON.stringify(retrievalIds[id]))
                delete retrievalIds[id]
            } else {
                res.send({
                    success: false,
                    error: 404,
                    message: "Not Found",
                })
            }
        })
    }
}

// express configuration
app.use(express.json({ type: "*/*" }))

// Set your routes
app.get("/", (req, res) => res.send("Hello World!"))
app.post("/", function (req, res) {
    res.send(`Received object. ${JSON.stringify(req.body)}`)
})

app.post("/share", (request, response) => {
    const retrievalId = generateRetrievalId()
    retrievalIds[retrievalId] = request.body
    response.send({
        success: true,
        link: `http://localhost:3000/${retrievalId}`,
    })
    updateRoutes()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
