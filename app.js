'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAS6XYoCQdIBAGvXrQGBsWwlqo24MhvEucN3wDoFIOKx7BmV3dOIO7oYwqIW126ZBVT2UAODHrsRJgfZCaIz5ATqUM4az3FAoriFGUn9ZBCqfZACuZCZBDGZAmKtUvgqfg0ysMlUgWhosgDjA6he6ZCW8tMvallinOF5sbvhcA7vpwZDZD',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err
      console.log("%j", profile);

      console.log(`Eccchoed back to ${profile.first_name} ${profile.last_name}: ${text}` )
    })
  })
})

http.createServer(bot.middleware()).listen(3000)
