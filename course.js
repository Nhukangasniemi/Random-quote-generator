//Create a prototype quote
var ModelType = {
    init: function(beginPart, middlePart, endingPart) {
        this.beginPart = beginPart;
        this.middlePart = middlePart;
        this.endingPart = endingPart;
    }, 

    generateQuote: function() {
        var bIndex = Math.floor(Math.random() * this.beginPart.length);
        var mIndex = Math.floor(Math.random() * this.middlePart.length);
        var eIndex = Math.floor(Math.random() * this.endingPart.length);
        var message = this.beginPart[bIndex] + " " + this.middlePart[mIndex] + " " + this.endingPart[eIndex];
        console.log(message);
    }
};

//A Sentence type object created based on ModelType prototype
var sentenceType = Object.create(ModelType);
sentenceType.init(
    ["Doers", "Haters", "Lovers", "Best friends", "Everybody", "Early Birds", "Families", "Liars"],
    [
        "always keep secrets",
        "love to wake up early",
        "share ice-cream",
        "swim in the lake",
        "do houseworks",
        "travel around the world",
        "cook dinners",
        "water the plants"
    ],
    [
        "in the morning.",
        "late at night.",
        "in the future.",
        "at the moment.",
        "at weekend.",
        "all the time.",
        "middle of the day.",
        "for years."
    ],
);

//A Question type object created based on ModelType Prototype
var questionType = Object.create(ModelType);
questionType.init(
    ["Do you", "Do geniuses", "Will we", "Do dogs", "Do workers", "Does your boss", "Do your parents", "Do gamers"],
    [
        "make mistakes",
        "dance like crazy",
        "do dummy things",
        "wear left shoe on right foot",
        "lie down on the beach",
        "take the dog out",
        "dream to fly high",
        "play boardgames"
    ],
    [
        "everyday?",
        "in summer?",
        "in winter?",
        "sometimes?",
        "for a moment?",
        "in a short time?",
        "on Sundays?",
        "all night long?"
    ]
);

var userInput;
while (userInput !== "No") {
    //Prompt a user to input his/her choice
var userInput = prompt("Enter \"Yes\" to generate new quote(s) or \"No\" to exit the program!"); 
    if (userInput === "Yes" ) {
        var pickTheme = prompt("Pick a theme:\nSentence or Question");
        
        switch(pickTheme) {
            case "Sentence":
                var quoteAmount = Number(prompt("How many quotes do you want to get?\nChoose between 1 to 5 quotes."));
                if (quoteAmount >= 1 && quoteAmount <= 5) {
                    for (var i = 1; i <= quoteAmount; i++ ) {
                    sentenceType.generateQuote();
                    };
                } else {
                    console.log("Your pick is outside the acceptable range (1-5 quotes only).")
                }
            break;

            case "Question":
                var quoteAmount = Number(prompt("How many quotes do you want to get?\nChoose between 1 to 5 quotes."));
                if (quoteAmount >= 1 && quoteAmount <= 5) {
                    for (var i = 1; i <= quoteAmount; i++ ) {
                    questionType.generateQuote();
                    };
                } else {
                    console.log("Your pick is outside the acceptable range (1-5 quotes only).")
                }
            break;
            
            default: 
            console.log("Not a valid theme.");
        };
    } else if (userInput === "No") {
        console.log("You chose to exit the program. Good bye!");
    } else {
        console.log("Not a valid choice.");
    };   
}


