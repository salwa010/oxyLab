const boxes = document.querySelectorAll(".box");
const parent = document.querySelector(".create-card");


Array.from(boxes).map((box, index) => {
  box.addEventListener("click", () => {
    let copy = [...boxes];
    let nw = Array.from(boxes).slice(index);
    copy.splice(index);

    let arr = [...nw, ...copy];

    arr.map((ar) => {
      parent.append(ar);
    });
  });
});




function myFunction(){
  var element = document.getElementById("side-bar");
    element.classList.toggle("side-bar-2");
    
}