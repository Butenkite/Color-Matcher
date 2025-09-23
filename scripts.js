var easybtn = document.getElementById('easy-btn');
var mediumbtn = document.getElementById('medium-btn');
var hardbtn = document.getElementById('hard-btn');

console.log('hello');

easybtn.onClick = generateTable(4);
mediumbtn.onClick = generateTable(6);
hardbtn.onClick = generateTable(8);

function generateTable(difficulty){
    //easybtn.style.display = 'none';
    //mediumbtn.style.display = 'none';
    //hardbtn.style.display = 'none';
}