var c = document.getElementById("board")
var ctx = c.getContext("2d")
var p,com;
var nop;
var tiles = new Array()
var players = new Array()
var globalposition = 0
var random_number;

class Tile{
    constructor(x,y,width,height,next){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.next = next;

    }
}
function rand(){
    random_number = Math.ceil(Math.random()*6)
}

class Player{
constructor(color){
    this.position = 0;
    this.pre =0;
    this.r = 0;
    this.color = color; 
}
roll{r}{

    this.r = r;
    this.pre = this.position;
    this.position+= this.pre
    if(this.position < 100){
        this.position = this.pre;
    }
    remove(pos){
        if((pos > 0)&&(pos!=this.position)){
            var p = tiles[pos-1]
            ctx.clearRect(p.x,p.y,p.width,p.height)
        }
    }
    show(pos){
         var cur = tiles[pos-1]
         ctx.beginPath()
         ctx.arc(cur.x+25,cur.y+25,22,0,2*Math.PI)
         ctx.fillStyle = this.color;
         ctx.fill()
         ctx.closePath()
        }
        move(){
            this.show(this.position)
            this.remove(this.pre)
            if(tiles[this.position-1].next!=this.position){
                this.pre = this.position;
                this.position = tiles[this.position-1].next
                this.remove(this.pre)
                this.show(this.position)
            }
        }
}
function setup(){
    var height = 600
    var width = 600
    var boxwidth = width/10
    var boxheight = height/10
    var x1 = 0
    var x2 = 9*boxwidth
    var y = 9*boxheight
    var c = 0
    for(var i = 0;i < 10;++i){
        for (var j = 0;j < 10;++j){
            if(i%2 == 0){
                tiles[c++] = new Tile(x1,y,boxwidth,boxheight,c)
                x1+= boxwidth
            }
            else{  tiles[c++] = new Tile(x2,y,boxwidth,boxheight,c)
                x2-= boxheight}
        }
x1 = 0;
x2 = 9*boxwidth
y-=boxheight
}
  tiles[0].next = 38; 
  tiles[3].next = 14; 
  tiles[8].next = 31; 
  tiles[27].next = 84; 
  tiles[20].next = 42; 
  tiles[50].next = 67; 
  tiles[71].next = 91; 
  tiles[79].next = 99;
    tiles[16].next = 7; 
     tiles[53].next = 34;
       tiles[61].next = 19;  
  tiles[63].next = 60; 
   tiles[86].next = 36; 
    tiles[92].next = 73;
      tiles[94].next = 75; 
       tiles[97].next = 79; 
}
setup ()
function singlereset(){
    setup()
    p = new Player("black")
    com = new Player("yellow")
    var players = new Array()
    ctx.clearRect(0,0,600,600)
    singleplayer()
}
function multireset(){
    p = new Player("black")
    com = new Player("yellow")
    var players = new Array()
    ctx.clearRect(0,0,600,600)
    multieplayer()
}
function off(){
    document.getElementById("overlay").style.display = "none"
}
function random(){
    document.getElementById("overlay").style.display = "block"
    var x = random_number
    document.getElementById("number").innerHTML = x
}
function myfun(){
    document.getElementById("overlay").style.display = "none" 
     document.getElementById("cube").style.transform = "rotateY(360deg) rotateX(360deg)"  
     setTimeout(nochange,800) 
}
function nochange(){
    document.getElementById("cube").style.transform = "rotateY(90deg) rotateX(0)"  
    setTimeout(random,1200) 
}


