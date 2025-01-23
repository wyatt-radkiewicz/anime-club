// Showcases things
const MSGLEN = 22;
var showcases = [];

// Collect info about the showcases
for (const showcase of document.getElementsByClassName("showcase")) {
  const html = showcase.children[0];
  const text = html.textContent;
  showcases.push({
    html: html,
    text: text,
    pos: Math.floor(Math.random() * MSGLEN),
  });
}

// Now update the showcaseses periodically
setInterval(function () {
  for (let showcase of showcases) {
    let text = " ".repeat(Math.max(showcase.pos, 0));
    text += showcase.text.substring(
      Math.max(-showcase.pos, 0),
      showcase.text.length,
    );
    text += " ".repeat(MSGLEN);
    text = text.substring(0, MSGLEN);
    text = text.replaceAll(" ", "\u{00A0}");

    showcase.html.textContent = text;

    showcase.pos -= 1;
    if (showcase.pos < -showcase.text.length) showcase.pos = MSGLEN;
  }
}, 150);
