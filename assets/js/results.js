
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
//console.log(localStorage.getItem("campus_val"));


