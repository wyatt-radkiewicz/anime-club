// Showcases things
const MSGLEN = 22
var showcases = []

// Collect info about the showcases
for (const showcase of document.getElementsByClassName("showcase")) {
  const html = showcase.children[0]
  const text = html.textContent
  showcases.push({
    html: html,
    text: text,
    pos: Math.floor(Math.random() * MSGLEN),
  })
}

// Now update the showcaseses periodically
setInterval(function () {
  for (let showcase of showcases) {
    let text = " ".repeat(Math.max(showcase.pos, 0))
    text += showcase.text.substring(Math.max(-showcase.pos, 0), showcase.text.length)
    text += " ".repeat(MSGLEN)
    text = text.substring(0, MSGLEN)
    text = text.replaceAll(" ", "\u{00A0}")
    
    showcase.html.textContent = text
    
    showcase.pos -= 1
    if (showcase.pos < -showcase.text.length) showcase.pos = MSGLEN
  }
}, 150)

// Clock digits
const digitHourTens = document.getElementById("clock-hr-10")
const digitHourOnes = document.getElementById("clock-hr-1")
const digitMinTens = document.getElementById("clock-min-10")
const digitMinOnes = document.getElementById("clock-min-1")
const digitDots = document.getElementById("clock-dots")
var digitDotsEnabled = false

// Setup clock interval
setInterval(function () {
  digitDotsEnabled = !digitDotsEnabled
  digitDots.src = "/images/clock/" + String(digitDotsEnabled) + ".png"
  
  const now = new Date()
  digitHourTens.src = "/images/clock/" + String(Math.floor(now.getHours() / 10)) + ".png"
  digitHourOnes.src = "/images/clock/" + String(Math.floor(now.getHours() % 10)) + ".png"
  digitMinTens.src = "/images/clock/" + String(Math.floor(now.getMinutes() / 10)) + ".png"
  digitMinOnes.src = "/images/clock/" + String(Math.floor(now.getMinutes() % 10)) + ".png"
}, 500)
