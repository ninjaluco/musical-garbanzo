let movieData = {
    info: 'A verry good movie about a lovley Alien',
    title: 'E.T.',
    actor: ['ET','Boy with game issues','Gangster Goverment'],
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

