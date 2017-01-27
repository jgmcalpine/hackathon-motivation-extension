

let array = [
    "https://www.youtube.com/watch?v=TCcTJjLFDE8",
    "https://www.youtube.com/watch?v=AjZ0KbJcav0",
    "https://www.youtube.com/watch?v=J5pgrnstX6w",
    "https://www.youtube.com/watch?v=Hzp1xb41U40",
    "https://www.youtube.com/watch?v=UF8uR6Z6KLc",
    "https://www.youtube.com/watch?v=w8HdOHrc3OQ",
    "http://i.quoteaddicts.com/media/quotes/67/3334062-dalai-lama.jpg",
    "http://www.allquotes.info/wp-content/uploads/2016/02/Thich-Nhat-Hanh-Quotes-25-The-Best-Ones.jpg",
    "https://quotefancy.com/media/wallpaper/1600x900/3742-Carl-Sagan-Quote-We-are-star-stuff-which-has-taken-its-destiny.jpg",
    "https://www.youtube.com/watch?v=V2EfL1j4KYE",
    "https://www.youtube.com/watch?v=z1PSbDmV8Gw",
    "https://www.youtube.com/watch?v=UNQhuFL6CWg",
    "https://www.youtube.com/watch?v=H1sXTmaqRHU",
    "https://www.youtube.com/watch?v=Cz3q1R0oHmE",
    "https://www.youtube.com/watch?v=26U_seo0a1g",
    "https://www.youtube.com/watch?v=9Q-8VRxNuo8"
];

function updateIcon() {
    let rando = Math.floor(Math.random() * 15);
    var newURL = array[rando];
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();

document.getElementById('leavePage').addEventListener('click', function() {
  let rando = Math.floor(Math.random() * 15);
  let newURL = array[rando];
  chrome.tabs.create({ url: newURL });
})
