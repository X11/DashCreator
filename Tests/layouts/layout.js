
var layouts = {
    basic: [
        [false, false, 50, 25],
        [false, false, 50, 25],
        [false, false, 100, 50],
        [false, false, 50, 25],
        [false, false, 50, 25],
    ],
    lefty: [
        [false, false, 50, 50], 
        [false, false, 50, 25],
        [false, false, 50, 25],
        [false, false, 50, 50],
        [false, false, 50, 25],
        [false, false, 50, 25],
    ],
    small: [
        [false, false, 50, 25],
        [false, false, 50, 25],
        [false, false, 50, 50],
        [false, false, 50, 50],
        [false, false, 25, 25],
        [false, false, 25, 25],
        [false, false, 25, 25],
        [false, false, 25, 25],
    ],
    aligned: [
        // first
        [false, false, 25, 25],
        [false, false, 50, 25],
        [false, false, 25, 25],
        // second
        [false, false, 25, 50, true],
        [false, false, 50, 50],
        [false, false, 25, 50, true],
        // last
        [false, false, 50, 25],
        [false, false, 50, 25],
    ],
    prefered: [
        // first
        [false, false, 25, 25, true],
        [false, false, 50, 25],
        [false, false, 25, 25, true],
        // second
        [false, false, 25, 75, true],
        [false, false, 50, 20],
        [false, false, 25, 75, true],
        // fill
        [45, 25, 50, 55],
    ]
};

var colors = ["darkred", "darkgreen", "pink", "orange", "darkblue", "lightgreen"];

function createLayout(layout){
    var cont = document.querySelector('.container');
    cont.innerHTML = "";
    for (var i = 0, l = layout.length; i < l; i ++) {
        var v = layout[i];
        var c = i%colors.length;
        createBox({
            container: cont,
            x: v[0],
            y: v[1],
            width:v[2], 
            height:v[3],
            color: colors[c],
            placeholder: v[4],
        });
    }
}

function createBox(data){
    var box = document.createElement('div');
    box.style.width = data.width + "%";
    box.style.height= data.height + "%";
    if (data.x && data.y){
        box.style.position = "absolute";
        box.style.top = data.x + "%";
        box.style.left = data.y + "%";
    }
    if (data.color && !data.placeholder)
        box.style.backgroundColor = data.color;
    data.container.appendChild(box);
}

function createMenu(layouts){
    var menu = document.querySelector('.menu');
    var select = document.createElement('select');
    for(var key in layouts){
        var option = document.createElement('option');
        option.innerHTML = key;
        option.value= key;
        select.appendChild(option);
    }
    menu.appendChild(select);
    select.addEventListener('change', onMenuChange, false);
}

function onMenuChange(){
    var name = this.options[this.selectedIndex].value;
    window.location = "#"+name;
    createLayout(layouts[name]);
}

createMenu(layouts);
var hash = location.hash;
hash = hash.slice(1, hash.length);
createLayout(layouts[hash]);
