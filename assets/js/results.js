
/*function map_markers() {
    var myLatLng = {lat: 42.0451, lng: 87.6877};
    var map = new google.maps.Map(document.getElementById('gmap'));
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}

map_markers();*/

var locations = [
    {
        name : "Evanston Place",
        address : "1715 Chicago Ave, Evanston, IL 60201",
        campus_loc : "South",
        num_bed : 2,
        num_bath : 2,
        rent : 1000,
        lease_len : 12,
        img : "evanston-place-apartments-evanston-il-meet-up-with-friends-on-the-social-deck-.jpg"
    },
    {
        name : "E2 Apartments",
        address : "1890 Maple Ave, Evanston, IL 60201",
        campus_loc : "South",
        num_bed : 2,
        num_bath : 2,
        rent : 1000,
        lease_len : 12,
        img : "e2_home.jpg"
    },
    {
        name : "Carlson Apartments",
        address : "636 Church St # 400, Evanston, IL 60201",
        campus_loc : "South",
        num_bed : 4,
        num_bath : 2,
        rent : 600,
        lease_len : 9,
        img : "Carlson-Building-Evanston.jpg"
    }
];

$(function(){
  
  $("#campus_drop a").click(function(){
    
    $("#campus_loc_btn").text($(this).text());
    $("#campus_loc_btn").val($(this).text());
    //console.log($("#campus_loc_btn").text());
    localStorage.setItem("campus_val",$("#campus_loc_btn").text()); 
  });
    
  $("#bedroom_drop a").click(function(){
    
    $("#bedroom_btn").text($(this).text());
    $("#bedroom_btn").val($(this).text());
    localStorage.setItem("bed_val",$("#bedroom_btn").text()); 
  });
    
  $("#bath_drop a").click(function(){
    
    $("#bath_btn").text($(this).text());
    $("#bath_btn").val($(this).text());
    localStorage.setItem("bath_val",$("#bath_btn").text());
  });
    
  $("#rent_drop a").click(function(){
    
    $("#rent_btn").text($(this).text());
    $("#rent_btn").val($(this).text());
    localStorage.setItem("rent_val",$("#rent_btn").text());
  });
    
  $("#lease_drop a").click(function(){
    
    $("#lease_btn").text($(this).text());
    $("#lease_btn").val($(this).text());
    localStorage.setItem("lease_val",$("#lease_btn").text());
  });

});

$(function(){
  
  $("#search_btn").click(function(){
      populate(locations,
         localStorage.getItem("campus_val"),
         localStorage.getItem("bed_val"),
         localStorage.getItem("bath_val"),
         0,
         1000,
         localStorage.getItem("lease_val"));
  });
});

function populate(locations, campus_loc, num_bed, num_bath, rent_low, rent_high, lease_len) {
    let x = 0;
    let y = 0;
    let length = locations.length;
    
    var loc_list = document.getElementById("result_list");
    if (loc_list) {
    
        for (loc of locations) { //Loop over all locations

            if ((loc.campus_loc == campus_loc) && (loc.num_bed == num_bed) && (loc.num_bath == num_bath) && (loc.rent >= rent_low) && (loc.rent <= rent_high) && (loc.lease_len == lease_len)) { //Location Filtering

                //Create a new list element and append it
                let loc_result = document.createElement('li');
                loc_result.classList.add("list-group-item");
                loc_result.innerHTML =
                    `<span>${loc.name}<br>Rent: ${loc.rent}<br>Beds: ${loc.num_bed}</span>
                    <img style="max-width: 60%; max-height: 20%" class="float-right" src="${loc.img}"/>`;
                loc_list.appendChild(loc_result);

            }
        }
    }
}

populate(locations,"South",2,2,0,1000,12);
//console.log(localStorage.getItem("campus_val"));


