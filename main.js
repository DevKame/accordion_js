"use strict";

let titles = document.querySelectorAll(".title");
let contents = document.querySelectorAll(".content");

// every title needs a clickevent
titles.forEach(t => {
  t.addEventListener("click", () => {

    // counter helps to make sure to ONLY use the setTimeout, when no previous content is visible
    let count = 0;


    //count and see if there is any content popped out:
    for(let i = 0 ; i < titles.length ; i++)
    {
        if(titles[i].classList.contains("on")) count++;
    }
    
    //if count > 0 some content is popped out, so wee need a timeout for the new content to wait until the previous content is hidden...
    if(count > 0)
    {
        for(let i = 0 ; i < titles.length ; i++)
        {
            titles[i].classList.remove("on");
        }
        setTimeout(() => { 
            t.classList.add("on");
        }, 300);
    }
    //otherwise we just pop it out without a timeout:
    else
    {
        t.classList.add("on");
    }
  });
});
//finished!