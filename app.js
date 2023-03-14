

const container  = document.querySelector(".container")
const refreshBtn = document.querySelector(".refresh-btn")

const maxPaletteLength = 43


const generatePalette = () => {
    container.innerHTML = ""
    for (let  i= 0; i < maxPaletteLength ; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6, "0")}`
        const color = document.createElement("li")
        color.classList.add("color")
        color.innerHTML = `<div class="react-box" style="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`
        color.addEventListener("click", () => copyColor(color, randomHex))
        container.appendChild(color)
        console.log(randomHex)
    }
}


const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector(".hex-value")

  navigator.clipboard.writeText(hexVal).then(() => {
    colorElement.innerText = "Copied"
    setTimeout(() => colorElement.innerText = hexVal, 1000)
  })
}

generatePalette()
refreshBtn.addEventListener("click", generatePalette)