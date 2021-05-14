const listnames = document.querySelectorAll('.gr-invi');
const viewbtn = document.querySelector('.gr-vi-btn');

let listlen = listnames.length;
let initial = 8;
let visible = initial;

function viewList(len){
    for(var j = 0; j < initial; j++){
        listnames[j].style.display = 'none';
    }
    for(var i = 0; i < len; i++){
        listnames[i].style.display = 'inline-block';
    }
}

function hidebtn(){
    if(visible >= listlen){
        visible = listlen;
        viewbtn.style.display = 'none';
    }
    else{
        viewbtn.style.display = '';
    }
}

viewbtn.addEventListener('click', (e) => {
    e.preventDefault();
    visible += 4;
    hidebtn();
    viewList(visible);
});

