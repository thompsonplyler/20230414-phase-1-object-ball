// array 
// verb, action, does a thing
// const doAThing = () => {}
    // input parameter of a function
        // argument is what it receives when invoked
        // parameter is what is receives when composed
        // often used interchangeably
    // action 

    // output

    function sampleFunction(arg){
        // let arg = arg
        
        return arg+1
    }

function gameObject() {
    return {
        home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
            },
            "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
            },
            "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
            },
            "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
            },
            "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
            }
        }
        },
        away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
            },
            "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
            },
            "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
            },
            "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
            },
            "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
            }
        }
        }
    };
    }

function numPointsScored(playerName){
     // let playerName = playerName
    
    /*
    Build a function, numPointsScored that 
    takes in an argument of a player's name  
    
    returns the number of points scored for that player.

    Think about where in the object you will find a 
    player's points. How can you iterate down into that 
    level? Think about the return value of your function.
    */

const gameObjectObj = gameObject()

console.log("gameObject object: ", gameObjectObj)
// loop through keys in gameObject object (called object)
for (let team in gameObjectObj){
    // verify that the result is the team object
    console.log("Team object: ", gameObjectObj[team])
    for (let loopPlayerName in gameObjectObj[team]["players"]){
        console.log("All Alan Anderson All The Time: ", gameObjectObj[team]["players"]["Alan Anderson"] )
        console.log ("What is loopPlayerName? ", loopPlayerName)
        const score = gameObjectObj[team]["players"][loopPlayerName]["points"]
        console.log("blocks by Alan", gameObjectObj.home.players["Alan Anderson"].blocks)
        
        // console.log("Player name: ", loopPlayerName)
        // console.log("what we're looking for: ", playerName)
        // console.log(`${playerName} stats: `, gameObjectObj[team]["players"][loopPlayerName])
        console.log("Player score: ", score)
        if (loopPlayerName === playerName){
            return score 
        }        
    }
}
}

function shoeSize(){

}

function teamColors(){

}

function teamNames(){

}

function playerNumbers(){

}

function playerStats(){

}

const result = numPointsScored("Jeff Adrien")
console.log("Result of numPointsScored('Jeff Adrien')", result)
  

