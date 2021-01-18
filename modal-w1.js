let modal = document.querySelectorAll('.overlay');
let btn = document.querySelectorAll('.my-btn');
let spClose = document.getElementsByClassName('closex');
const docBtns = document.querySelectorAll('a[data-document]'),
  docs = document.querySelectorAll('.document');
console.log("js start");
console.log(docBtns);


for (const _btn of btn) {
  _btn.onclick = function () {
    console.log(_btn);
    for (let j = 0; j < modal.length; j++) {
      modal[j].style.display = "block";
  
      
    }
    
  };

}

// docBtns[0].onclick = function () {
//   docs[0].style.display = "block";
// };



spClose[0].onclick = function () {
  modal[0].style.display = "none";
};

  window.onclick = function (event) {
    if (event.target == modal[0]) {
      modal[0].style.display = "none";
    }
  };