function pintar (col){
    document.getElementById('cuadrado1').style.backgroundColor=col;
}

function myFunction() {
    const node = document.getElementById("myList2").lastElementChild;
    document.getElementById("myList1").appendChild(node);
  }
function myFun() {
    const node = document.getElementById("myList3").lastElementChild;
    document.getElementById("myList4").appendChild(node);
  }

const cli = document.querySelector("click");
cli.addEventListener("Click", mifun);

function mifun(){
    alert('La serie tiene un total de 1223 episodios');
}