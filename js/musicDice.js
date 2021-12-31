const HEX_CELL_CNT = 45;

const hex_cell = (cnt) => `
    <li class="hex-item">
        <div class="hex-content" id=${cnt}>${cnt}</div>
    </li>`;

function init(){
    addHexes();
}

function addHexes(){
    var eleBoard = $("hex_board");
    var innerHtml = "";
    
    var cnt = 1;

    while (cnt <= HEX_CELL_CNT){
        innerHtml += hex_cell(cnt++);
    }
    eleBoard.innerHTML = innerHtml; 
}
