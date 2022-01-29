const HEX_CELL_CNT = 121;

const hex_cell = (cnt) => `
    <li class="hex-item">
        <div class="hex-container" id=${cnt}>
            <p class="hex-content">${cnt}</p>
        </div>
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
