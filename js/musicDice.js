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

const CELL_HIDDEN = {
    text : "",
    value : 0,
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
        } else if (isHiddenIndex(cnt)){
            cellData=CELL_HIDDEN;
        }

        innerHtml += hex_cell(cnt, cellData.text, cellData.value);
        cnt++;
    }
    eleBoard.innerHTML = innerHtml; 
}

function isHiddenIndex(index){
    
    return (4 >= index)
        || (8 <= index && 15 >= index)
        || (19 <= index && 22 >= index)
        || (26 == index)
        || (30 == index)
        || (45 == index)
        || (55 <= index && 57 >= index)
        || (65 <= index && 66 >= index)
        || (89 == index)
        || (91 <= index && 92 >= index)
        || (96 <= index && 97 >= index)
        || (99 <= index && 103 >= index)
        || (107 <= index && 115 >= index)
        || (117 <= index)
    ;
}
