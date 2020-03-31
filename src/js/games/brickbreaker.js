let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let height = 800;
let width = 800;

let running = 0;
//score
let score = 0;

let blockhit = 10;


//player
let playerWidth = 150; //150
let playerHeight = 20;
let playerSpeed = 25;

let posx = (width/2)-(playerWidth/2);


//ball
let startposx = ((width/2)-(playerWidth/2))+(playerWidth/2);
let startposy = 735;
let ballSpeed = 1;

let direction = "no";

//blocks
let initialized = 0;

function block(bposx, bposy){
    this.bwidth = (width / 10) -4;
    this.bheight = (height / 5 / 4) - 4;
    this.bposx = (width / 10 * bposx) +2;
    this.bposy = (height / 5 * bposy / 4) +2;
};

let b1status = 1;
let b2status = 1;
let b3status = 1;
let b4status = 1;
let b5status = 1;
let b6status = 1;
let b7status = 1;
let b8status = 1;
let b9status = 1;
let b10status = 1;
let b11status = 1;
let b12status = 1;
let b13status = 1;
let b14status = 1;
let b15status = 1;
let b16status = 1;
let b17status = 1;
let b18status = 1;

let b1 = new block(2, 1);     
let b2 = new block(3, 1);
let b3 = new block(4, 1);
let b4 = new block(5, 1);
let b5 = new block(6, 1);
let b6 = new block(7, 1);

let b7 = new block(2, 2);
let b8 = new block(3, 2);
let b9 = new block(4, 2);
let b10 = new block(5, 2);
let b11 = new block(6, 2);
let b12 = new block(7, 2);

let b13 = new block(2, 3);
let b14 = new block(3, 3);
let b15 = new block(4, 3);
let b16 = new block(5, 3);
let b17 = new block(6, 3);
let b18 = new block(7, 3);

//functions

if(running == 0){
    setup();
}

function setup(){
    //general
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#30979F";
    ctx.fillRect(0, 0, width, height);

    //player
    ctx.fillStyle = "#272727";
    ctx.fillRect(posx, 750, playerWidth, playerHeight);

    //ball
    ctx.fillStyle = "#165363";
    ctx.beginPath();
    ctx.ellipse(startposx, startposy, 15, 15, Math.PI/4, 0, 2 *Math.PI);
    ctx.fill();

    if(initialized == 0){
        // console.log("init");
        //blocks
        ctx.fillStyle = "#272727";
        if(b1status == 1){
            ctx.fillRect(b1.bposx, b1.bposy, b1.bwidth, b1.bheight);   
        }
        if(b2status == 1){
            ctx.fillRect(b2.bposx, b2.bposy, b2.bwidth, b2.bheight);
        }
        if(b3status == 1){
            ctx.fillRect(b3.bposx, b3.bposy, b3.bwidth, b3.bheight);
        }
        if(b4status == 1){
            ctx.fillRect(b4.bposx, b4.bposy, b4.bwidth, b4.bheight);
        }
        if(b5status == 1){
            ctx.fillRect(b5.bposx, b5.bposy, b5.bwidth, b5.bheight);
        }
        if(b6status == 1){
            ctx.fillRect(b6.bposx, b6.bposy, b6.bwidth, b6.bheight);
        }
        if(b7status == 1){
            ctx.fillRect(b7.bposx, b7.bposy, b7.bwidth, b7.bheight);
        }
        if(b8status == 1){
            ctx.fillRect(b8.bposx, b8.bposy, b8.bwidth, b8.bheight);
        }
        if(b9status == 1){
            ctx.fillRect(b9.bposx, b9.bposy, b9.bwidth, b9.bheight);
        }
        if(b10status == 1){
            ctx.fillRect(b10.bposx, b10.bposy, b10.bwidth, b10.bheight);
        }
        if(b11status == 1){
            ctx.fillRect(b11.bposx, b11.bposy, b11.bwidth, b11.bheight);
        }
        if(b12status == 1){
            ctx.fillRect(b12.bposx, b12.bposy, b12.bwidth, b12.bheight);
        }
        if(b13status == 1){
            ctx.fillRect(b13.bposx, b13.bposy, b13.bwidth, b13.bheight);
        }
        if(b14status == 1){
            ctx.fillRect(b14.bposx, b14.bposy, b14.bwidth, b14.bheight);
        }
        if(b15status == 1){
            ctx.fillRect(b15.bposx, b15.bposy, b15.bwidth, b15.bheight);
        }
        if(b16status == 1){
            ctx.fillRect(b16.bposx, b16.bposy, b16.bwidth, b16.bheight);
        }
        if(b17status == 1){
            ctx.fillRect(b17.bposx, b17.bposy, b17.bwidth, b17.bheight);
        }
        if(b18status == 1){
            ctx.fillRect(b18.bposx, b18.bposy, b18.bwidth, b18.bheight);
        }
        
    }
}

function draw(){
    //general
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#34006B";
    ctx.fillRect(0, 0, width, height);

    //player
    ctx.fillStyle = "#7ACAFF";
    ctx.fillRect(posx, 750, playerWidth, playerHeight);

    //ball
    ctx.fillStyle = "#968FFF";
    ctx.beginPath();
    ctx.ellipse(startposx, startposy, 15, 15, Math.PI/4, 0, 2 *Math.PI);
    ctx.fill();
    ctx.stroke();

    if(direction == "no"){
        startposx += ballSpeed;
        startposy -= ballSpeed;
    }
    if(direction == "zo"){
        startposx += ballSpeed;
        startposy += ballSpeed;
    }
    if(direction == "nw"){
        startposx -= ballSpeed;
        startposy -= ballSpeed;
    }
    if(direction == "zw"){
        startposx -= ballSpeed;
        startposy += ballSpeed;
    } 
    if(direction == "over"){
        startposx += 0;
        startposy += 0;
    }

    if(initialized == 0){
        // console.log("init");
        //blocks
        ctx.fillStyle = "#8F98FF";
        if(b1status == 1){
            ctx.fillRect(b1.bposx, b1.bposy, b1.bwidth, b1.bheight);   
        }
        if(b2status == 1){
            ctx.fillRect(b2.bposx, b2.bposy, b2.bwidth, b2.bheight);
        }
        if(b3status == 1){
            ctx.fillRect(b3.bposx, b3.bposy, b3.bwidth, b3.bheight);
        }
        if(b4status == 1){
            ctx.fillRect(b4.bposx, b4.bposy, b4.bwidth, b4.bheight);
        }
        if(b5status == 1){
            ctx.fillRect(b5.bposx, b5.bposy, b5.bwidth, b5.bheight);
        }
        if(b6status == 1){
            ctx.fillRect(b6.bposx, b6.bposy, b6.bwidth, b6.bheight);
        }
        if(b7status == 1){
            ctx.fillRect(b7.bposx, b7.bposy, b7.bwidth, b7.bheight);
        }
        if(b8status == 1){
            ctx.fillRect(b8.bposx, b8.bposy, b8.bwidth, b8.bheight);
        }
        if(b9status == 1){
            ctx.fillRect(b9.bposx, b9.bposy, b9.bwidth, b9.bheight);
        }
        if(b10status == 1){
            ctx.fillRect(b10.bposx, b10.bposy, b10.bwidth, b10.bheight);
        }
        if(b11status == 1){
            ctx.fillRect(b11.bposx, b11.bposy, b11.bwidth, b11.bheight);
        }
        if(b12status == 1){
            ctx.fillRect(b12.bposx, b12.bposy, b12.bwidth, b12.bheight);
        }
        if(b13status == 1){
            ctx.fillRect(b13.bposx, b13.bposy, b13.bwidth, b13.bheight);
        }
        if(b14status == 1){
            ctx.fillRect(b14.bposx, b14.bposy, b14.bwidth, b14.bheight);
        }
        if(b15status == 1){
            ctx.fillRect(b15.bposx, b15.bposy, b15.bwidth, b15.bheight);
        }
        if(b16status == 1){
            ctx.fillRect(b16.bposx, b16.bposy, b16.bwidth, b16.bheight);
        }
        if(b17status == 1){
            ctx.fillRect(b17.bposx, b17.bposy, b17.bwidth, b17.bheight);
        }
        if(b18status == 1){
            ctx.fillRect(b18.bposx, b18.bposy, b18.bwidth, b18.bheight);
        }
        
    }
}

function move(){

    //collision muren
    //rechterkant
    if(startposx > width-15 && direction == "no"){
        direction = "nw";
    }
    if(startposx > width-15 && direction == "zo"){
        direction = "zw";
    }

    //linkerkant
    if(startposx < 0+15 && direction == "nw"){
        direction = "no";
    }
    if(startposx < 0+15 && direction == "zw"){
        direction = "zo";
    }

    //bovenkant
    if(startposy < 0+15 && direction == "nw"){
        direction = "zw";
    }
    if(startposy < 0+15 && direction == "no"){
        direction = "zo";
    } 

    //onderkant
    if(startposy > height){
        let tekst = "Game over";
        let lengteTekst = ctx.measureText(tekst).width;
        console.log(lengteTekst/2);
        ctx.fillStyle = "#7B00FF";
        ctx.font = "60px Verdana";
        ctx.fillText(tekst, 235, 300);
        direction = "over";
        console.log("game ovaaa");
        running = 0;
    }

    //collision player
    //bovenkant
    if(startposy == 735 && (startposx >= posx+20 && startposx <= posx+playerWidth-20 )){
        if(direction == "zo"){
            direction = "no";
        }
        if(direction == "zw"){
            direction = "nw";
        }
    }
    if(startposy == 735 && (startposx >= posx && startposx <= posx+20)){
        direction = "nw";
        console.log("hit");
    }
    if(startposy == 735 && (startposx >= posx+playerWidth-25 && startposx <= posx+playerWidth)){
        direction = "no";
        console.log("hit");
    }

    //links
    if(startposx == posx && (startposy >= 750 && startposy <= 750+playerHeight)){
        direction = "nw";
    }

    //rechts
    if(startposx == posx+playerWidth && (startposy >= 750 && startposy <= 750+playerHeight)){
        direction = "no";
    }

    //collision blocks
    //block1
    //bovenkant
    if(startposy == b1.bposy && (startposx >= b1.bposx && startposx <= b1.bposx + b1.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b1status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b1.bposy + b1.bheight && (startposx >= b1.bposx && startposx <= b1.bposx + b1.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b1status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b1.bposx && (startposy >= b1.bposy && startposy <= (b1.bposy + b1.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b1status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b1.bposx+b1.bwidth && (startposy >= b1.bposy && startposy <= (b1.bposy + b1.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b1status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block2
    //bovenkant
    if(startposy == b2.bposy && (startposx >= b2.bposx && startposx <= b2.bposx + b2.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b2status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b2.bposy + b2.bheight && (startposx >= b2.bposx && startposx <= b2.bposx + b2.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b2status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b2.bposx && (startposy >= b2.bposy && startposy <= (b2.bposy + b2.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b2status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b2.bposx+b2.bwidth && (startposy >= b2.bposy && startposy <= (b2.bposy + b2.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b2status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block3
    //bovenkant
    if(startposy == b3.bposy && (startposx >= b3.bposx && startposx <= b3.bposx + b3.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b3status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b3.bposy + b3.bheight && (startposx >= b3.bposx && startposx <= b3.bposx + b3.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b3status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b3.bposx && (startposy >= b3.bposy && startposy <= (b3.bposy + b3.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b3status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b3.bposx+b3.bwidth && (startposy >= b3.bposy && startposy <= (b3.bposy + b3.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b3status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block4
    //bovenkant
    if(startposy == b4.bposy && (startposx >= b4.bposx && startposx <= b4.bposx + b4.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b4status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b4.bposy + b4.bheight && (startposx >= b4.bposx && startposx <= b4.bposx + b4.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b4status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b4.bposx && (startposy >= b4.bposy && startposy <= (b4.bposy + b4.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b4status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b4.bposx+b4.bwidth && (startposy >= b4.bposy && startposy <= (b4.bposy + b4.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b4status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block5
    //bovenkant
    if(startposy == b5.bposy && (startposx >= b5.bposx && startposx <= b5.bposx + b5.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b5status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b5.bposy + b5.bheight && (startposx >= b5.bposx && startposx <= b5.bposx + b5.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b5status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b5.bposx && (startposy >= b5.bposy && startposy <= (b5.bposy + b5.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b5status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b5.bposx+b5.bwidth && (startposy >= b5.bposy && startposy <= (b5.bposy + b5.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b5status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block6
    //bovenkant
    if(startposy == b6.bposy && (startposx >= b6.bposx && startposx <= b6.bposx + b6.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b6status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b6.bposy + b6.bheight && (startposx >= b6.bposx && startposx <= b6.bposx + b6.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b6status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b6.bposx && (startposy >= b6.bposy && startposy <= (b6.bposy + b6.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b6status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b6.bposx+b6.bwidth && (startposy >= b6.bposy && startposy <= (b6.bposy + b6.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b6status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block7
    //bovenkant
    if(startposy == b7.bposy && (startposx >= b7.bposx && startposx <= b7.bposx + b7.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b7status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b7.bposy + b7.bheight && (startposx >= b7.bposx && startposx <= b7.bposx + b7.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b7status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b7.bposx && (startposy >= b7.bposy && startposy <= (b7.bposy + b7.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b7status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b7.bposx+b7.bwidth && (startposy >= b7.bposy && startposy <= (b7.bposy + b7.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b7status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block8
    //bovenkant
    if(startposy == b8.bposy && (startposx >= b8.bposx && startposx <= b8.bposx + b8.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b8status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b8.bposy + b8.bheight && (startposx >= b8.bposx && startposx <= b8.bposx + b8.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b8status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b8.bposx && (startposy >= b8.bposy && startposy <= (b8.bposy + b8.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b8status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b8.bposx+b8.bwidth && (startposy >= b8.bposy && startposy <= (b8.bposy + b8.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b8status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block9
    //bovenkant
    if(startposy == b9.bposy && (startposx >= b9.bposx && startposx <= b9.bposx + b9.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b9status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b9.bposy + b9.bheight && (startposx >= b9.bposx && startposx <= b9.bposx + b9.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b9status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b9.bposx && (startposy >= b9.bposy && startposy <= (b9.bposy + b9.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b9status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b9.bposx+b9.bwidth && (startposy >= b9.bposy && startposy <= (b9.bposy + b9.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b9status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block10
    //bovenkant
    if(startposy == b10.bposy && (startposx >= b10.bposx && startposx <= b10.bposx + b10.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b10status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b10.bposy + b10.bheight && (startposx >= b10.bposx && startposx <= b10.bposx + b10.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b10status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b10.bposx && (startposy >= b10.bposy && startposy <= (b10.bposy + b10.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b10status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b10.bposx+b10.bwidth && (startposy >= b10.bposy && startposy <= (b10.bposy + b10.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b10status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block11
    //bovenkant
    if(startposy == b11.bposy && (startposx >= b11.bposx && startposx <= b11.bposx + b11.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b11status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b11.bposy + b11.bheight && (startposx >= b11.bposx && startposx <= b11.bposx + b11.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b11status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b11.bposx && (startposy >= b11.bposy && startposy <= (b11.bposy + b11.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b11status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b11.bposx+b11.bwidth && (startposy >= b11.bposy && startposy <= (b11.bposy + b11.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b11status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block12
    //bovenkant
    if(startposy == b12.bposy && (startposx >= b12.bposx && startposx <= b12.bposx + b12.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b12status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b12.bposy + b12.bheight && (startposx >= b12.bposx && startposx <= b12.bposx + b12.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b12status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b12.bposx && (startposy >= b12.bposy && startposy <= (b12.bposy + b12.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b12status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b12.bposx+b12.bwidth && (startposy >= b12.bposy && startposy <= (b12.bposy + b12.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b12status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block13
    //bovenkant
    if(startposy == b13.bposy && (startposx >= b13.bposx && startposx <= b13.bposx + b13.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b13status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b13.bposy + b13.bheight && (startposx >= b13.bposx && startposx <= b13.bposx + b13.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b13status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b13.bposx && (startposy >= b13.bposy && startposy <= (b13.bposy + b13.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b13status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b13.bposx+b13.bwidth && (startposy >= b13.bposy && startposy <= (b13.bposy + b13.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b13status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block14
    //bovenkant
    if(startposy == b14.bposy && (startposx >= b14.bposx && startposx <= b14.bposx + b14.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b14status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b14.bposy + b14.bheight && (startposx >= b14.bposx && startposx <= b14.bposx + b14.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b14status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b14.bposx && (startposy >= b14.bposy && startposy <= (b14.bposy + b14.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b14status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b14.bposx+b14.bwidth && (startposy >= b14.bposy && startposy <= (b14.bposy + b14.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b14status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block15
    //bovenkant
    if(startposy == b15.bposy && (startposx >= b15.bposx && startposx <= b15.bposx + b15.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b15status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b15.bposy + b15.bheight && (startposx >= b15.bposx && startposx <= b15.bposx + b15.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b15status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b15.bposx && (startposy >= b15.bposy && startposy <= (b15.bposy + b15.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b15status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b15.bposx+b15.bwidth && (startposy >= b15.bposy && startposy <= (b15.bposy + b15.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b1status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block16
    //bovenkant
    if(startposy == b16.bposy && (startposx >= b16.bposx && startposx <= b16.bposx + b16.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b16status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b16.bposy + b16.bheight && (startposx >= b16.bposx && startposx <= b16.bposx + b16.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b16status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b16.bposx && (startposy >= b16.bposy && startposy <= (b16.bposy + b16.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b16status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b16.bposx+b16.bwidth && (startposy >= b16.bposy && startposy <= (b16.bposy + b16.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b16status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block17
    //bovenkant
    if(startposy == b17.bposy && (startposx >= b17.bposx && startposx <= b17.bposx + b17.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b17status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b17.bposy + b17.bheight && (startposx >= b17.bposx && startposx <= b17.bposx + b17.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b17status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b17.bposx && (startposy >= b17.bposy && startposy <= (b17.bposy + b17.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b17status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b17.bposx+b17.bwidth && (startposy >= b17.bposy && startposy <= (b17.bposy + b17.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b17status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //block18
    //bovenkant
    if(startposy == b18.bposy && (startposx >= b18.bposx && startposx <= b18.bposx + b18.bwidth)){
        if(direction == "zo"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "nw";
        }
        console.log("up");
        b18status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //onderkant
    if(startposy == b18.bposy + b18.bheight && (startposx >= b18.bposx && startposx <= b18.bposx + b18.bwidth)){
        if(direction == "no"){
            direction = "zo";
        } else if(direction == "nw"){
            direction = "zw";
        }
        console.log("down");
        b18status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //links
    if(startposx == b18.bposx && (startposy >= b18.bposy && startposy <= (b18.bposy + b18.bheight))){
        if(direction == "no"){
            direction = "nw";
        } else if(direction == "zo"){
            direction = "zw";
        }
        console.log("left");
        b18status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
    //rechts
    if(startposx == b18.bposx+b18.bwidth && (startposy >= b18.bposy && startposy <= (b18.bposy + b18.bheight))){
        if(direction == "nw"){
            direction = "no";
        } else if(direction == "zw"){
            direction = "zo";
        }
        console.log("right");
        b18status = 0;
        score += blockhit;
        resetcounter++;
        console.log(resetcounter);
    }
}    
    

function gameloop(){
    if(running == 1){
        draw();
        move();
        statusCheck();
        levelUp();
        document.getElementById("score").innerHTML = score;
    }
}



document.onkeydown = function(e) {
    if (e.keyCode === 37) {
        // Left
        if(posx > 0){
            posx = posx - playerSpeed;
            console.log(posx);
        }
    }
    if (e.keyCode === 39) {
        // Right
        if(posx < width-playerWidth){
            posx = posx + playerSpeed;
            console.log(posx);
        }
    }
    if (e.keyCode === 32) {
        // Spacebar
        running = 1;
    }
    return !(e.keyCode == 32 && e.target == document.body);
}

    setInterval(gameloop, 1);

let resetcounter = 0;
function statusCheck(){
    if(b1status == 0){
        b1.bposx = -100;
    }
    if(b2status == 0){
        b2.bposx = -100;
    }
    if(b3status == 0){
        b3.bposx = -100;
    }
    if(b4status == 0){
        b4.bposx = -100;
    }
    if(b5status == 0){
        b5.bposx = -100;
    }
    if(b6status == 0){
        b6.bposx = -100;
    }
    if(b7status == 0){
        b7.bposx = -100;
    }
    if(b8status == 0){
        b8.bposx = -100;
    }
    if(b9status == 0){
        b9.bposx = -100;
    }
    if(b10status == 0){ 
        b10.bposx = -100;
    }
    if(b11status == 0){
        b11.bposx = -100;
    }
    if(b12status == 0){
        b12.bposx = -100;
    }
    if(b13status == 0){
        b13.bposx = -100;
    }
    if(b14status == 0){
        b14.bposx = -100;
    }
    if(b15status == 0){
        b15.bposx = -100;
    }
    if(b16status == 0){
        b16.bposx = -100;
    }
    if(b17status == 0){
        b17.bposx = -100;
    }
    if(b18status == 0){
        b18.bposx = -100;
    }
}

function levelUp(){
    if(resetcounter >= 18){ 
            if(startposy > 650){
            b1status = 1;
            b2status = 1;
            b3status = 1;
            b4status = 1;
            b5status = 1;
            b6status = 1;
            b7status = 1;
            b8status = 1;
            b9status = 1;
            b10status = 1;
            b11status = 1;
            b12status = 1;
            b13status = 1;
            b14status = 1;
            b15status = 1;
            b16status = 1;
            b17status = 1;
            b18status = 1;
            b1.bposx = (width / 10 * 2) +5;
            b2.bposx = (width / 10 * 3) +5;
            b3.bposx = (width / 10 * 4) +5;
            b4.bposx = (width / 10 * 5) +5;
            b5.bposx = (width / 10 * 6) +5;
            b6.bposx = (width / 10 * 7) +5;
            b7.bposx = (width / 10 * 2) +5;
            b8.bposx = (width / 10 * 3) +5;
            b9.bposx = (width / 10 * 4) +5;
            b10.bposx = (width / 10 * 5) +5;
            b11.bposx = (width / 10 * 6) +5;
            b12.bposx = (width / 10 * 7) +5;
            b13.bposx = (width / 10 * 2) +5;
            b14.bposx = (width / 10 * 3) +5;
            b15.bposx = (width / 10 * 4) +5;
            b16.bposx = (width / 10 * 5) +5;
            b17.bposx = (width / 10 * 6) +5;
            b18.bposx = (width / 10 * 7) +5;
            console.log("reset: "+resetcounter);
            resetcounter = 0;
        }
    }
}