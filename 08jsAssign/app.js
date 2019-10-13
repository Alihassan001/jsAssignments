function forSleep(detleyTime) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + detleyTime) { }
}

var overs = +prompt("How many overs would you like to play?");
var team1 = prompt("Select team 1");
var team2 = prompt("Select team 2");
forSleep(1000);
console.log("The match is " + team1 + " VS " + team2);
forSleep(2000);

var team1Score = 0;
var team2Score = 0;
var team1Wickets = 0;
var team2Wickets = 0;


console.log(team1 + " won the toss and elected to bat first. ");
forSleep(1000);
console.log(overs + " over match started " + team1 + " is bat first. ");
forSleep(1000);
for (var j=1; j <= overs; j++) {
    forSleep(1000);
    console.log("Over "+j+" Started");
    forSleep(1000);
    for (var i = 1; i < 7; i++) {
        if (team1Wickets < 10) {
            var score = Math.round(Math.random() * 6);
            if (score == 0) {
                console.log("Ohhh! Dot ball :) Overs " +j+" Balls "+i);
            } else if (score == 1) {
                team1Score = team1Score + 1;
                console.log("Got 1 run == Overs " +j+" Balls "+i);
            } else if (score == 2) {
                team1Score = team1Score + 2;
                console.log("Got 2 runs == Overs " +j+" Balls "+i);
            } else if (score == 3) {
                team1Score = team1Score + 3;
                console.log("Got 3 run  ==  Overs " +j+" Balls "+i);
            } else if (score == 4) {
                team1Score = team1Score + 4;
                console.log("Wao! Super 4  ==  Overs " +j+" Balls "+i);
            } else if (score == 5) {
                ++team1Wickets;
                console.log("Ohhh! You are out :) Overs " +j+" Balls "+i);
            } else if (score == 6) {
                team1Score = team1Score + 6;
                console.log("Amaizing! What a Six == Overs " +j+" Balls "+i);
            }
            
        }else{
            break;
        }forSleep(2000);
        
        
    }
}

console.log(team2 + " needs " + (team1Score + 1) + " runs to win.");
forSleep(1000);
for (var j = 1; j <= overs; j++) {
    forSleep(1000);
    console.log("Over "+j+" Started");
    forSleep(1000);
    for (var i = 1; i < 7; i++) {
        if (team2Wickets < 10) {
            var score = Math.round(Math.random() * 6);
            if (score == 0) {
                console.log("Ohhh! Dot ball :) Overs " +j+" Balls "+i);
            } else if (score == 1) {
                team2Score = team2Score + 1;
                console.log("Got 1 run == Overs " +j+" Balls "+i);
            } else if (score == 2) {
                team2Score = team2Score + 2;
                console.log("Got 2 runs == Overs " +j+" Balls "+i);
            } else if (score == 3) {
                team2Score = team2Score + 3;
                console.log("Got 3 run  ==  Overs " +j+" Balls "+i);
            } else if (score == 4) {
                team2Score = team2Score + 4;
                console.log("Wao! Super 4  ==  Overs " +j+" Balls "+i);
            } else if (score == 5) {
                ++team2Wickets;
                console.log("Ohhh! You are out :) Overs " +j+" Balls "+i);
            } else if (score == 6) {
                team2Score = team2Score + 6;
                console.log("Amaizing! What a Six == Overs " +j+" Balls "+i);
            }
        } else {
            break;
        }forSleep(2000);
        
    }
}

console.log(team1 + " Score " + team1Score + "/" + team1Wickets);
console.log(team2 + " Score " + team2Score + "/" + team2Wickets);
forSleep(3000);
if (team1Score > team2Score) {
    console.log(team1 + " is won the match");
} else {
    console.log(team2 + " is won the match");
}


