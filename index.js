const express = require('express')
const rawText = require('./data/questions')

const app = express()
const port = 8080

app.get('/', (req, res) => {
  const questionBank = eval(rawText)
  let categoryIndex = Math.floor(Math.random() * questionBank.length)
  let category = questionBank[categoryIndex].c
  let clueIndex = Math.floor(Math.random() * questionBank[categoryIndex].s.length)
  let clue = questionBank[categoryIndex].s[clueIndex].n
  let answerIndex = Math.floor(Math.random() * questionBank[categoryIndex].s[clueIndex].p.length)
  let answer = questionBank[categoryIndex].s[clueIndex].p[answerIndex]

  res.json({category, clue, answer})
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})