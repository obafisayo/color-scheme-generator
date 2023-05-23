const colorInput = document.getElementById("color-input")
const getColorSchemes = document.getElementById("get-color-schemes")
const colorMode = document.getElementById("color-mode")
const schemes = document.getElementById("schemes")
const footer = document.getElementById("footer")

getColorSchemes.addEventListener("click", function() {
    const colorValue = `${colorInput.value}`.substring(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${colorMode.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.colors[0].name.value)
        footer.innerHTML = `
                <h5>${data.colors[0].hex.value} <br>
                    ${data.colors[0].name.value}
                </h5>
                <h5>${data.colors[1].hex.value} <br>
                    ${data.colors[1].name.value}
                </h5>
                <h5>${data.colors[2].hex.value} <br>
                    ${data.colors[2].name.value}
                </h5>
                <h5>${data.colors[3].hex.value} <br>
                    ${data.colors[3].name.value}
                </h5>
                <h5>${data.colors[4].hex.value} <br>
                    ${data.colors[4].name.value}
                </h5>
        `
        schemes.innerHTML = `
            <img id="Color" src="${data.colors[0].image.bare}" />
            <img id="Color" src="${data.colors[1].image.bare}" />
            <img id="Color" src="${data.colors[2].image.bare}" />
            <img id="Color" src="${data.colors[3].image.bare}" />
            <img id="Color" src="${data.colors[4].image.bare}" />
        `
    })
})
