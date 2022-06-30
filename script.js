const starScreen      = document.querySelector('.secao-inicio')
const gameScreen      = document.querySelector('.secao-game')


const coutLetter      = document.getElementById('countLetter')
const wordEl          = document.getElementById('hangmanWord')
const sortword        = document.getElementById ('.sortword')
const tip             = document.getElementById('hangmanTip')

const tipEl           = document.querySelector('.tip')
const btnStarEl       = document.querySelector('.btn-comecar')
const hangmanword     = document.querySelector('.hangman-word')
const playedLettersE1 = document.querySelector('.play-letters')


const ccountEl        = document.querySelector('.ccount')
const ecountE1        = document.querySelector('.ecount')

const winModalEl      = document.getElementById('myModal')
const winModal        = new bootstrap.Modal(winModalEl, {})

const wordList =['BANANA', 'CARRO', 'PALAVRA','PASSARINHO','ABELHA','UVA'] 

const randomword      =() => Math.floor(Math.random() * (5 - 0)) + 0

let word              = []
let playedLetters     = []
let gameStarted       = false
let ccount            = 0
let ecount            = 0
let modalopened       = false

gameScreen.classList.add('d-none')

wordEl.addEventListener('keyup', e => {
coutLetter.textContent = wordEl.value.lenght
})

sortword.addEventListener ('click' ,()=>{
         word.disabled = sortword.checked
         tip.disabled  = sortword.checked
})

let starGame = () => {

if(wordEl.value.length > 0 || sortword.checked){

}
      if (wordEl.value.cheked){
        word.value = wordList [randomword ()]
      }

      word = wordEl.value.toUpperCase().match(/[\w]/g)

word.forEach(letter => {
        hangmanword.innerHTML += `<div class= "hangman-word-letter">
                                    <span class="hangman-word-letter-letter"></span>
                                    </div>`
    });

    tipEl.textContent = tip.value
    starScreen.classList.add('d-none')
    gameScreen.classList.remove('d-none')
    gameStarted = true
}
btnStarEl.addEventListener('click', starGame)

    let verifyLetter     = letter => {

    let haveInWord       = word.filter(letra => letra == letter).length
    let havePlayedLetter = playedLetters.filter(letra => letra == letter).length

    if (havePlayedLetter == 0) {

        let objLetter = {
            "letra": letter,
            "tem": false
        }
    }

        if (haveInWord > 0) {

        objLetter.tem = true

        word.forEach((l, i) => {
        if (letter == l) {
        document.querySelectorAll('hangman-word-letter-letter')[i].textContent = 1

                ccount++
            }
        })
    } else {
        ecount++
    }

    playedLettersE1.innerHTML = ''
    playedLetters.forEach(l => {
    playedLettersE1.innerHTML += `<span class= "mx-1">${l}</span>`
    })

    ccountEl.textContent = ccount
    ecountE1.textContent = ecount

    if (ccount == word.length) {

    winModaEl.querySelector('.modal-body').innerHTML = `<p>Você acertou a palavra</p>
    <p class="fw-bold mb-0">Acertos: <span class="win-rights text-success">0</span></p>
    <p class="fw-bold m-0">Erros: <span class="win-wrongs text-danger">0</span></p>`


    gameStarted = false
        winModaEl.show()
    } else if (ecount >= 7) {
    winModaEl.querySelector('.modal-body').innerHTML = `<p>Você acertou a palavra</p>
    <p class="fw-bold mb-0">Acertos: <span class="win-rights text-success">0</span></p>
    <p class="fw-bold m-0">Erros: <span class="win-wrongs text-danger">0</span></p>`
    }
}

    document.addEventListener('keypress', e => {
    let key = e.key.toUpperCase()

    if (gameStarted) {
        verifyLetter(key)
    } else if (key == 'ENTER') {
        console.log('o jogo ainda não iniciou e vc apertou ENTER')
        starGame()
    }

})
    
 winModalEl.addEventListener('show.bs.modal', () => {
    modalopened = true
}

)
     
   winModalEl.addEventListener('hide.bs.     modal', () => {

    word.value = ''
    tip.value = ''

    starScreen.classList.remove('d-nome')
    gameScreen.classList.add('d-none')

    word = []
    playedLetters = []
    ccount = 0
    ecount = 0

    hangmanword.innerHTML     = ''
    playedLettersE1.innerHTML = ''
    ccountEl.textContent      = 0
    ecountE1.textContent      = 0

})