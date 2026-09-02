var showing;
var about = document.getElementById("about"); 
var habits = document.getElementById("habits"); 
var contect = document.getElementById("contect"); 
var inf_a = document.getElementById("inf_a");
var inf_c = document.getElementById("inf_c");
var inf_h = document.getElementById("inf_h");
showing = about;
show(about);

function trans(a){
  showing.className = "btn";
  a.className = "hover";
  showing = a; 
  show(showing);
}

function show(a){
  switch(a){
    case about:
      inf_a.style.display = "flex";
      inf_h.style.display = "none";
      inf_c.style.display = "none";
      break;
    case habits:
      inf_a.style.display = "none";
      inf_h.style.display = "flex";
      inf_c.style.display = "none";
      break;
    case contect:
      inf_a.style.display = "none";
      inf_h.style.display = "none";
      inf_c.style.display = "flex";
      break;
  }
}
