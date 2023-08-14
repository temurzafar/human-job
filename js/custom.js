$(document).ready(function(){



$(".index_down_btn").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});



//////////CAROUSEL
$('.index_partner_carusel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4,
        }
    }
})
$('.page_about_team_carusel').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4,
        }
    }
})
$('.page_about_partners_carusel_main').owlCarousel({
    loop:true,
    margin: 10,
    dots:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6,
        }
    }
})


$(document).on('click', '.regional_office_marker img', function(){
  var id_div = $(this).parent('div').attr('id');
  var id_path = id_div + '_path';
  $('#'+id_div).addClass('show_text');
  $('#'+id_path).addClass('clicked');
});
$('body:not(.regional_office_marker)').on('click', function(){
  $('.regional_office_marker').removeClass('show_text');
  $('.regional_office svg path').removeClass('clicked');
});

function index_map_marker(){
  if ($('.regional_office').length) {
    var bt,bl,w,h,ww,hh,t,l,id;
    bt = $('.regional_office .col-md-12').offset().top;
    bl = $('.regional_office .col-md-12').offset().left;
    $('.regional_office_marker').each(function(){
      id = $(this).attr('id') + '_path';
      w = $('#' + id)[0].getBoundingClientRect().width;
      h = $('#' + id)[0].getBoundingClientRect().height;
      ww = w/2;
      hh = h/2;
      t = $('#' + id).offset().top;
      l = $('#' + id).offset().left;
      if ($('.regional_office_marker img').width()<16) {
        $(this).css({'top':t+hh-bt-7.5,'left':l+ww-bl-7.5, 'right': 'auto'});
      }else{
        $(this).css({'top':t+hh-bt-11.5,'left':l+ww-bl-11.5, 'right': 'auto'});
      }
    });
  }
}

if ($(window).width()<1200) {
  index_map_marker()
}
$('.regional_office path').hover(function(){console.log('sss')},function(){console.log('ddd')})


$("#myTab a").click(function(e){
  e.preventDefault();
  $(this).tab('show');

  setTimeout(function(){

    $('.index_about_content .tab-pane .col-md-8 > div').each(function(){
      if ($(this).text().length > 730) {
        $(this).addClass('hide_text');
      }
    });

    if ($('.index_about_content .tab-pane.active .col-md-8 > div').hasClass('hide_text')){
      $('.index_about_content_show_hide_btn').addClass('show');
      $('.index_about_content_show_hide_btn').removeClass('hide');
      $('.index_about_content_show_hide_btn').removeClass('str_up');
    }else{
      $('.index_about_content_show_hide_btn').removeClass('show');
      $('.index_about_content_show_hide_btn').addClass('hide');
    }

  },300)
});

$('.index_about_content .tab-pane .col-md-8 > div').each(function(){
  if ($(this).text().length > 730) {
    $(this).addClass('hide_text');
  }
});
if (!$('.index_about_content .tab-pane.active .col-md-8 > div').hasClass('hide_text')) {
  $('.index_about_content_show_hide_btn').addClass('hide');
}else{
  $('.index_about_content_show_hide_btn').addClass('show');
}

$('.index_about_content_show_hide_btn').click(function(){

    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1500);
  $('.index_about_content .tab-pane.active .col-md-8 > div').toggleClass('hide_text');
  $(this).toggleClass('str_up');
});


/////////////////////////////////////////// ABOUT PAGE

$(document).on('click', '.page_about_text_btn', function(){
  $('.page_about_text_content').toggleClass('about_more_text');
  $('.page_about_text_btn').toggleClass('str_up');
});
$(document).on('click', '.page_about_certificates_img', function(){
  var sertificat_img = $(this).children('img').attr('src');
  $('.certificates_modal img').attr('src', sertificat_img);
});
$(document).on('click', '#page_about_main_text > a', function(event){
  event.preventDefault();
  var id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);

  $('.page_about_main_text_content').toggleClass('page_about_main_text_content_more_text');
  $(this).toggleClass('str_up');
});




/////////////////////////////////////////// CONTACTS PAGE

var row_full_height = 0;
function contact_region_info_block_height(){
  var row_height = 0;
  $('.page_contacts_main_info .row').each(function(key){
    if (key < 2) {
      row_height += $(this).height();
      if ($(window).width() < 992 || key > 1) {
        $('.page_contacts_main_info .container').css('max-height', row_height-20);
      }else{
        $('.page_contacts_main_info .container').css('max-height', row_height-20);
      }
    }
  });
}
contact_region_info_block_height()
$(window).resize(function(){
  setTimeout(function(){
    contact_region_info_block_height()
  },500)
  calendar_position($('.calendar_btn'), $('.calendar'));
  index_map_marker()
});

$(document).on('click', '.page_contacts_main_info_btn_more', function(){
  $('.page_contacts_main_info .container').toggleClass('page_contacts_main_info_more_blocks');
  $(this).toggleClass('str_up');
});



/////////////////////////////////////////// PAGE JOB_COUNTRY


$(document).on('click', '#page_job_country_main_text > a', function(event){
  event.preventDefault();
  var id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);

  $('.page_job_country_main_text_content').toggleClass('page_job_country_main_text_content_more_text');
  $(this).toggleClass('str_up');
});

////CALENDAR
if ($('.calendar').length) {
  var Calendar = function(t) {
      this.divId = t.RenderID ? t.RenderID : '[data-render="calendar"]', this.DaysOfWeek = t.DaysOfWeek ? t.DaysOfWeek : ["", "", "", "", "", "", ""], this.Months = t.Months ? t.Months : ["01.", "02.", "03.", "04.", "05.", "06.", "07.", "08.", "09.", "10.", "11.", "12."];
      var e = new Date;
      this.CurrentMonth = e.getMonth(), this.CurrentYear = e.getFullYear();
      var r = t.Format;
      this.f = "string" == typeof r ? r.charAt(0).toUpperCase() : "M"
  };
  Calendar.prototype.nextMonth = function() {
      11 == this.CurrentMonth ? (this.CurrentMonth = 0, this.CurrentYear = this.CurrentYear + 1) : this.CurrentMonth = this.CurrentMonth + 1, this.divId = '[data-active="false"] .render', this.showCurrent()
  }, Calendar.prototype.prevMonth = function() {
      0 == this.CurrentMonth ? (this.CurrentMonth = 11, this.CurrentYear = this.CurrentYear - 1) : this.CurrentMonth = this.CurrentMonth - 1, this.divId = '[data-active="false"] .render', this.showCurrent()
  }, Calendar.prototype.previousYear = function() {
      this.CurrentYear = this.CurrentYear - 1, this.showCurrent()
  }, Calendar.prototype.nextYear = function() {
      this.CurrentYear = this.CurrentYear + 1, this.showCurrent()
  }, Calendar.prototype.showCurrent = function() {
      this.Calendar(this.CurrentYear, this.CurrentMonth)
  }, Calendar.prototype.checkActive = function() {
      1 == document.querySelector(".months").getAttribute("class").includes("active") ? document.querySelector(".months").setAttribute("class", "months") : document.querySelector(".months").setAttribute("class", "months active"), "true" == document.querySelector(".month-a").getAttribute("data-active") ? (document.querySelector(".month-a").setAttribute("data-active", !1), document.querySelector(".month-b").setAttribute("data-active", !0)) : (document.querySelector(".month-a").setAttribute("data-active", !0), document.querySelector(".month-b").setAttribute("data-active", !1)), setTimeout(function() {
          document.querySelector(".calendar .header").setAttribute("class", "header active")
      }, 200), document.querySelector("body").setAttribute("data-theme", this.Months[document.querySelector('[data-active="true"] .render').getAttribute("data-month")].toLowerCase())
  }, Calendar.prototype.Calendar = function(t, e) {
      "number" == typeof t && (this.CurrentYear = t), "number" == typeof t && (this.CurrentMonth = e);
      var r = (new Date).getDate(),
          n = (new Date).getMonth(),
          a = (new Date).getFullYear(),
          o = new Date(t, e, 1).getDay(),
          i = new Date(t, e + 1, 0).getDate(),
          u = 0 == e ? new Date(t - 1, 11, 0).getDate() : new Date(t, e, 0).getDate(),
          s = "<span>" + this.Months[e] + " &nbsp; " + t + "</span>",
          d = '<div class="table">';
      d += '<div class="row head">';
      for (var c = 0; c < 7; c++) d += '<div class="cell">' + this.DaysOfWeek[c] + "</div>";
      d += "</div>";
      for (var h, l = dm = "M" == this.f ? 1 : 0 == o ? -5 : 2, v = (c = 0, 0); v < 6; v++) {
          d += '<div class="row">';
          for (var m = 0; m < 7; m++) {
              if ((h = c + dm - o) < 1) d += '<div class="cell disable">' + (u - o + l++) + "</div>";
              else if (h > i) d += '<div class="cell disable">' + l++ + "</div>";
              else {
                  d += '<div class="cell' + (r == h && this.CurrentMonth == n && this.CurrentYear == a ? " active" : "") + '"><span>' + h + "</span></div>", l = 1
              }
              c % 7 == 6 && h >= i && (v = 10), c++
          }
          d += "</div>"
      }
      d += "</div>", document.querySelector('[data-render="month-year"]').innerHTML = s, document.querySelector(this.divId).innerHTML = d, document.querySelector(this.divId).setAttribute("data-date", this.Months[e] + " - " + t), document.querySelector(this.divId).setAttribute("data-month", e)
  }, window.onload = function() {
      var t = new Calendar({
          RenderID: ".render-a",
          Format: "M"
      });
      t.showCurrent(), t.checkActive();
      var e = document.querySelectorAll(".header [data-action]");
      for (i = 0; i < e.length; i++) e[i].onclick = function() {
          if (document.querySelector(".calendar .header").setAttribute("class", "header"), "true" == document.querySelector(".months").getAttribute("data-loading")) return document.querySelector(".calendar .header").setAttribute("class", "header active"), !1;
          var e;
          document.querySelector(".months").setAttribute("data-loading", "true"), this.getAttribute("data-action").includes("prev") ? (t.prevMonth(), e = "left") : (t.nextMonth(), e = "right"), t.checkActive(), document.querySelector(".months").setAttribute("data-flow", e), document.querySelector('.month[data-active="true"]').addEventListener("webkitTransitionEnd", function() {
              document.querySelector(".months").removeAttribute("data-loading")
          }), document.querySelector('.month[data-active="true"]').addEventListener("transitionend", function() {
              document.querySelector(".months").removeAttribute("data-loading")
          })
      }
  };
}

function calendar_position(necessary_position, set_position){
  if (necessary_position.length) {
    var t = $(necessary_position).offset().top;
    var l = $(necessary_position).offset().left;
    if ($(window).width() < 1200 && $(window).width() > 992) {
      $(set_position).css({'top':t+30, 'left':l-270});
      console.log('sss')
    }else if ($(window).width() < 992 && $(window).width() > 768) {
      $(set_position).css({'top':t+30, 'left':l-270});
    }else if ($(window).width() < 768) {
      $(set_position).css({'top':t+30, 'left':l-270});
    }else{
      $(set_position).css({'top':t+30, 'left':l-300});
    }
  }
}
calendar_position($('.calendar_btn'), $('.calendar'));

$(document).on('click', '.calendar_btn', function(){
  $('.calendar').slideToggle( "slow" );
});









var styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]

if($('#page_contacts_map_content').length){

function initMap() {


  var map,coordinate,locations,zoom,markerImage,infowindow;

  if ($(window).width()>1300) {
	  markerImage = {
	    url: 'images/icon_for_map.png', // url
	    scaledSize: new google.maps.Size(35, 35), // scaled size
	    origin: new google.maps.Point(0,0), // origin
	    anchor: new google.maps.Point(0, 0) // anchor
	  };
    zoom = 6.7;
  }else if ($(window).width()>800 && $(window).width()<1300) {
	  markerImage = {
	    url: 'images/icon_for_map.png', // url
	    scaledSize: new google.maps.Size(35, 35), // scaled size
	    origin: new google.maps.Point(0,0), // origin
	    anchor: new google.maps.Point(0, 0) // anchor
	  };
    zoom = 6;
  }else{
  	markerImage = 'images/icon_for_map.png';
    zoom = 4.7;
  }

  center_coordinate = {lat: 41.184230, lng: 64.724875};


  locations = [
    [$('.jizzak').html(), 40.114735, 67.848220, 8],
    [$('.samarkand').html(), 39.674594, 66.952606, 7],
    [$('.bukhara').html(), 39.748757, 64.428078, 6],
    [$('.kashkadarya').html(), 39.055107, 66.835430, 5],
    [$('.sirdaryo').html(), 40.498779, 68.774237, 4],
    [$('.fergana').html(), 40.387700, 71.783126, 3],
    [$('.andijan').html(), 40.780404, 72.332125, 2],
    [$('.navoi').html(), 40.100010, 65.382647, 1]
  ];

  map = new google.maps.Map(document.getElementById('page_contacts_map_content'), {
      center: center_coordinate,
      zoom: zoom,
      disableDefaultUI: true
  });

  map.setOptions({styles: styles});

  infowindow = new google.maps.InfoWindow();

  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      icon: markerImage
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }


}

initMap()

}






$(document).on('click', '.jq-multiple-select > input',function(){
	var this_ul = $(this).next('div').children('ul');
  $(this_ul).toggleClass('show');
  $('.jq-multiple-select ul').not(this_ul).removeClass('show')
});
$(document).on('click', 'body', function(e){
	if ($(e.target.offsetParent).is('ul.show')) {
  	return
  }
  else if ($(e.target.offsetParent).is('.jq-multiple-select')) {
  	return
  }else{
  	$('.jq-multiple-select ul').removeClass('show');
  }
});
$(document).on('click', '.show label', function(){
  var label = $(this);
  setTimeout(function(){
    var t = "";
    $(label).parents('ul').find('label').each(function(){
      if ($(this).children('input:checked').length){
        t += ", " + $(this).children('input:checked').next('span').html();
      }
    });
    $(label).parents('div').prev('input').attr('value',t.replace(', ',''))
  },10)
});
$(document).on('click', '.ms-select-all', function(){
  $(this).parent('ul').children('li').each(function(){
    if ($(this).find("input").length) {
      $(this).find('input').prop("checked",true);
    }
  });
});
$(document).on('click', '.ms-no-results', function(){
  var a = $(this);
  $(a).parent('ul').children('li').each(function(){
    if ($(this).find("input").length) {
      $(this).find('input').prop("checked",false);
    }
  });
  setTimeout(function(){
    $(a).parents('div').prev('input').attr('value', $(a).find('span').html())
  },20)
});

$(document).on('click', '.btnAddField', function(event){
  event.preventDefault();
  var clone_input = $(this).parent('.wrapCloneFields').find('input.for-clone-input').clone();
  clone_input.eq(0).appendTo($(this).parent('.wrapCloneFields').find('.input')).addClass('for-remove-input');
  $(this).parents('.wrapCloneFields').find('.btnAddRemove').addClass('show');
});
$(document).on('click', '.btnAddRemove', function(event){
  event.preventDefault();
  $(this).parents('.wrapCloneFields').find('.for-remove-input').eq(-1).remove();
  if ($(this).parents('.wrapCloneFields').find('.for-clone-input').length == 1) {
    $(this).removeClass('show');
  }
});
$('#phone-number').keydown(function (e) {
		var key = e.charCode || e.keyCode || 0;
		$phone = $(this);

		// Auto-format- do not expose the mask as the user begins to type
		if (key !== 8 && key !== 9) {
			if ($phone.val().length === 0 || $phone.val().length === 1 || $phone.val().length === 2 || $phone.val().length === 3) {
				$phone.val($phone.val() + '+998');
			}			
			if ($phone.val().length === 4) {
				$phone.val($phone.val() + ' (');
			}			
			if ($phone.val().length === 8) {
				$phone.val($phone.val() + ') ');
			}
      		if ($phone.val().length === 13) {
				$phone.val($phone.val() + '-');
			}
      		if ($phone.val().length === 16) {
				$phone.val($phone.val() + '-');
			}
      		if ($phone.val().length === 19) {
				return false
			}
		}

		// Allow numeric (and tab, backspace, delete) keys only
		return (key == 8 || 
				key == 9 ||
				key == 46 ||
				(key >= 48 && key <= 57) ||
				(key >= 96 && key <= 105));	
	})
	
	.bind('focus click', function () {
		$phone = $(this);
		
		if ($phone.val().length === 0) {
			$phone.val('+998');
		}
		else {
			var val = $phone.val();
			$phone.val('').val(val); // Ensure cursor remains at the end
		}
	})


})




