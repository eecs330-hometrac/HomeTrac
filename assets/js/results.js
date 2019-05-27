      var locations = [
        {
          name : "Evanston Place",
          address : "1715 Chicago Ave, Evanston, IL 60201",
          campus_loc : "South",
          num_bed : 2,
          num_bath : 2,
          rent : 500,
          lease_len : "12 Months",
          latitude: 42.049078,
          longitude: -87.677995,
          img : "images/evanston-place-apartments-evanston-il-meet-up-with-friends-on-the-social-deck-.jpg"
        },
        {
          name : "E2 Apartments",
          address : "1890 Maple Ave, Evanston, IL 60201",
          campus_loc : "South",
          num_bed : 2,
          num_bath : 2,
          rent : 600,
          lease_len : "12 Months",
          latitude : 42.053437, 
          longitude: -87.685229,
          img : "images/e2_home.JPG"
        },
        {
          name : "Carlson Apartments",
          address : "636 Church St # 400, Evanston, IL 60201",
          campus_loc : "South",
          num_bed : 4,
          num_bath : 2,
          rent : 600,
          lease_len : "9 Months",
          latitude : 42.048161,
          longitude : -87.680473,
          img : "images/Carlson-Building-Evanston.jpg"
        }
      ];

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

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

function summ_func() {
  let summ_name = decodeURI(getUrlParam('text','Empty'));

  for (loc of locations) {
    if (summ_name == loc.name) {
      //Modify .name_header, #img-fluid, #figure-img
      document.getElementById("name_header").innerHTML = loc.name;
      document.getElementById("address_header").innerHTML = loc.campus_loc;
      document.getElementById("img_header").src = loc.img;
      document.getElementById("sum_desc").innerHTML =
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
       "Pellentesque quis neque quis velit rhoncus viverra. " + 
       "Integer posuere eget tortor sit amet pharetra. Vestibulum " + 
       "ante ipsum primis in faucibus orci luctus et ultrices posuere " + 
       "cubilia Curae; Donec vitae ante nec sapien commodo condimentum. " +
       "Proin congue quis quam sit amet luctus. Duis laoreet varius blandit. " +
       "Morbi dignissim elementum odio, sit amet posuere lacus ultricies vitae. " +
       "Sit amet faucibus ligula, vel vestibulum turpis.";
      document.getElementById("sum_dist").innerHTML = "<u>Campus Location:</u> " + loc.campus_loc;
      document.getElementById("sum_bed").innerHTML = "<u>Number of Bedrooms:</u> " + loc.num_bed;
      document.getElementById("sum_bath").innerHTML = "<u>Number of Bathrooms:</u> " + loc.num_bath;
      document.getElementById("sum_rent").innerHTML = "<u>Rent:</u> " + loc.rent;
      document.getElementById("sum_lease").innerHTML = "<u>Lease Length:</u> " + loc.lease_len;

      document.getElementById("tour_btn").href = "contact.html?text=" + encodeURI(loc.name);
      document.getElementById("tour_btn2").href = "contact.html?text=" + encodeURI(loc.name);
    }
  }

};

$(function(){
  
  $("#send_btn").click(function(){
    console.log("Sent");
    document.getElementById("sent").display = visible;
  });
});




/*$(function(){
  
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

function populate() {
    campus_loc = localStorage.getItem("campus_val");
    num_bed = localStorage.getItem("bed_val");
    num_bath = localStorage.getItem("bath_val");
    rent_low = 0;
    rent_high = 1000;
    lease_len = localStorage.getItem("lease_val");

    let x = 0;
    let y = 0;
    let length = locations.length;
    
    var loc_list = document.getElementById("result_list");
    if (loc_list) {
    
        for (loc of locations) { //Loop over all locations

            if ((loc.campus_loc == campus_loc) && (loc.num_bed == num_bed) && (loc.num_bath == num_bath) && (loc.rent >= rent_low)
             && (loc.rent <= rent_high) && (loc.lease_len == lease_len)) { //Location Filtering

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

//populate(locations,"South",2,2,0,1000,12);
//console.log(localStorage.getItem("campus_val"));*/


