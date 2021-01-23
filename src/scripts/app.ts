import '../styles/app.scss';


const START = 'START';
const PAUSE = 'PAUSE';
const RESUME = 'RESUME';

const elTimer = document.getElementById('timer')!;
const btnControl = document.getElementById('control')!;



function initialize() {
    btnControl.textContent = START;
}