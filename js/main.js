/**
 * Author : Tushar Khan
 */

var playerMap = [];
var playerMapIndex = ["Rich", "Police", "Thief", "Robber"];
var playerName = ["One", "Two", "Three", "Four"];
var scoreArray = [100, 60, 0, 40];
var currentScoreArray = [];
var whichToSelect = -1;



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
    let playerScoreTableBody = document.getElementById("playerScoreTableRow");

    //Append all the score
    for (let index = 0; index < scoreArray.length; index++) {
        let createTableData = document.createElement("td");
        createTableData.innerHTML = scoreArray[index];

        createTableRow.appendChild( createTableData );
    }
    playerScoreTableBody.appendChild( createTableRow );
}




/**
 * Set value for boxes
 */
function setBoxValue(){
    for (let i = 0; i < playerMap.length; i++) {
        let scoreBox = document.getElementById('mainBord' + (i+1));
        let paragraph = document.createElement("p");

        scoreBox.setAttribute("data", playerMap[i]);

        if( ( playerMap[i] === 3 ) || ( playerMap[i] === 2) ){
            scoreBox.innerHTML = ' ';
            scoreBox.appendChild( createButton( whichToSelect ) );
        } else {
            paragraph.setAttribute("class", "center para");
            paragraph.innerHTML = playerMapIndex[ playerMap[i] ];
            scoreBox.appendChild( paragraph );
        }
    }
}



/**
 * Create Button
 *
 * @param select
 * @returns {HTMLButtonElement}
 */
function createButton( select ) {
    let button = document.createElement("button");
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-small pink btn-large lighten-3 selectButton');
    button.innerHTML = 'Select ' + playerMapIndex[select];
    button.setAttribute('onclick', 'getThisDataInfo(this)');

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


/**
 * Get clicked button parent info
 *
 * @param buttonInfo
 */
function getThisDataInfo( buttonInfo ){
    currentScoreArray[playerMap.indexOf(0)] = 100;

    let attribute = parseInt(buttonInfo.parentNode.getAttribute('data'));

    if ( attribute === whichToSelect ) {
        console.log("true attribute " + attribute);
        M.toast({html : "Player caught " + playerMapIndex[whichToSelect]}, 7000);
        currentScoreArray[playerMap.indexOf(1)] = scoreArray[1];

        if ( ( playerMap.indexOf(attribute) === 2 ) ){
            currentScoreArray[playerMap.indexOf(3)] = 40;
            currentScoreArray[playerMap.indexOf(2)] = 0;
        } else {
            currentScoreArray[playerMap.indexOf(3)] = 0;
            currentScoreArray[playerMap.indexOf(2)] = 40;
        }
    } else {
        M.toast({html : "Player failed to get " + playerMapIndex[whichToSelect]}, 7000);
        console.log("false attribute " + attribute);
        currentScoreArray[playerMap.indexOf(1)] = 0;

        if ( ( playerMap.indexOf(attribute) === 2 ) ){
            currentScoreArray[playerMap.indexOf(3)] = 40;
            currentScoreArray[playerMap.indexOf(2)] = scoreArray[1];
        } else {
            currentScoreArray[playerMap.indexOf(2)] = 40;
            currentScoreArray[playerMap.indexOf(3)] = scoreArray[1];
        }
    }

    setScoreBoard(playerName, currentScoreArray);
}


/**
 * Clear all data
 * for a new roll
 */
function clearAll(){
    for (let i = 0; i < playerMap.length; i++) {
        let scoreBox = document.getElementById('mainBord' + (i+1));
        scoreBox.innerHTML = " ";
    }
    while (playerMap.length > 0){
        playerMap.pop();
        currentScoreArray.pop();
    }
    document.getElementById("find").innerHTML = " ";
}


/**
 * main function
 */
function main() {
    clearAll();
    while ( ! ( playerMap.length === 4 ) ) setPlayerMap();
    whichToSelect = ( getRandomNumber(100) % 2 ) + 2;
    document.getElementById("find").innerHTML = "Find " + playerMapIndex[whichToSelect];
    document.getElementById("image").src = "img/" + playerMapIndex[whichToSelect] + ".png";
    setBoxValue();
}