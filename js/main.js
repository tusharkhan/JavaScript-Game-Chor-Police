/**
 * Author : Tushar Khan
 */

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


function getRandomNumber( max ){
    return Math.floor( Math.random() * Math.floor( max ));
}

setPlayerNames("playerNameTableHeader", ["pp", "ii"]);
console.log( getRandomNumber(4) );