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
      "assets/img/Droplet_Character/Before/Character_Apron-03.svg"
    );

    $(".box2").css("height", "210px");
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
    $("#active_d_2").removeClass("active_2").addClass("active_1");
    $("#active_d_2_m").removeClass("active_2").addClass("active_1");
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
    $("#active_d_3").removeClass("active_2").addClass("active_1");
    $("#active_d_3_m").removeClass("active_2").addClass("active_1");
    $(".box2").css("height", "210px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});
$("#droppable4").droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/Droplet_Character/Before/maskover.svg"
    );
    $("#active_d_4").removeClass("active_2").addClass("active_1");
    $("#active_d_4_m").removeClass("active_2").addClass("active_1");
    $(".box2").css("height", "210px");
    $("#draggable" + slideIndex).hide();
    $(".block1b-text-container" + slideIndex).css("display", "block");
  },
});
$("#droppable5").droppable({
  drop: function (ui, event) {
    $(".block1b-image").attr(
      "src",
      "assets/img/Droplet_Character/After/BalajiPrecautions28.svg"
    );
    $("#active_d_5").removeClass("active_2").addClass("active_1");
    $("#active_d_5_m").removeClass("active_2").addClass("active_1");
    $(".box2").css("height", "210px");
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
var dropped = false;
$("#drag").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    if ($(window).width() < 900) {
      $("#drag").css("width", "30%");
    } else {
      $("#drag").css("width", "50%");
    }
    var target = document.getElementById("drag");

    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    $("#drag_img").attr(
      "src",
      "assets/img/Droplet_Character/Before/maskover.svg"
    );
    document.getElementById("drag_img").style.display = "block";
  },
  stop: function (event) {
    if (!dropped) {
      var target = document.getElementById("drag");
      target.style.opacity = 0;
      $("#drag_img").attr(
        "src",
        "assets/img/Droplet_Character/After/BalajiPrecautions28.svg"
      );
    }
  },
});

$("#drag").draggable({
  appendTo: "body",

  helper: "clone",
  cursor: "move",
  tolerance: "fit",
  start: function (event, ui) {
    $("#drag").draggable("instance").offset.click = {
      left: Math.floor(ui.helper.width() / 2),
      top: Math.floor(ui.helper.height() / 2),
    };
  },
  helper: function (event) {
    return $("#drag").attr("src", "assets/img/Assets/Gloves.svg");
  },
});
$("#drop").droppable({
  drop: function (event, ui) {
    $("#drop").html('<img src="assets/img/Assets/Gloves.svg">');
    $("#drag").hide();
    $("#active_r_1").removeClass("active_2").addClass("active_1");
    $("#active_r_1_m").removeClass("active_2").addClass("active_1");
    dropped = true;
    var target = document.getElementById("drop");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_nex").style.display = "block";
    document.getElementById("drop_drag_next_con").style.display = "block";
  },
});

var dropped1 = false;
$("#drag_1").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    $("#drag_1").attr("src", "assets/img/Assets/Apron.svg");
    var target = document.getElementById("drag_1");
    target.style.width = "25%";
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    $("#drag_img_1").attr(
      "src",
      "assets/img/Droplet_Character/Before/maskslide.svg"
    );
    document.getElementById("drag_img_1").style.display = "block";
  },
  stop: function (event) {
    if (!dropped1) {
      var target = document.getElementById("drag_1");
      target.style.opacity = 0;
      $("#drag_img_1").attr(
        "src",
        "assets/img/Droplet_Character/Before/maskover.svg"
      );
    }
  },
});
$("#drag_1").draggable({
  appendTo: "body",

  helper: "clone",
  cursor: "move",
  tolerance: "fit",
  start: function (event, ui) {
    $("#drag_1").draggable("instance").offset.click = {
      left: Math.floor(ui.helper.width() / 2),
      top: Math.floor(ui.helper.height() / 2),
    };
  },
  helper: function (event) {
    return $("#drag_1").html('<img src="assets/img/Assets/Gloves.svg">');
  },
});
$("#drop_1").droppable({
  drop: function (event, ui) {
    $("#drop_1").html('<img src="assets/img/Assets/Apron.svg">');
    $("#drag_1").hide();
    $("#active_r_2").removeClass("active_2").addClass("active_1");
    $("#active_r_2_m").removeClass("active_2").addClass("active_1");
    dropped1 = true;
    var target = document.getElementById("drop_1");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_nex_1").style.display = "block";
    document.getElementById("drop_drag_next_con_1").style.display = "block";
  },
});

var dropped2 = false;
$("#drag_2").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag_2");
    target.style.width = "30%";
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    $("#drag_img_2").attr(
      "src",
      "assets/img/Droplet_Character/After/Character_Normal-03.svg"
    );
    document.getElementById("drag_img_2").style.display = "block";
  },
  stop: function (event) {
    if (!dropped2) {
      var target = document.getElementById("drag_2");
      target.style.opacity = 0;
      $("#drag_img_2").attr(
        "src",
        "assets/img/Droplet_Character/After/Character_Apron%20Dispose-03.svg"
      );
    }
  },
});
$("#drag_2").draggable({
  appendTo: "body",

  helper: "clone",
  cursor: "move",
  tolerance: "fit",
  start: function (event, ui) {
    $("#drag_2").draggable("instance").offset.click = {
      left: Math.floor(ui.helper.width() / 2),
      top: Math.floor(ui.helper.height() / 2),
    };
  },
  helper: function (event) {
    return $("#drag_2").attr("src", "assets/img/Assets/Mask_1.svg");
  },
});
$("#drop_2").droppable({
  accept: "#drag_2",
  drop: function (event, ui) {
    $("#drop_2").html('<img src="assets/img/Assets/Mask_1.svg">');
    $("#drag_2").hide();
    $("#active_r_5").removeClass("active_2").addClass("active_1");
    $("#active_r_5_m").removeClass("active_2").addClass("active_1");
    dropped2 = true;
    var target = document.getElementById("drop_2");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_nex_2").style.display = "block";
    document.getElementById("drop_drag_next_con_2").style.display = "block";
  },
});

var dropped3 = false;
$("#drag_3").draggable({
  helper: "original",
  revert: "invalid",
  drag: function (event, ui) {
    var target = document.getElementById("drag_3");
    target.style.width = "30%";
    target.style.top = 0;
    target.style.left = 0;
    target.style.right = 0;
    target.style.bottom = 0;
    target.style.opacity = 1;
    $("#drag_img_3").attr(
      "src",
      "assets/img/Droplet_Character/After/Character_Apron%20Dispose-03.svg"
    );
    document.getElementById("drag_img_3").style.display = "block";
  },
  stop: function (event) {
    if (!dropped3) {
      var target = document.getElementById("drag_3");
      target.style.opacity = 0;
      $("#drag_img_3").attr(
        "src",
        "assets/img/Droplet_Character/Before/maskslide.svg"
      );
    }
  },
});
$("#drag_3").draggable({
  appendTo: "body",

  helper: "clone",
  cursor: "move",
  tolerance: "fit",
  start: function (event, ui) {
    $("#drag_3").draggable("instance").offset.click = {
      left: Math.floor(ui.helper.width() / 2),
      top: Math.floor(ui.helper.height() / 2),
    };
  },
  helper: function (event) {
    return $("#drag_3").attr("src", "assets/img/Assets/Face shield.svg");
  },
});
$("#drop_3").droppable({
  drop: function (event, ui) {
    var target = document.getElementById("drag_3");
    $("#drop_3").html('<img src="assets/img/Assets/Face shield.svg">');
    $("#drag_3").hide();
    $("#active_r_4").removeClass("active_2").addClass("active_1");
    $("#active_r_4_m").removeClass("active_2").addClass("active_1");
    dropped3 = true;
    var target = document.getElementById("drop_3");
    target.style.opacity = 0.5;
    document.getElementById("drop_drag_next_con_3").style.display = "block";
    document.getElementById("drop_drag_next_nex_3").style.display = "block";
  },
});

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
    $("#active_d_1").removeClass("active_2").addClass("active_1");
    $("#active_d_1_m").removeClass("active_2").addClass("active_1");
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
    $("#active_r_6").removeClass("active_2").addClass("active_1");
    $("#active_r_6_m").removeClass("active_2").addClass("active_1");
    var target = document.getElementById("drop_d_2");
    document.getElementById("drop_drag_next_con_d_2").style.display = "block";
    document.getElementById("drop_drag_next_nex_d_2").style.display = "block";
    document.getElementById("drop_drag_next_nex_d_4").style.display = "block";
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
    $("#active_r_3").removeClass("active_2").addClass("active_1");
    $("#active_r_3_m").removeClass("active_2").addClass("active_1");
    var target = document.getElementById("drop_d_3");
    document.getElementById("drop_drag_next_con_d_3").style.display = "block";
    document.getElementById("drop_drag_next_nex_d_3").style.display = "block";
  },
});

if ($(window).width() > 600) {
  $(".rwl_1").addClass("rwl");
} else {
  $(".rwl_1").removeClass("rwl");
}

function touchHandler(event) {
  var touch = event.changedTouches[0];

  var simulatedEvent = document.createEvent("MouseEvent");
  simulatedEvent.initMouseEvent(
    {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
    }[event.type],
    true,
    true,
    window,
    1,
    touch.screenX,
    touch.screenY,
    touch.clientX,
    touch.clientY,
    false,
    false,
    false,
    false,
    0,
    null
  );

  touch.target.dispatchEvent(simulatedEvent);
  event.preventDefault();
}

var lastTouchY = 0;
var preventPullToRefresh = false;

window.addEventListener("load", function () {
  var maybePreventPullToRefresh = false;
  var lastTouchY = 0;
  var touchstartHandler = function (e) {
    if (e.touches.length != 1) return;
    lastTouchY = e.touches[0].clientY;
    // Pull-to-refresh will only trigger if the scroll begins when the
    // document's Y offset is zero.
    maybePreventPullToRefresh = window.pageYOffset == 0;
  };

  var touchmoveHandler = function (e) {
    var touchY = e.touches[0].clientY;
    var touchYDelta = touchY - lastTouchY;
    lastTouchY = touchY;

    if (maybePreventPullToRefresh) {
      // To suppress pull-to-refresh it is sufficient to preventDefault the
      // first overscrolling touchmove.
      maybePreventPullToRefresh = false;
      if (touchYDelta > 0) {
        e.preventDefault();
        return;
      }
    }
  };

  document.addEventListener("touchstart", touchstartHandler, false);
  document.addEventListener("touchmove", touchmoveHandler, false);
});
