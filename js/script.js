let whyWeAreBtnOne = document.querySelector('.why-we-are-btn-one')
let whyWeAreBtnTwo = document.querySelector('.why-we-are-btn-two')
let whyWeAreBtnThree = document.querySelector('.why-we-are-btn-three')

let whyWeAreItemOne = document.querySelector('.why-we-are-item-one')
let whyWeAreItemTwo = document.querySelector('.why-we-are-item-two')
let whyWeAreItemThree = document.querySelector('.why-we-are-item-three')

whyWeAreBtnOne.addEventListener('click', () => {
  toggleBtnTextColor(whyWeAreBtnOne, whyWeAreBtnTwo, whyWeAreBtnThree)
  toggleItems(whyWeAreItemOne, whyWeAreItemTwo, whyWeAreItemThree)
})

whyWeAreBtnTwo.addEventListener('click', () => {
  toggleBtnTextColor(whyWeAreBtnTwo, whyWeAreBtnOne, whyWeAreBtnThree)
  toggleItems(whyWeAreItemTwo, whyWeAreItemOne, whyWeAreItemThree)
})

whyWeAreBtnThree.addEventListener('click', () => {
  toggleBtnTextColor(whyWeAreBtnThree, whyWeAreBtnTwo, whyWeAreBtnOne)
  toggleItems(whyWeAreItemThree, whyWeAreItemTwo, whyWeAreItemOne)
})


// Dictionary API
let dictionarySearchBtn = document.getElementById('dictionary-search-btn')
let dictionarySearchInp = document.getElementById('dictionary-search-inp')
dictionarySearchBtn.addEventListener('click', () => {
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${dictionarySearchInp.value}`
  fetch(url)
    .then(res => res.json())
    .then(data => dictionaryFunc(data[0]))
})
function dictionaryFunc(data) {
  let dictionaryBody = document.querySelector('.dictionary-body')
  dictionaryBody.innerHTML = ''
  let dictionaryBodyInner = document.createElement('div')
  dictionaryBodyInner.className = 'space-y-4'
  dictionaryBodyInner.innerHTML = `
    <div class="flex justify-evenly items-center border-b py-4">
    <h2 class="font-bold text-2xl">You search <span class="dictionary-name text-3xl">${data.word}</span></h2>
    <audio controls>
      <source src="${data.phonetics[0].audio}" type="audio/mpeg">
    </audio>
  </div>
  <div class="flex gap-5 justify-evenly">
    <div>
      <p class="font-normal text-slate-300">class</p>
      <h2 class="dictionary-class">${data.meanings[0].partOfSpeech}</h2>
    </div>
    <div>
      <p class="font-normal text-slate-300">Phonetic</p>
      <h2 class="dictionary-phonetics">${data.phonetics[0].text ? data.phonetics[0].text : 'No found Phonetics'}</h2>
    </div>
    <div>
        <p class="font-normal text-slate-300">Synonyms</p>
        <h2 class="dictionary-phonetics">${data.meanings[0].synonyms[0] ? data.meanings[0].synonyms[0] : 'No found synonyms'}</h2>
      </div>
    </div>
    <div class="dictionary-definition">
          <h2 class="font-normal text-slate-300">Definition</h2>
        <p class="dictionary-defination text-orange-500 font-bold">${data.meanings[0].definitions[0].definition}</p>
      </div>

      <div class='flex justify-between'>
      <div class="dictioanry-example">
      <h2 class="font-normal text-slate-300">Example</h2>
      <p class="dictionary-example">${data?.meanings[2]?.definitions[0]?.example ? data.meanings[2].definitions[0].example : 'No found example'}</p>
    </div>

    <h2> <span class='font-normal text-slate-300'>More about: </span> <a href='${data.sourceUrls[0]}' class='text-orange-500 font-bold text-3xl bg-slate-600 px-4 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-800 transition'> ${data.word} </a> </h2>
      </div>

    `
  dictionaryBody.appendChild(dictionaryBodyInner)

}



// utility function

//  currItem is visible and others item is hidden
function toggleItems(currItem, ...restItem) {
  currItem.style.display = 'grid'
  for (item of restItem) {
    item.style.display = 'none'
  }
}

// button text change when button clicked
function toggleBtnTextColor(currBtn, ...restBtn) {
  currBtn.style.color = 'rgb(249 115 22)'
  for (btn of restBtn) {
    btn.style.color = 'rgb(148 163 184)'
  }
}

// Bubble effect
const bubbles = document.querySelectorAll('.bubble');
setInterval(() => {
  bubbles.forEach((bubble) => {
    const x = Math.floor(Math.random() * (window.innerWidth - 50));
    const y = Math.floor(Math.random() * (window.innerHeight - 50));
    bubble.style.transform = `scale(1)`;
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
  });
}, 4000);





// windows scrollbar horizontally and top button
const backToTopButton = document.querySelector("#back-to-top");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset;
  var docHeight = document.body.scrollHeight - window.innerHeight;
  var scrollPercent = scrollTop / docHeight * 100;
  var indicatorBar = document.getElementById("indicator-bar");

  if (scrollPercent > 0) {
    indicatorBar.style.width = scrollPercent + "%";
  } else {
    indicatorBar.style.width = "0";
  }
  // topbutton
  if (window.pageYOffset > 100) {
    backToTopButton.style.display = 'block'
    backToTopButton.style.zIndex = '200'
  } else {
    backToTopButton.style.display = 'none'
  }
});
// top button
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// preloader and animation-left-right
window.addEventListener('load', () => {
  // preloader animation
  let loader = document.getElementById('preloader')
  setTimeout(() => {
    loader.style.display = 'none'
  }, 600);

  let animatedLeft = document.querySelectorAll('.apply-animated-from-left')
  let animatedRight = document.querySelectorAll('.apply-animated-from-right')
  for (elem of animatedLeft) {
    elem.classList.add('animated-from-left')
  }
  for (elem of animatedRight) {
    elem.classList.add('animated-from-right')
  }
})