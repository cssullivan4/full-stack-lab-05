var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var sIndex = 0;
var lIndex = 0;
var errorCount = 0;
var startTime;

var currentSentence = sentences[0];
var currentLetter = currentSentence.charAt(0);

$('keyboard-upper-container').hide();
$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter);

$(document).keydown(function(e) {
    if (e.which === 16) {
        toggleKeyboards();
    }
});

$(document).keyup(function(e) {
    if (e.which === 16) {
    toggleKeyboards();
}
    $('.key').removeClass('highlighted');
})

function toggleKeyboards() {
    $('#keyboard-upper-container').toggle();
    $('#keyboard-upper-container').toggle();
};

$(document).keypress(function (e) {
    e.preventDefault();
    $('#' + e.which).addClass('highlighted');
    if (!startTime) {
        startTime = e.timeStamp;
    }
    if (e.which === currentLetter.charCodeAt(0)) {
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
    } else {
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        errorCount++
    }

    lIndex++;

    if (lIndex === currentSentence.length) {
        sIndex++;
        if (sIndex === sentence.length) {
            var endTime = e.timeStamp;
            var elapsedMinutes = (endTime - startTime) / (60 * 1000);
            var wpm = 54 / elapsedMinutes - 2 * errorCount;
            $('#feedback').text('You scored ' + wpm + ' words per minute.');
            setTimeout(function() {
                if (confirm('Would you like to play again?')) {
                    sIndex = 0;
                    lIndex = 0;
                    currentSentence = sentences[0];
                    currentLetter - currentSentence.charAt(0);
                    $('#sentence').text(currentSentence);
                    $('#target-letter').text(currentLetter);
                    $('#feedback').empty();
                    $('#yellow-block').css('left', '15px');
                    startTime = undefined;
                }
            }, 2000);
        } else {
            currentSentence = sentences[sIndex];
            $('#sentence').text(currentSentence);
            lIndex = 0;
            currentLetter = currentSentence.charAt(lIndex);
            $('#target-letter').text(currentLetter);
            $('#feedback').empty();
            $('#yellow-block').css('left', '15px');
        }
    } else {
        currentLetter = currentSentence.charAt(lIndex);
        $('#target-letter').text(currentLetter);
        $('#yellow-block').css('left', '+=17.5');
    }
});