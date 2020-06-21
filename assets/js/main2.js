var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("container-block1");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

$("#draggable" + slideIndex).draggable({
  stop: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
  drag: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.opacity = 0.5;
  },
});

$("#draggable2").draggable({
  stop: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
  drag: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.opacity = 0.5;
  },
});
$("#draggable3").draggable({
  stop: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
  drag: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.opacity = 0.5;
  },
});
$("#draggable4").draggable({
  stop: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
  drag: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.opacity = 0.5;
  },
});

$("#draggable5").draggable({
  stop: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
  drag: function (event, ui) {
    var target = document.querySelector("#draggable" + slideIndex);
    target.style.opacity = 0.5;
  },
});

$("#droppable" + slideIndex).droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/Airbone_Character/Before/Character_Normal-03.svg"
    );
    $(".box1").css("height", "210px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});
$("#droppable2").droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/Airbone_Character/Before/Character_Long%20Sleeve-03.svg"
    );
    $(".box2").css("height", "210px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});
$("#droppable3").droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/Airbone_Character/Before/Character_ffp2-03.svg"
    );
    $(".box3").css("height", "210px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});
$("#droppable4").droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/Airbone_Character/Before/Character_Face%20shield-03.svg"
    );
    $(".box4").css("height", "210px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});

$("#droppable5").droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/Airbone_Character/Before/Balaji%20Precautions-03.svg"
    );
    $(".box4").css("height", "210px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});

$(document).ready(function () {
  var divs = $(".mydivs>.d_d_div");
  var now = 0; // currently shown div
  divs.hide().first().show(); // hide all divs except first
  $("button[name=next]").click(function () {
    divs.eq(now).hide();
    now = now + 1 < divs.length ? now + 1 : 0;
    divs.eq(now).show(); // show next
  });
  $("button[name=prev]").click(function () {
    divs.eq(now).hide();
    now = now > 0 ? now - 1 : divs.length - 1;
    divs.eq(now).show(); // show previous
  });
});

$("#drag").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    $("#drag").attr("src", "assets/img/Assets/Gloves.svg");
    var target = document.getElementById("drag");
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    document.getElementById("drag_img").style.display = "block";
  },
});
$("#drop").droppable({
  drop: function (event, ui) {
    $("#drop").html('<img src="assets/img/Assets/Gloves.svg">');
    $("#drag").hide();
    var target = document.getElementById("drop");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_nex").style.display = "block";
    document.getElementById("drop_drag_next_con").style.display = "block";
  },
});

$("#drag_1").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    $("#drag_1").attr("src", "assets/img/Assets/Gown.svg");
    var target = document.getElementById("drag_1");
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    document.getElementById("drag_img_1").style.display = "block";
  },
});
$("#drop_1").droppable({
  drop: function (event, ui) {
    $("#drop_1").html('<img src="assets/img/Assets/Gown.svg">');
    $("#drag_1").hide();
    var target = document.getElementById("drop_1");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_nex_1").style.display = "block";
    document.getElementById("drop_drag_next_con_1").style.display = "block";
  },
});

$("#drag_2").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    $("#drag_2").attr("src", "assets/img/Assets/Sanitizer.svg");
    var target = document.getElementById("drag_2");

    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    document.getElementById("drag_img_2").style.display = "block";
  },
});
$("#drop_2").droppable({
  drop: function (event, ui) {
    $("#drop_2").html('<img src="assets/img/Assets/Sanitizer.svg">');
    $("#drag_2").hide();
    var target = document.getElementById("drop_2");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_nex_2").style.display = "block";
    document.getElementById("drop_drag_next_con_2").style.display = "block";
  },
});

$("#drag_3").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    $("#drag_3").attr("src", "assets/img/Assets/Face shield & Mask.svg");
    var target = document.getElementById("drag_3");
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    document.getElementById("drag_img_3").style.display = "block";
  },
});
$("#drop_3").droppable({
  drop: function (event, ui) {
    $("#drop_3").html('<img src="assets/img/Assets/Face shield & Mask.svg">');
    $("#drag_3").hide();
    var target = document.getElementById("drop_3");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_nex_3").style.display = "block";
    document.getElementById("drop_drag_next_con_3").style.display = "block";
  },
});

$("#drag_4").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    $("#drag_4").attr("src", "assets/img/Assets/Sanitizer.svg");

    var target = document.getElementById("drag_4");

    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    document.getElementById("drag_img_4").style.display = "block";
  },
});
$("#drop_4").droppable({
  drop: function (event, ui) {
    $("#drop_4").html('<img src="assets/img/Assets/Sanitizer.svg">');
    $("#drag_4").hide();
    var target = document.getElementById("drop_4");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_nex_4").style.display = "block";
    document.getElementById("drop_drag_next_con_4").style.display = "block";
  },
});

if ($(window).width() > 600) {
  $(".rwl_1").addClass("rwl");
} else {
  $(".rwl_1").removeClass("rwl");
}

$("#drag_d_1").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag_d_1");

    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
});
$("#drop_d_1").droppable({
  drop: function (event, ui) {
    $("#drag_img_d_1").css("display", "block");
    $("#drop_d_1").hide();
    $("#drag_d_1").hide();
    $(".block1b-text-container").css("display", "block");
  },
});
$("#drag_d_2").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag_d_2");

    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
});
$("#drop_d_2").droppable({
  drop: function (event, ui) {
    $("#drag_img_d_2").css("display", "block");
    $("#drop_d_2").hide();
    $("#drag_d_2").hide();
    var target = document.getElementById("drop_d_2");
    document.getElementById("drop_drag_next_con_d_2").style.display = "block";
    document.getElementById("drop_drag_next_nex_d_2").style.display = "block";
  },
});

$("#drag_d_3").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag_d_3");

    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
  },
});
$("#drop_d_3").droppable({
  drop: function (event, ui) {
    $("#drag_img_d_3").css("display", "block");
    $("#drop_d_3").hide();
    $("#drag_d_3").hide();
    var target = document.getElementById("drop_d_3");
    document.getElementById("drop_drag_next_con_d_3").style.display = "block";
    document.getElementById("drop_drag_next_nex_d_3").style.display = "block";
  },
});
