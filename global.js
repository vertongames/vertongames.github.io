function atb(content){ // add to body (atb)
  document.body.innerHTML += content;
  
}

function sb(content){ // set body (sb), reccomend to not use
  document.body.innerHTML = content;
}

function sh(content){ // set head (sh), reccomend to not use
  document.head.innerHTML = content;
}

function ath(content){ // add to head (ath)
  document.head.innerHTML += content;
}

document.title = "skibdii toilet";

atb("hello world");
