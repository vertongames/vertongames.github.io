function atb(content){ // add to body (atb)
  document.body.innerHTML += content;
  
}

function sb(content){ // set body (sb), reccomend to not use
  document.body.innerHTML = content;
}

atb("hello world");
