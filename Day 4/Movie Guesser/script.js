const docs = document.getElementById("box")

const guess = document.getElementById("input")
const submitBtn = document.getElementById("submit")
const hintBtn = document.getElementById("hint")
const hintTxt = document.getElementById("thehint")
const nextBtn = document.getElementById("next")

const answer = document.getElementById("output")

const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
];   

let score = 0;
let currentQuestion = 0;

function movieGenerator(){
    for(let i = 0; i<movies.length;i++){
        //generate qns chronologically
        answer.innerHTML = movies[currentQuestion].explanation;
    }
}
movieGenerator();

function submission(){  //checking if the answer is correct or wrong
    if(guess.value.toLowerCase() == movies[currentQuestion].title.toLowerCase()){
        answer.innerHTML = "correct!"
        answer.style.background = "green"
        score++;
    }
    else{
        answer.innerHTML = "wrong! " +  "the correct answer is -- " + '"' + movies[currentQuestion].title + '"';
        answer.style.background = "firebrick"
        if(score>0){
            // score--
        }
    }
    guess.disabled = true; //disabling the textbox to prevent double entry
}

function hints(){ //provide the user with respective hints once requested
    hintTxt.classList.remove("hinttext")
    hintTxt.innerHTML = movies[currentQuestion].hint;
}

function nextqn(){ //display the next question

    if(currentQuestion < movies.length -1){
    movieGenerator(currentQuestion++);
    guess.value = ""  //reset the guess value
    hintTxt.classList.add("hinttext") //reset the hint button function 
    answer.style.background = ""; //reset 
    guess.disabled = false;  //reset the textbox back to enable 

    console.log(score)  //the scores are working accurately

    console.log(currentQuestion);
    console.log(movies.length)

    if(currentQuestion == movies.length -1){
        nextBtn.innerHTML = "finish"
    }
}
    else{
    lastpage()
    }
}

function lastpage(){ //function to load the results page
    if(score>7){
        docs.innerHTML = "<hr>"+ "Congrats!!" + "<br>" + "You got " + score +" questions correct out of " + movies.length + "<br>"+ "Looks like your movie knowledge is on point!" + "<hr>";
        docs.style.background = 'green';
        docs.style.fontFamily = "Georgia";
        docs.style.textAlign = "center";
    }
    else{
        docs.innerHTML = "<hr>"+"You got " + score +" questions correct out of " + movies.length + "<br>"+ "Feel free to try again!!"+"<hr>";
        docs.style.background = 'green'
        docs.style.fontFamily = "Georgia";
        docs.style.textAlign = "center";
    }
}






