const board = document.querySelector('#board');
const colors = [];
let colorRand = 0;
const square_Numbers = 1400;

for(let i=0; i<= 1000; i++){
    colorRand = Math.floor((Math.random()*100000000)+1);
    colors.push("#" + ("000000" + colorRand.toString(16)).slice(-6));
}
    


for(let i = 0; i < square_Numbers; i++){
    const square = document.createElement('div');

        

        square.classList.add('square');

        square.addEventListener('mouseover', () => setColor(square));
        board.append(square);

        square.addEventListener('mouseleave', () => removeColor(square));
        board.append(square);

    function setColor(element){
        const color = getRandomColor();
        element.style.backgroundColor = color;
        element.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`;
    }

    function removeColor(element){
        element.style.backgroundColor = '#1d1d1d';
        element.style.boxShadow = `0 0 2px #000`;
    }

    function getRandomColor(){
        const index = Math.floor(Math.random()*colors.length);
        return colors[index];
    }

}