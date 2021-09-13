/*function changeColor(){
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G"];

    var hexcode = "a";

    for(var i = 0; i < 6 ; i++ ){
       var random_index = Math.floor(Math.random()*hex_numbers.length);

        hexcode += hex_numbers[random_index]
   }
    document.getElementById("hex-code").innerHTML = hexcode;

   // console.log(Math.floor(Math.random()*hex_numbers.length))
}*/

var index = 0;

function changeColor(){
    //var colors = ["#33ccff", "#ff99cc" , "#9900ff" , "#ccffcc" , "#9966ff","#ff0066",
    // "#009999","#660033","#66ff33","#ffff00","#993366","#ffffff","#ff9966","#9999ff",
    //"#993399","#666699","#99ff99","#ccccff","#ff6699","#669900","#003300","black"]

    var colors = ["#FFC0CB","#FFB6C1","#FF69B4","#C71585","#DB7093","#DB7093","#E6E6FA",
"#D8BFD8","#DDA0DD","#DA70D6","#EE82EE","#9932CC","#BA55D3","#9400D3","#8A2BE2","#8B008B",
"#800080","#9370DB","#7B68EE","#6A5ACD","#483D8B","#663399","#4B0082","#FFA07A","#FA8072",
"#E9967A","#F08080","#CD5C5C","#DC143C","#FF0000","#B22222","#8B0000","#FFA500","#FF8C00",
"#FF7F50","#FF6347","#FF4500","#FFD700","#FFFF00","#FFFFE0","#FAFAD2","#FEFD5","#FFE4B5",
"#FFDAB9","#EEE8AA","#F0E68C","#BDB76B","#ADFF2F","#7FFF00","#7CFC00","#00FF00","#32CD32",
"#98FB98","#90EE90","#00FA9A","#00FF7F","#3CB371","#2E8B57","#228B22","#008000","#006400",
"#9ACD32","#6B8E23","#556B2F","#66CDAA","#8FBC8F","#20B2AA","#008B8B","#008080","#AFEEEE",
"#40E0D0","#48D1CC","#00CED1","#5F9EA3","#4682B4","#B0E0E6","#B0C4DE","#87CEFA","#87CEEB",
"#6795ED","#1E90FF","#4E69E1","#191970","#000080"]
     
    document.getElementsByTagName("html")[0].
    style.background = colors[index++];

    if(index> colors.length )
    index = 0;

}