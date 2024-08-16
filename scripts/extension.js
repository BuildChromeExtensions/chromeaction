document.querySelector('button').onclick = (e) => {

    // names
    const names = ['Charles', 'John', 'Pearl', 'Aku', 'Phiri', 'Zak'];
    const colors = ['#4A90E2', '#F5A623', '#7ED321', '#9013FE', '#50E3C2', '#B8E986', '#F8E71C', '#D0021B'];

    // random index
    const indexName = parseInt(Math.random() * names.length)
    const indexColor = parseInt(Math.random() * colors.length)
    const popupIndex = (1 + parseInt(Math.random() * 2)).toString();

    // select name
    const name = names[indexName];

    // select random number between 0 and 100
    const number = parseInt(Math.random() * 100).toString();

    // select color
    const color = colors[indexColor];

    // icon path
    const iconPath = chrome.runtime.getURL(`icons/icon${popupIndex}.png`);

    // change action properties
    chrome.action.setTitle({ title: name });
    chrome.action.setIcon({ path: iconPath });

    // remove popup UI on that the chrome.action.onClick can work in the background.js
    // that function does not work if the popup ui exists
    chrome.action.setPopup({ popup: "" });


    chrome.action.setBadgeText({ text: number });
    chrome.action.setBadgeTextColor({ color: "#ffffff" });
    chrome.action.setBadgeBackgroundColor({ color: color });

    // more change done just look at - https://developer.chrome.com/docs/extensions/reference/api/action
}