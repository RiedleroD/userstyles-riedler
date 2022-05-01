// ==UserScript==
// @name         New Slot Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script removes the old/expired slots that you can see if you want to register a time slot for
// @author       Riedler
// @match        https://elearning.tgm.ac.at/mod/scheduler/view.php?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ac.at
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    //get current timestamp in seconds
    let now = Math.floor(Date.now() / 1000);
    //get all tables in main card (presumably all are timetables (this might change & break things horribly (😳 (cry about it))))
    for(let table of document.getElementById("region-main").getElementsByClassName("generaltable")){
        for(let datetag of table.getElementsByClassName("datelabel")){
            let time = getTimeFromDate(datetag.textContent);
            if(time < now){//if time lies in the past,
                //make row invisible because deleting it makes elearning freak out
                datetag.parentElement.parentElement.style.display="none";
            }else{
                console.log(time);
                console.log(now);
            }
        }
    }
})();

function getTimeFromDate(string_date) {
    const months = {
        "jänner": "JAN",
        "januar": "JAN",
        "februar": "FEB",
        "märz": "MAR",
        "april": "APR",
        "mai": "MAY",
        "juni": "JUN",
        "juli": "JUL",
        "august": "AUG",
        "september": "SEP",
        "oktober": "OKT",
        "november": "NOV",
        "dezember": "DEC"
    };
    //"Freitag, 11. März 2022" → {"11.","März","2022"}
    let _date = string_date.split(",")[1].split(" ");
    //"11." → "11"
    let day = _date[1].replace(".","");
    //"März" → "MAR"
    let month = months[_date[2].replace(" ", "").toLowerCase()];
    //year is just year :)
    let year = _date[3];

    //parse again \m/ and return as timestamp in seconds
    return Date.parse(month + " " + day + " " + year)/1000;
}