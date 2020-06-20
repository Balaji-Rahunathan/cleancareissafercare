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

$("#droppable" + slideIndex).droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/Droplet_Character/After/Character_Normal-03.svg"
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
      "assets/img/Droplet_Character/Before/Character_Apron-03.svg"
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
      "assets/img/Droplet_Character/After/Character_Mask-03.svg"
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
      "assets/img/Droplet_Character/After/Character_Gloves-03.svg"
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

$(function () {
  $("#drag").draggable({
    helper: "original",
    revert: "invalid",
    drag: function (event, ui) {
      $("#drag").attr("src", "assets/img/Assets/Gloves.svg");

      var target = document.getElementById("drag");

      target.style.maxwidth = "24%";
      target.style.maxHeight = "24%";
      target.style.top = 0;
      target.style.left = 0;
      target.style.right = 0;
      target.style.bottom = 0;
      target.style.opacity = 1;
      document.getElementById("drag_img").style.display = "block";
    },
  });
  $("#drop").droppable({
    accept: "#drag",
    drop: function (event, ui) {
      var target = document.getElementById("drag");
      target.style.opacity = 0.5;
      target.style.maxwidth = "24%";
      target.style.maxHeight = "24%";

      document.getElementById("drop_drag_next_nex").style.display = "block";
      document.getElementById("drop_drag_next_con").style.display = "block";
    },
  });
});

$(function () {
  $("#drag_1").draggable({
    helper: "original",
    revert: "invalid",
    drag: function (event, ui) {
      $("#drag_1").attr("src", "assets/img/Assets/Apron.svg");

      var target = document.getElementById("drag_1");
      target.style.maxwidth = "24%";
      target.style.maxHeight = "24%";
      target.style.top = 0;
      target.style.left = 0;
      target.style.right = 0;
      target.style.bottom = 0;
      target.style.opacity = 1;
      document.getElementById("drag_img_1").style.display = "block";
    },
  });
  $("#drop_1").droppable({
    accept: "#drag_1",
    drop: function (event, ui) {
      var target = document.getElementById("drag_1");
      target.style.opacity = 0.5;
      target.style.maxwidth = "24%";
      target.style.maxHeight = "24%";
      document.getElementById("drop_drag_next_nex_1").style.display = "block";
      document.getElementById("drop_drag_next_con_1").style.display = "block";
    },
  });
});

$(function () {
  $("#drag_2").draggable({
    helper: "original",
    revert: "invalid",
    drag: function (event, ui) {
      $("#drag_2").attr("src", "assets/img/Assets/Mask_1.svg");

      var target = document.getElementById("drag_2");
      target.style.maxwidth = "24%";
      target.style.maxHeight = "24%";
      target.style.top = 0;
      target.style.left = 0;
      target.style.right = 0;
      target.style.bottom = 0;
      target.style.opacity = 1;
      document.getElementById("drag_img_2").style.display = "block";
    },
  });
  $("#drop_2").droppable({
    accept: "#drag_2",
    drop: function (event, ui) {
      var target = document.getElementById("drag_2");
      target.style.opacity = 0.5;
      target.style.maxwidth = "24%";
      target.style.maxHeight = "24%";
      document.getElementById("drop_drag_next_nex_2").style.display = "block";
      document.getElementById("drop_drag_next_con_2").style.display = "block";
    },
  });
});

$(function () {
  $("#drag_3").draggable({
    helper: "original",
    revert: "invalid",
    drag: function (event, ui) {
      $("#drag_3").attr("src", "assets/img/Assets/Sanitizer.svg");

      var target = document.getElementById("drag_3");
      target.style.maxwidth = "24%";
      target.style.maxHeight = "24%";
      target.style.top = 0;
      target.style.left = 0;
      target.style.right = 0;
      target.style.bottom = 0;
      target.style.opacity = 1;
      document.getElementById("drag_img_3").style.display = "block";
    },
  });
  $("#drop_3").droppable({
    accept: "#drag_3",
    drop: function (event, ui) {
      var target = document.getElementById("drag_3");
      target.style.opacity = 0.5;
      target.style.maxwidth = "24%";
      target.style.maxHeight = "24%";
      document.getElementById("drop_drag_next_con_3").style.display = "block";
    },
  });
});

if ($(window).width() > 600) {
  $(".rwl_1").addClass("rwl");
} else {
  $(".rwl_1").removeClass("rwl");
}
