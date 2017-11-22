
let starinput = 5;
import {movieData} from "./data";
import * as $ from "jquery";
import {Review} from "./interfaces";
// let movieData = require("./data");
// let $ = require("jquery");
starsInsert();
movieTitleWithDescr(movieData);
actorList(movieData);


//-------------------------Actions-------------------------------------------------------------------------
$(document).ready(function(){
    $('#stars').on('mouseover', 'span', function(e){
        var onStar = $(e.target).attr('data-value');                 
    });   
    
    $('#stars').on('click','span',function(e){
        var onStar = $(e.target).attr('data-value');        
        changeStarRating(onStar);        
    });     
});

//-------------------------Functions----------------------------------------------------------------------
function starsInsert() {
    let pageRating = "";
    for (let i = 1; i <= starinput; i++) {
        pageRating += '<span id =\'star' + i + '\' class=\'selectorForEmptyStars\' data-value=\'' + i + '\'>&#9733;</span>';
    }
    document.getElementById('stars').innerHTML = pageRating;
   
}
function changeStarRating(rate){


    for (let i = 1; i <= starinput; i++) {
        let star = document.getElementById("star"+i);
        if (i<=rate) {
            if (star.classList.contains("selectorForEmptyStars")) {
                star.classList.remove("selectorForEmptyStars");
                star.classList.add("selectorForFilledStars");
            }
        }
         else{
            if (star.classList.contains("selectorForFilledStars")) {
                star.classList.remove("selectorForFilledStars");
                star.classList.add("selectorForEmptyStars");                
            }
        }
        
    }
}

//==============Functions========================================
function movieTitleWithDescr(data: Review) {
    document.getElementById("descText").innerText = data.info;
    document.getElementById("title").innerText = data.title;
   
}

function actorList(data: Review) {
    let tempActor = "";    
    (data.actor).forEach(element => {
        tempActor += "<li>" + element + "</li>";
    });
    document.getElementById("actorList").innerHTML = tempActor;
}
