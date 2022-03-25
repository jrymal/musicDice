const HEX_CELL_CNT = 121;

const hex_cell = (cnt, display_str, value=1) => `
    <li class="hex-item">
        <div class="hex-container" id=${cnt} data-value=${value} data-text=${display_str}>
            <p class="hex-content">${display_str}</p>
        </div>
    </li>`;

const CELL_3PT = {
    text : "3",
    value : 3,
};
const CELL_2PT = {
    text : "2",
    value : 2,
};
const CELL_CENTER = {
    text : "start",
    value : 1,
};
const CELL_STANDARD = {
    text : "",
    value : 1,
};

const SPECIAL_CELLS = {
    '17' : CELL_3PT,
    '35' : CELL_3PT,
    '39' : CELL_2PT,
    '43' : CELL_3PT,
    '59' : CELL_2PT,
    '61' : CELL_CENTER,
    '63' : CELL_2PT,
    '79' : CELL_3PT,
    '83' : CELL_2PT,
    '87' : CELL_3PT,
    '105' : CELL_3PT,
};

function init(){
    addHexes();
}

function addHexes(){
    var eleBoard = $("hex_board");
    var innerHtml = "";
    
    var cnt = 1;

    while (cnt <= HEX_CELL_CNT){
        var cellData = CELL_STANDARD;

        if (SPECIAL_CELLS[cnt]){
            cellData=SPECIAL_CELLS[cnt];
        }

        innerHtml += hex_cell(cnt, cellData.text, cellData.value);
        cnt++;
    }
    eleBoard.innerHTML = innerHtml; 
}
