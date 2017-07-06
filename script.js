// KEYBOARD SHOW/HIDE
$(document).ready(function() {
    $("#keyboard-upper-container").hide();
    sentenceTracker();
    characterTracker();
// Loads data, but will call (use) later.
});

$(document).keydown(function(e) {
    if (e.which == 16) {
        $("#keyboard-upper-container").show();
        $("#keyboard-lower-container").hide();
    };
});
$(document).keyup(function(e) {
    if (e.which == 16) {
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();
    }
});

// KEY HIGHLIGHTS
$(document).keypress(function(e) {
    e.preventDefault();
    keyInput = e.which;
    typeInput = String.fromCharCode(keyInput);
    highlightCharacter(keyInput);
    feedback();
    sentenceStatus();
    sentenceTracker();
    characterTracker();  
// Be mindful of call-order.
});
function highlightCharacter(typeInput) {
    $('#' + typeInput).css('background-color', 'yellow');
    $(document).keyup(function(e){
        $('#' + typeInput).css('background-color', '');
    })
};

// SENTENCES
var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var currentSentence = 0;
var currentCharacter = 0;
var typeInput;
var keyInput;

function sentenceStatus() {
    if (currentCharacter < sentences[currentSentence].length - 1) {
        currentCharacter++;
    } else {
        if (currentSentence < sentences.length) {
            currentSentence++;
            currentCharacter = 0;
        }
    }
};

function sentenceTracker () {
    $('#sentence').text(sentences[currentSentence]);
};

function characterTracker () {
    $('#target-letter').text(sentences[currentSentence][currentCharacter]);
};

function feedback (e) {
    if (typeInput == sentences[currentSentence][currentCharacter]) {
        $('#feedback').append('<i class="glyphicon glyphicon-ok"></i>');
    } if (sentences[currentSentence].length==[currentCharacter]){
        
// WHERE NEED TO FIX BEFORE RUN
    }
    } else {
        $('#feedback').append('<i class="glyphicon glyphicon-remove"></i>')
    }

// MY ATTEMPT    
numberOfWords = sentences.split(' ');
function countWords(numberOfWords) {
    var count = 0,
        i,
        foo = sentences.length;
    for (i = 0; i <= foo; i++); {
        if (sentences.keyInput(i) == " ") {
            count++;
        }
    }
return // where is data going to be displayed? can put in alert?
return console.log(count + 1);  

// BELOW IS LAB
