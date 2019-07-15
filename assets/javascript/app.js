
$(document).ready(function(){

    $("#remaining-time").hide();
    $("#next").hide();
    $("#start").click(startGame);
    // $(document).on('click', '.option', trivia.guessChecker);
 
    var options = [
        {
            question:"What street is Bob's Burgers on?",
            choice:['Main', '1st St', 'Foodie Ave', 'Ocean'],
            answer:3,
            photo:'<img src="assets/images/bobs_street.jpg" height=300px>',
            correct:"Ocean!"
        },
        {
            question:"Who is Tina's #1 crush?",
            choice:['Jimmy Jr', 'Zeke', 'Regular Sized Rudy', 'Ollie'],
            answer:0,
            photo:'<img src="assets/images/jimmyj.gif" height=300px>',
            correct:"Jimmy Jr!"
        },
        {
            question:"What was the name of Linda's band in High School?",
            choice:['Damsels In Distress', 'Sisterz', 'The Tatas', 'Like OMG'],
            answer:2,
            photo:'<img src="assets/images/tatas.jpg" height=300px>',
            correct:"The Tatas!"
        },
        {
            question:"What type of item is Kuchikopi, Louise's favorite 'toy'?",
            choice:['stuffed toy', 'ball', 'night light', 'switchblade'],
            answer:2,
            photo:'<img src="assets/images/kuchikopi.jpg" height=300px>',
            correct:"night light!"
        },
        {
            question:"What part of the body is Bob's tattoo located?",
            choice:['his arm', 'lower back', 'his ankle', 'chest'],
            answer:1,
            photo:'<img src="assets/images/tattoo_bob.jpg" height=300px>',
            correct:"lower back!"
        },
        {
            question:"Which popular 80s film was the inspiration for Gene's school musical?",
            choice:['ET', 'Die Hard', 'Gremlins', 'The Breakfast Club'],
            answer:1,
            photo:'<img src="assets/images/diehard.gif" height=300px>',
            correct:"Die Hard!"
        },
        {
            question:"What is the name of Teddy's guinea pig?",
            choice:['Penny', 'Chubs', 'Ms Piggy', 'Frances'],
            answer:3,
            photo:'<img src="assets/images/frances.jpg" height=300px>',
            correct:"Frances!"
        }
    ];

    function hidden() {
    $('#question').hide();
    $('#answer1').hide();
    $('#answer2').hide();
    $('#answer3').hide();
    $('#answer4').hide();
   }

    function startGame() {
        // console.log('random');
        $("#remaining-time").show();
        $("#start").hide();
        runTimer();
        askQuestion();
    };

    function runTimer() {
        var i = 35;
        var interval = setInterval(function() {
            i--;
            $('#remaining-time').html('Remaining Time: '+i);
            if (i<=0) {
                clearInterval(interval);
                hidden();
                $('#results').html('OUT OF TIME! The answer is '+options[currentQuestion].correct + '<br>' + options[currentQuestion].photo);
                $('#next').show();
            }
        }, 1000);
        
    };

    var currentQuestion = 0


    function askQuestion() {
        $('#next').hide();
        $('#question').show();
        $('#answer1').show();
        $('#answer2').show();
        $('#answer3').show();
        $('#answer4').show();

        currentQuestion = Math.floor(Math.random() * 7);
        
        $('#question').html(options[currentQuestion].question);
        $('#answer1').html(options[currentQuestion].choice[0]);
        $('#answer2').html(options[currentQuestion].choice[1]);
        $('#answer3').html(options[currentQuestion].choice[2]);
        $('#answer4').html(options[currentQuestion].choice[3]);
    }

    $(".answers").click(function() {
        hidden();

        var thisOption = $(this).text()
        var correctAnswer = options[currentQuestion].choice[options[currentQuestion].answer]

        if (thisOption === correctAnswer) {
            $('#results').html('Correct!'+ '<br>' + options[currentQuestion].photo);
            $('#next').show();

        } else {
            $('#results').html('OH NO! The answer is '+ options[currentQuestion].correct + '<br>' + options[currentQuestion].photo);
            $('#next').show();
        }

    })
        $('#next').click(function(){
            console.log('doing stuff');
            $('#results').html('');
            askQuestion();
        }) 

        }
    );
        



