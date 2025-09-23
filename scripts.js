var easybtn = document.getElementById('easy-btn');
var mediumbtn = document.getElementById('medium-btn');
var hardbtn = document.getElementById('hard-btn');

console.log('hello');

easybtn.addEventListener("click", function() { generateTable(4); });
mediumbtn.addEventListener("click", function() { generateTable(6); });
hardbtn.addEventListener("click", function() { generateTable(8); });

function generateTable(difficulty){
    console.log(difficulty);
    easybtn.style.display = 'none';
    mediumbtn.style.display = 'none';
    hardbtn.style.display = 'none';
    letterLogicEasy();
}

function letterLogicEasy(){
    var possibleLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    var selected = [];
    var letters = [];
    while(selected.length <= 15){
        let random = Math.floor(Math.random() * (16));
        if(!selected.includes(random)){
            selected.push(random);
        }
    }
    selected.forEach(number => {
        letters.push(possibleLetters[number]);
    });
    console.log(letters);
}

function letterLogicMedium(){

    var possibleLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'];

}

function letterLogicHard(){

}