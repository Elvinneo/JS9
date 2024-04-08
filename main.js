let btn = document.getElementById("menu");
const liste = document.querySelector(".list");
let yoxla = true;
btn.addEventListener("click", ()=>deyis());
const drop = document.createElement("div");
document.getElementById("yuxari").style.visibility = "hidden";


function deyis() {
  if (yoxla) {
    document.getElementById("asagi").style.visibility = "hidden";
    document.getElementById("yuxari").style.visibility = "visible";
    drop.classList.add("drop")
    const esas = document.createElement("ul");
    const li1 = document.createElement("li");
    li1.textContent='Menu 1'
    const li2 = document.createElement("li");
    li2.textContent='Menu 2'
    const li3 = document.createElement("li");
    li3.textContent='Menu 3'
    liste.append(drop)
    drop.append(esas)
    esas.append(li1,li2,li3)
    yoxla=false;
  }
  else{
    drop.innerHTML=''
    yoxla=true;
    document.getElementById("yuxari").style.visibility = "hidden";
    document.getElementById("asagi").style.visibility = "visible";
  }
}
