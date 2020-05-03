$(".wrapper").addClass("loaded");

$(".menu-header__icon").click(function (e) {
  $(this).toggleClass("active");
  $(".menu-header__menu").toggleClass("active");
  $("body").toggleClass("lock");
});

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

let tabBtn = document.querySelectorAll('.tab__navitem');
let tabBody = document.querySelectorAll('.tab__item')
tabBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    tabBtn.forEach(item => {
      item.classList.remove('active')
    })
    tabBody.forEach(item => {
      item.classList.remove('active')
    })
    e.target.classList.add('active')
    let target = e.target.getAttribute('data-tab')
    tabBody[target].classList.add('active')
  })
})