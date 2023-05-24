
// // $.ajax({
// //     method: 'GET',
// //     url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
// //     headers: { 'X-Api-Key': '2hAgC0slwAeA3SxE4hrKBg==o7Tg0VaVKysrzG5x'},
// //     contentType: 'application/json',
// //     success: function(result) {
// //         console.log(result);
// //     },
// //     error: function ajaxError(jqXHR) {
// //         console.error('Error: ', jqXHR.responseText);
// //     }
// // });


// console.log(query);




















// requirements


const fooditemname=document.getElementById('fooditemsname');


const inputbyuser=document.getElementById('search');


const caloriesearch=document.getElementById('caloriesearchbtn');
console.log(caloriesearch);


const fatval=document.getElementById('fatval');
const proteinval=document.getElementById('proteinval');
const calorieval=document.getElementById('calorieval');


const apikey="2hAgC0slwAeA3SxE4hrKBg==o7Tg0VaVKysrzG5x";

const options={

    method:"GET",
    headers: { "X-Api-Key":apikey}
};





//  The main get response function


  async function getresponse(){



    const fooditementered=inputbyuser.value.trim();
    console.log(fooditementered);

    fooditemname.innerHTML=fooditementered;
    console.log(fooditemname);

    const apiurl="https://api.api-ninjas.com/v1/nutrition?query="+fooditementered;


// Go to result page

var result = document.getElementById("result");
var sectionTopOffset = result.offsetTop;
window.scrollTo({
  top: sectionTopOffset,
  behavior: "smooth"
});


    try {
    

    const response= await fetch(apiurl, options);
    const data = await response.json();
    console.log(data);


    console.log(" Calories are : "+data[0].calories);
    console.log(" Fat is : "+data[0].fat_total_g+"g");
    console.log(" Protein is : "+data[0].protein_g+"g");
    console.log(" Carbs are : "+data[0].carbohydrates_total_g+"g");
    
    fatval.innerHTML=data[0].fat_total_g;
    calorieval.innerHTML=data[0].calories;
    proteinval.innerHTML=data[0].protein_g;


    } catch (error) {
    console.log("Sorry! no results found");
}

}
// Here we are calling the function getresponse

caloriesearch.addEventListener('click',getresponse);





// going to search section again




let gosearchagain=document.getElementById('gosearchagain');
let searchctn=document.getElementById('searchctn');
let placeholdertext=inputbyuser.ariaPlaceholder;



function gotosearch(){

    var sectionTopOffset = searchctn.offsetTop;
  
    // Scroll to the target section
    window.scrollTo({
      top: sectionTopOffset,
      behavior:"auto"
    });

    
    inputbyuser.value="";
    inputbyuser.placeholdertext=placeholdertext;
  }


gosearchagain.addEventListener('click', gotosearch);






















// Now till here the api is working perfectle now i have to made changes so that on 
// clicking every value should change according to the result and it should directly
// go to result section in the website






// further requirements


















