$(function() {
  $('.chart').easyPieChart({
    scaleColor: "transparent",
    barColor: '#975a5f',
    trackColor:	"#212121",
    lineWidth: 7,
    size: 90,
    animate: 1000
  });
});

$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 650 || screen.width < 992) {
      $('#showme').slideUp(1000);
    } else {
      $("#showme").slideDown(1000);
    }
  });
});

var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

$('.img-resizing').on( "click", function() {
    $("#showme").slideUp(1000);
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    $(window).scroll(function() {
      modal.style.display = "none";
    });
});

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
