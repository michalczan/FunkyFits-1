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
  "topy/dres_dlhy_lotto.webp",
  "topy/ibiza_bikeweek.webp",
  "topy/polo_brazilia.webp",
  "topy/tricko_ala_lubos_blaha.webp",
  "topy/mikina_siva_kapucna.webp",
  "topy/flanelka_modro_hneda.webp",
  "topy/kosela_kratka_zvisle_pasiky.webp",
  "topy/kosela_kratka_indicka.webp",
  "topy/champion_sveter.webp",
  "topy/biele_tielko.webp",
  "topy/adidas_dres_cerveny.webp",
  "topy/polo_pasikave.webp",
  "topy/kosela_dlha_zelena.webp",
  "topy/kosela_kratka_stvorceky_modra.webp",
  "topy/kosela_kratka_zvisle_pasiky_zelene.webp",
  "topy/mikina_monster.webp",
  "topy/tricko_iron_maiden.webp",
  "topy/tricko_peru.webp",
  "topy/vangog.webp",
];

const pantsImages = [
  "nohavice/manchestraky_mac.webp",
  "nohavice/kratasy_cervene_retro.webp",
  "nohavice/rifle_jepp.webp",
  "nohavice/sustaky_adidas.webp",
  "nohavice/rifle_cierne.webp",
  "nohavice/teplaky_mike.webp",
  "nohavice/rifle_levis.webp",
  "nohavice/nohavice_turistika_brugi.webp",
  "nohavice/kratasy_polo_sport.webp",
  "nohavice/nohavice_lezecke.webp",
  "nohavice/teplaky_random.webp",
];
const bootsImages = [
  "boty/IMG_0074.webp",
  "boty/IMG_0075.webp",
  "boty/IMG_0076.webp",
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

