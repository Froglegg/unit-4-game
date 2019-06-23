var crystalNumber;
var displayNumber;
var displayNumberDiv = $("#display-number");
var crystalNumberTotal;
var crystalNumberTotalDiv = $("#crystalNumberTotal");
var wins;

$(document).ready(function() {
        crystalNumberTotalDiv.html(0).css("color", "rgba(247, 111, 0, 0.945)");
        wins = 0;
        $("#wins").html(wins);
        displayNumber = getRndInt(40, 100);
        $("#display-number").html(displayNumber);
        $("#crystalA").val(getRndInt(1, 10));
        console.log($("#crystalA").val());
        $("#crystalB").val(getRndInt(1, 10));
        console.log($("#crystalB").val());
        $("#crystalC").val(getRndInt(1, 10));
        console.log($("#crystalC").val());
        $("#crystalD").val(getRndInt(1, 10));
        console.log($("#crystalD").val());

    }

);

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function parseNumber() {

    crystalNumber = parseFloat($(this).val());
    crystalNumberTotal = parseFloat($("#crystalNumberTotal").html());

    if (!isNaN(crystalNumberTotal)) {
        crystalNumberTotalDiv.html(crystalNumberTotal + crystalNumber);
        crystalNumberTotal = parseFloat($("#crystalNumberTotal").html());
        if (crystalNumberTotal > displayNumber) {
            $(crystalNumberTotalDiv).css("color", "red");
            setTimeout(function() {
                alert("Oh no! You went too high...");
                reset();
            }, 500);
            wins = 0;
            $("#wins").html(wins);
        } else if (crystalNumberTotal == displayNumber) {
            $(crystalNumberTotalDiv).css("color", "rgb(0, 175, 0)");
            setTimeout(function() {
                alert("You did it! A perfect match...");
                reset();
            }, 500);
            wins++;
            $("#wins").html(wins);
        }

    } else {
        crystalNumberTotalDiv.html(crystalNumber);

    }

}

$("#crystalA").click(parseNumber);

$("#crystalB").click(parseNumber);

$("#crystalC").click(parseNumber);

$("#crystalD").click(parseNumber);

function reset() {
    crystalNumberTotal = 0;
    crystalNumberTotalDiv.html(0).css("color", "rgba(247, 111, 0, 0.945)");
    displayNumber = getRndInt(40, 100);
    $("#display-number").html(displayNumber);
    $("#crystalA").val(getRndInt(1, 10));
    $("#crystalB").val(getRndInt(1, 10));
    $("#crystalC").val(getRndInt(1, 10));
    $("#crystalD").val(getRndInt(1, 10));
}