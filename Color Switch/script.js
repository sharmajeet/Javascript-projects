var index = 0;

function changeColor(){
    var arrayOfColor= ["red","green","blue","cyan","gray","yellow","pink" ];

    document.getElementsByTagName("body")[0].style.background=arrayOfColor[index++];
    if(index>arrayOfColor.length-1){
        index=0;
    }
}