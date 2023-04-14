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
    // gameObjectObj["team"] will return an error. 
    // That bracket notation is the equivalent of 
    // gameObjectObj.team there is no property with 
    // a key of team on gameObjectObj!
    
    // You can verify this for yourself in the console!

    // console.log("With team in dot notation: ", gameObjectObj.team)
    // console.log("With team as string in bracket notation: ",gameObjectObj["team"])
    // console.log("With team as variable name-- cf. line 153-- in bracket notation: ",gameObjectObj[team])

    console.log("Team object: ", gameObjectObj[team])

    // the loop below  is INSINDE the other loop. [team] refers to whichever team is being looped through
    // this is going to look through each team's .players property, and it will refer to each player property
    // key as loopPlayerName

    for (let loopPlayerName in gameObjectObj[team]["players"]){
    // note that since we know which property we're looking for, we aren't looking at 
    // the other properties on gameObject[team], which are teamName and colors
    // for this function, we're only interested in the players, and the above is how we access the .players property. 
    // what happens if you change line 172 to 

    // for (let loopPlayerName in gameObjectObj[team].players){
    // ?
        
        
        // the console.logs below verify the elements we need to see in our object. 
        // Don't just try to hold all the logic in your head!!!!
        // Verify you are where you think you are by logging it! 

        // Note the use of a string to access the "Alan Anderson" property specifically. 
        // What is happening in the console when the loop hits a team Alan Anderson (or another example player!) isn't on?
        // What is the console.log when you change the following console.log to this:
        // console.log("All Alan Anderson All The Time: ", gameObjectObj[team]["players"][loopPlayerName] )

        console.log("All Alan Anderson All The Time: ", gameObjectObj[team]["players"]["Alan Anderson"] )
        console.log ("What is loopPlayerName? ", loopPlayerName)

        /* 
        We know the player object looks like this: 
         
        {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
            }
        Therefore, if we want to see a player's points, we have to drill down, yet again, into the object. 
        What happens if you change the value of the points variable to 

        const points = gameObjectObj[team]["players"][loopPlayerName].points
        */
        const points = gameObjectObj[team]["players"][loopPlayerName]["points"]
        
        // console.log("Player name: ", loopPlayerName)
        // console.log("what we're looking for: ", playerName)
        // console.log(`${playerName} stats: `, gameObjectObj[team]["players"][loopPlayerName])
        
        console.log("Player score: ", points)
        
        // now the actual result
        // remember that every function has input-action-output
        // this is the only place we have a return value in the numPointsScored(playerName) function! 

        // loopPlayerName is the value assigned to the different property keys as we loop through gameObjectObj[team]["players"]
        // on line 172

        // playerName is the argument we're checking against from line 135. It is the INPUT to numPointsScored's input-action-output. 
        
        // pseudo code:
        // if the string of the values we're looping through in gameObjectObj[team]["players"], 
        // which we're calling loopPlayerName, 
        // is equal to the value of the argument our function took in when it was invoked, which we called playerName,
        // return as the function's output the value of points we set on line 212. 

        if (loopPlayerName === playerName){
            return points 
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

// In order to test our function, we must pass in a sample value. 
// We pass one of the same player names into the function we composed:
const result = numPointsScored("Jeff Adrien")

// ... and the result: 
console.log("Result of numPointsScored('Jeff Adrien')", result)
  

