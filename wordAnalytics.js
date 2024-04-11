//Task: target the text area 
const textAreaEl = document.querySelector('.text-area')
//target the character number
const charNumberEl = document.querySelector('.character-number')
//target the twitter char left
const twitterCharLeftEl = document.querySelector('.twitter-number')
//target the facebook char left
const facebookCharLeftEl = document.querySelector('.facebook-number')
//target the word number
const wordNumberEl = document.querySelector('.word-number')

textAreaEl.addEventListener('input', function() {
    //get the user input
    const userInput = textAreaEl.value
    //get user input length
    const characterNumber = userInput.length;
    charNumberEl.textContent = characterNumber;

    //get the number of characters left for twitter message
    const twiterCharactersLeft = 280 - characterNumber;
    if(twiterCharactersLeft < 0) {
        twitterCharLeftEl.classList.add('limit-text');
    } else {
        twitterCharLeftEl.classList.remove('limit-text');
    }

    twitterCharLeftEl.textContent = twiterCharactersLeft

    //get the number of characters left for facebook
    const fbcharactersLeft = 2200 - characterNumber;
    if(fbcharactersLeft < 0) {
        facebookCharLeftEl.classList.add('limit-text');
    } else {
        facebookCharLeftEl.classList.remove('limit-text');
    }

    facebookCharLeftEl.textContent = fbcharactersLeft

    //get word count
    const wordCount = userInput.split(' ').length;
    wordNumberEl.textContent = wordCount

})