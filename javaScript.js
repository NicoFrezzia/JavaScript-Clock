const $ = (selector) => {
    return document.querySelector(selector);
}
const hour = $('.hour');
const dot = $('.dot');
const min = $('.min');
const week = $('.week');
let showDot = true

function update() {
    showDot = !showDot;
    const now = new Date();

    //if statement to make the dot flash 
    if (showDot) {
        dot.classList.add('invisible');
    } else {
        dot.classList.remove('invisible');
    }

    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    
    //make the day of the week highlight 
    Array 
        .from(week.children)
        .forEach(ele => {
            ele.classList.remove('highlight')
        }
    );
    week 
        .children[now.getDay()]
        .classList
        .add('highlight');
};

setInterval(update, 500);