const input = document.querySelector('.type') // input.value = 4
const result = document.querySelector('.result')

function calculate() {
    let htmlString = ''

  for (let index = 1; index <= 10; index++ ) {
    htmlString = htmlString + `<div>${index} x ${input.value} = ${index * Number(input.value)}</div>`
  }

  result.innerHTML = htmlString

//   result.innerHTML
}