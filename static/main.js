
var myLocation, housetype, bedrooms, price;

function rent(myLocation, housetype, bedrooms, price) {
  this.myLocation = myLocation;
  this.housetype = housetype;
  this.bedrooms = bedrooms;
  this.price = price;
}

// submit button
$(document).ready(function () {
  $(".submit").click(function (event) {
    event.preventDefault();

    myLocation = $(".myLocation option:selected").val();   
    housetype = $("#housetype option:selected").val();
    bedrooms = $("#bedrooms option:selected").val();
    price = $("#price option").val();
    
 


    if (myLocation == "0" && bedrooms == "0"){
        console.log("Kindly select the location and number of bedrooms you would like!");
        alert("Kindly select the location and number of bedrooms you would like!");
       }
       else if (myLocation == "1" && bedrooms == "1"){
           $("#oneL").show();
           $("#twoL").hide();
           $("#threeL").hide();
           $("#oneK").hide();
           $("#twoK").hide();
           $("#threeK").hide();
           $("#oneA").hide();
           $("#twoA").hide();
           $("#threeA").hide();
       }
       else if(myLocation == "1" && bedrooms == "2"){
          $("#oneL").hide();
           $("#twoL").show();
           $("#threeL").hide();
           $("#oneK").hide();
           $("#twoK").hide();
           $("#threeK").hide();
           $("#oneA").hide();
           $("#twoA").hide();
           $("#threeA").hide();
       }
       else if(myLocation == "1" && bedrooms == "3"){
           $("#oneL").hide();
           $("#twoL").hide();
           $("#threeL").show();
           $("#oneK").hide();
           $("#twoK").hide();
           $("#threeK").hide();
           $("#oneA").hide();
           $("#twoA").hide();
           $("#threeA").hide();
       }
       else if (myLocation == "2" && bedrooms == "1"){
           $("#oneL").hide();
           $("#twoL").hide();
           $("#threeL").hide();
           $("#oneK").show();
           $("#twoK").hide();
           $("#threeK").hide();
           $("#oneA").hide();
           $("#twoA").hide();
           $("#threeA").hide();
       }
       else if (myLocation == "2" && bedrooms == "2"){
           $("#oneL").hide();
           $("#twoL").hide();
           $("#threeL").hide();
           $("#oneK").hide();
           $("#twoK").show();
           $("#threeK").hide();
           $("#oneA").hide();
           $("#twoA").hide();
           $("#threeA").hide();
       }
       else if(myLocation == "2" && bedrooms == "3"){
           $("#oneL").hide();
           $("#twoL").hide();
           $("#threeL").hide();
           $("#oneK").hide();
           $("#twoK").hide();
           $("#threeK").show();
           $("#oneA").hide();
           $("#twoA").hide();
           $("#threeA").hide();
       }
       else if(myLocation == "3" && bedrooms == "1"){
           $("#oneL").hide();
           $("#twoL").hide();
           $("#threeL").hide();
           $("#oneK").hide();
           $("#twoK").hide();
           $("#threeK").hide();
           $("#oneA").show();
           $("#twoA").hide();
           $("#threeA").hide();
       }
       else if(myLocation == "3" && bedrooms == "2"){
           $("#oneL").hide();
           $("#twoL").hide();
           $("#threeL").hide();
           $("#oneK").hide();
           $("#twoK").hide();
           $("#threeK").hide();
           $("#oneA").hide();
           $("#twoA").show();
           $("#threeA").hide();
       }
       else if(myLocation == "3" && bedrooms == "3"){
           $("#oneL").hide();
           $("#twoL").hide();
           $("#threeL").hide();
           $("#oneK").hide();
           $("#twoK").hide();
           $("#threeK").hide();
           $("#oneA").hide();
           $("#twoA").hide();
           $("#threeA").show();
       }

  });
});


