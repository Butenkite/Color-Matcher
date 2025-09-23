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
}