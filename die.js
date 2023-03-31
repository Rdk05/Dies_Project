game=()=>{
    let play1 = Math.trunc(Math.random()*6+1);
    let play1dies=`image/dice${play1}.png`;
    
    document.getElementById("player1").setAttribute('src',play1dies);

    let play2 = Math.trunc(Math.random()*6+1);
    let play2dies=`image/dice${play2}.png`;
    
    document.getElementById("player2").setAttribute('src',play2dies);


    if(play1 > play2){
        document.querySelector("h1").innerHTML = "🤩PLAYER1 WON!🤩";
    }
    else if(play1 < play2){
        document.querySelector("h1").innerHTML = "🥳PLAYER2 WON!🥳";
    }
    else{
        document.querySelector("h1").innerHTML = "☹️PLAY AGAIN☹️";
        // document.body.style.background = "green";
    }
    
    
}
