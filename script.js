/*---------------------ŠATNIK SKUSKA FUNKCIA-----------------*/
filterSelection("all")
function filterSelection(category) {
  const items = document.querySelectorAll('.column');
  
  if (category === 'all') {
    items.forEach(item => item.style.display = 'block');
  } else {
    items.forEach(item => {
      if (item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Arrays obrazkov
const topsImages = [
  "topy/dres_dlhy_lotto.jpg",
  "topy/ibiza_bikeweek.jpg",
  "topy/polo_brazilia.jpg",
  "topy/tricko_ala_lubos_blaha.jpg",
  "topy/mikina_siva_kapucna.jpg",
  "topy/flanelka_modro_hneda.jpg",
  "topy/kosela_kratka_zvisle_pasiky.jpg",
  "topy/kosela_kratka_indicka.jpg",
  "topy/champion_sveter.jpg",
  "topy/biele_tielko.jpg",
  "topy/adidas_dres_cerveny.jpg",
  "topy/polo_pasikave.jpg",
  "topy/kosela_dlha_zelena.jpg",
  "topy/kosela_kratka_stvorceky_modra.jpg",
  "topy/kosela_kratka_zvisle_pasiky_zelene.jpg",
  "topy/mikina_monster.jpg",
  "topy/tricko_iron_maiden.jpg",
  "topy/tricko_peru.jpg",
  "topy/vangog.jpg",
];

const pantsImages = [
  "nohavice/manchestraky_mac.jpg",
  "nohavice/kratasy_cervene_retro.jpg",
  "nohavice/rifle_jepp.jpg",
  "nohavice/sustaky_adidas.jpg",
  "nohavice/rifle_cierne.jpg",
  "nohavice/teplaky_mike.jpg",
  "nohavice/rifle_levis.jpg",
  "nohavice/nohavice_turistika_brugi.jpg",
  "nohavice/kratasy_polo_sport.jpg",
  "nohavice/nohavice_lezecke.jpg",
  "nohavice/teplaky_random.jpg",
];
const bootsImages = [
  "boty/IMG_0074.jpeg",
  "boty/IMG_0075.jpeg",
  "boty/IMG_0076.jpeg",
];

const hatsImages = [
  "ciapky/IMG_0078.webp",
  "ciapky/IMG_0079.webp",
  "ciapky/IMG_0080.webp",
  "ciapky/IMG_0081.webp",
  "ciapky/IMG_0082.webp",
];

let topsIndex = 0;
let pantsIndex = 0;
let bootsIndex = 0;
let hatsIndex = 0;

function generateFit() {
  // Zmení ciapky
  if (!document.getElementById('checkbox-hats').checked) {
    hatsIndex = getRandomIndex(hatsIndex, hatsImages.length);
    document.getElementById("hat-to-change").src = hatsImages[hatsIndex];
  }

  // Zmení TOP
  if (!document.getElementById('checkbox-tops').checked) {
    topsIndex = getRandomIndex(topsIndex, topsImages.length);
    document.getElementById("top-to-change").src = topsImages[topsIndex];
  }

  // Zmení nohavice
  if (!document.getElementById('checkbox-pants').checked) {
    pantsIndex = getRandomIndex(pantsIndex, pantsImages.length);
    document.getElementById("pants-to-change").src = pantsImages[pantsIndex];
  }

  // Zmení boty
  if (!document.getElementById('checkbox-boots').checked) {
    bootsIndex = getRandomIndex(bootsIndex, bootsImages.length);
    document.getElementById("boots-to-change").src = bootsImages[bootsIndex];
  }
}

function getRandomIndex(currentIndex, arrayLength) {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * arrayLength);
  } while (newIndex === currentIndex);
  return newIndex;
}