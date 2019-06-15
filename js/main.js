/**
 * Author : Tushar Khan
 */

var playerMap = [];
var playerMapIndex = ["Rich", "Police", "Thief", "Robber"];
var whichToselect = -1;


/**
 * Function for set players name
 *
 * @param playerNameTableHeader
 * @param totalPlayers
 */
function setPlayerNames(playerNameTableHeader,totalPlayers) {
    //Get score table head tow
    let playerNameHead = document.getElementById(playerNameTableHeader);

    //Append all the player name into table head
    for (let index = 0; index < totalPlayers.length; index++) {
        let createNameHeader = document.createElement("th");
        createNameHeader.innerHTML = totalPlayers[index];
        playerNameHead.appendChild( createNameHeader );
    }
}


/**
 * Function for set players score
 *
 * @param playerNameRow
 * @param scoreArray
 */
function setScoreBoard(playerNameRow, scoreArray) {
    //Create table row
    let createTableRow = document.createElement("tr");

    //Get score bord body
    let playerScoreTableBody = document.getElementById(playerNameRow);

    //Append all the score
    for (let index = 0; index < scoreArray.length; index++) {
        let createTableData = document.createElement("td");
        createTableData.innerHTML = scoreArray[index];

        createTableRow.appendChild( createTableData );
    }
    playerScoreTableBody.appendChild( createTableRow );
}


function setBoxValue(){
    for (let i = 0; i < playerMap.length; i++) {
        let scoreBox = document.getElementById('mainBord' + (i+1));
        scoreBox.setAttribute("data", playerMap[i]);

        if( ( playerMap[i] === 3 ) || ( playerMap[i] === 2) ){
            scoreBox.innerHTML = ' ';
            scoreBox.appendChild( createButton( whichToselect ) );
            // scoreBox.appendChild( createButton( playerMap[i] ) );
        } else {
            scoreBox.innerHTML = playerMapIndex[ playerMap[i] ];
        }
    }
}


function createButton( select ) {
    let button = document.createElement("button");
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-small pink btn-large lighten-3 selectButton');
    button.innerHTML = 'Select ' + playerMapIndex[select]; //TODO : Change value according to random number
    button.setAttribute('onclick', 'getThisInfo(this)');

    return button;
}


/**
 * Get Random number
 * from 0 to max
 *
 * @param max
 * @returns {number}
 */
function getRandomNumber( max ){
    return Math.floor( Math.random() * Math.floor( max ));
}


/**
 * Set player map
 */
function setPlayerMap(){
    let randomNumber = getRandomNumber(4);

    ( -1 === playerMap.indexOf( randomNumber ) ) ? playerMap.push( randomNumber ) : "";
}



function getThisInfo( buttonInfo ){
    let attribute = buttonInfo.parentNode.getAttribute('data');
}


function printArr() {
    while ( ! ( playerMap.length === 4 ) ){
        setPlayerMap();
    }
    whichToselect = getRandomNumber(4);

    console.log( playerMap );
    setBoxValue();
    playerMap = [];
}