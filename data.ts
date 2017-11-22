export const movieData = {
    info: 'A verry good movie about a lovley Alien',
    title: 'E.T.',
    actor: ['Dee Wallace','Henry Thomas','Peter Coyote','Robert MacNaughton','Drew Barrymore','K.C. Martel','Sean Frye','C. Thomas Howell'],
};



movieTitleWithDescr();
actorList();

//==============Functions========================================
function movieTitleWithDescr() {
    document.getElementById("descText").innerText = movieData.info;
    document.getElementById("title").innerText = movieData.title;
    
}

function actorList() {
    let tempActor = "";
    movieData.actor.forEach(element => {
        tempActor += "<li>" + element + "</li>";
    });
    document.getElementById("actorList").innerHTML = tempActor;
}

