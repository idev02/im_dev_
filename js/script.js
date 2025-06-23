const truths = [
  {
    text: "Gaaaaa kangennn samaaa cwomuuu neeeee?",
    img: "img/me.jpg"
  },
  {
    text: "Iniiii siapaaaa yaaaaaaaa?",
    img: "img/cwe aing.jpg"
  },
  {
    text: "Sayaaaaaangggg sama cwomuuuuu yngggggg?",
    img: "img/kiw.png"
  },
  {
    text: "Besok pas ketemuuu ngapainnnn?",
    img: "img/senyum.png"
  },
  {
    text: "Gaboleeeeeeeh ngambek yaaaaa sayaaaaaanggg",
    img: "img/ngambek.jpg"
  }
];

const dares = [
  { text: "Pass ketemuuu peluuuukkkk lamaaaaaa2" },
  { text: "Ciummmmmmmmm" },
  { text: "Paaaapppppp banyaaaaaak2" },
  { text: "Post fotooooo heheh" },
  { text: "pas ketemuuu YTTA" }
];

function pickTruth() {
  const pick = truths[Math.floor(Math.random() * truths.length)];
  document.getElementById("result").innerHTML = `
    <strong>Truth:</strong> ${pick.text}<br>
    <img src="${pick.img}" alt="Truth Image" class="result-img">
  `;
}

function pickDare() {
  const pick = dares[Math.floor(Math.random() * dares.length)];
  document.getElementById("result").innerHTML = `
    <strong>Dare:</strong> ${pick.text}
  `;
}
