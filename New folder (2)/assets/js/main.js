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
    $(".block2b-image-container").css(
      "background-image",
      "url('../assets/img/reverse/Sleeve_3.svg')"
    );
  },
});
$("#draggable6").draggable({
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
    $(".block2c-image-container").css(
      "background-image",
      "url('../assets/img/reverse/Sleeve_2.svg')"
    );
  },
});
$("#droppable" + slideIndex).droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/Airbone_Character/Before/Character_Long Sleeve-03.svg"
    );
    $(".box1").css("height", "330px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});
$("#droppable2").droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/Airbone_Character/Before/Character_ffp2-03.svg"
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
      "assets/img/Airbone_Character/Before/Character_Face shield-03.svg"
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
      "assets/img/Airbone_Character/Before/Balaji Precautions-03.svg"
    );
    $(".box4").css("height", "210px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});
$("#droppable5").droppable({
  drop: function (ui, event) {
    $(".apron").attr("src", "assets/img/Assets/Gloves.svg");
    $(".apron-image-container").css("height", "auto");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});
$("#droppable6").droppable({
  drop: function (ui, event) {
    $(".apron1").attr("src", "assets/img/Assets/Face shield.svg");
    $(".apron-image-container").css("height", "auto");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});
$("#draggable7").draggable({
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
$("#draggable8").draggable({
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
$("#droppable7").droppable({
  drop: function (ui, event) {
    $(".apron2").attr("src", "assets/img/Assets/Mask_1.svg");
    $(".apron-image-container").css("height", "auto");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
    $(".block2d-image-container").css(
      "background-image",
      "url('../assets/img/reverse/Sleeve_1.svg')"
    );
  },
});
$("#droppable8").droppable({
  drop: function (ui, event) {
    $(".apron3").attr("src", "assets/img/Assets/Apron.svg");
    $(".apron-image-container").css("height", "auto");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
    $(".block2d-image-container").css(
      "background-image",
      "url('../assets/img/reverse/Normal.svg')"
    );
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
      target.style.opacity = 0.5;
      target.style.width = "100px";
      target.style.width = "100px";
      target.style.top = 0;
      target.style.left = 0;
      target.style.right = 0;
      target.style.bottom = 0;
    },
  });
  $("#drop").droppable({
    accept: "#drag",
    drop: function (event, ui) {
      var target = document.getElementById("drag");
      target.style.opacity = 0.5;
      target.style.width = "100px";
      target.style.width = "100px";
      document.getElementById("drag_img").style.display = "block";
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
      $("#drag_1").attr("src", "assets/img/Assets/Face%20shield.svg");

      var target = document.getElementById("drag_1");
      target.style.opacity = 0.5;
      target.style.width = "50px";
      target.style.width = "50px";
      target.style.top = 0;
      target.style.left = 0;
      target.style.right = 0;
      target.style.bottom = 0;
    },
  });
  $("#drop_1").droppable({
    accept: "#drag_1",
    drop: function (event, ui) {
      var target = document.getElementById("drag_1");
      target.style.opacity = 0.5;
      target.style.width = "100px";
      target.style.width = "100px";
      document.getElementById("drag_img_1").style.display = "block";
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
      target.style.opacity = 0.5;
      target.style.width = "100px";
      target.style.width = "100px";
      target.style.top = 0;
      target.style.left = 0;
      target.style.right = 0;
      target.style.bottom = 0;
    },
  });
  $("#drop_2").droppable({
    accept: "#drag_2",
    drop: function (event, ui) {
      var target = document.getElementById("drag_2");
      target.style.opacity = 0.5;
      target.style.width = "100px";
      target.style.width = "100px";
      document.getElementById("drag_img_2").style.display = "block";
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
      $("#drag_3").attr("src", "assets/img/Assets/Apron.svg");

      var target = document.getElementById("drag_3");
      target.style.opacity = 0.5;
      target.style.width = "100px";
      target.style.width = "100px";
      target.style.top = 0;
      target.style.left = 0;
      target.style.right = 0;
      target.style.bottom = 0;
    },
  });
  $("#drop_3").droppable({
    accept: "#drag_3",
    drop: function (event, ui) {
      var target = document.getElementById("drag_3");
      target.style.opacity = 0.5;
      target.style.width = "100px";
      target.style.width = "100px";
      document.getElementById("drag_img_3").style.display = "block";
      document.getElementById("drop_drag_next_nex_3").style.display = "block";
      document.getElementById("drop_drag_next_con_3").style.display = "block";
    },
  });
});
