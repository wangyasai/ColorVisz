

var x = [];
var y = [];
var targetX =[];
var targetY = [];

var imagesCn = [];
var imagesUsa = [];
var imagesKorea = [];
var imagesJapan = [];

var hue = [];
var angle = [];

var dataCn, dataUsa, dataKorea, dataJapan;
var rows;



var n,margin,maxw,maxh,maxw_,maxh_;
var padding = 20;

var h1,h2,h3,h4,h5,w1,w2,w3,w4,w5;

var space;
var a = 0;


//button
var button = "a";
var btnY = 50;
var btn1, btn2, btn3; //按钮
var btnW = 90;
var btnH = 40;

var hlcolor = (255,0,74);
var unhlcolor = (220);

var hltxt = 250;
var unhltxt = 100;

var btn1Color = (255,0,74);
var btn2Color = (220);
var btn3Color = (220);
var btn4Color = (220);
var txt1Color = 255;
var txt2Color = 100;
var txt3Color = 100;
var txt4Color = 100;

var boxw = 140;
var boxh = 60;


function setup() {
  createCanvas(windowWidth, 2500);
  rows = dataCn.getRowCount();

  
  if(width > 2000){
    n = 50;
}else{
    n = 30;
}
margin = width/100*8;
space = (width-2*margin)/n; 

maxw = (width-margin*2)/n*0.8;
maxh = maxw*1.5;
padding = (width-margin*2)/n*0.2;
maxw_ = maxw*1.5;
maxh_ = maxh*1.5;


  // for(var i = 0; i<500;i++){
  //   imagesCn[i] = createImg(dataCn.getString(i,18));
  //   imagesCn[i].hide();
  //   imagesUsa[i] = createImg(dataUsa.getString(i,18));
  //   imagesUsa[i].hide();
  //   imagesKorea[i] = createImg(dataKorea.getString(i,18));
  //   imagesKorea[i].hide();
  //   imagesJapan[i] = createImg(dataJapan.getString(i,18));
  //   imagesJapan[i].hide();
  // }

}

function preload() {
  dataCn = loadTable("data/china.csv","header");
  dataUsa = loadTable("data/usa.csv","header");
  dataKorea = loadTable("data/korea.csv","header");
  dataJapan = loadTable("data/japan.csv","header");

  for(var i = 0; i<500;i++){
    imagesCn[i] = loadImage("image/china/china-"+i+".jpg");
    imagesUsa[i] = loadImage("image/usa/usa-"+i+".jpg");
    imagesKorea[i] = loadImage("image/korea/korea-"+i+".jpg");
    imagesJapan[i] = loadImage("image/japan/japan-"+i+".jpg");
}
}


function draw(){
  background(255);
  drawBtn(btnY); 
  if(button == "a") {    
    drawRect(dataCn);
    showPost(dataCn,imagesCn);
    
}else if (button == "b") {

    drawRect(dataUsa);
    showPost(dataUsa,imagesUsa);
    
}else if (button == "c"){
    drawRect(dataKorea);
    showPost(dataKorea,imagesKorea);

}else if (button == "d"){

    drawRect(dataJapan);
    showPost(dataJapan,imagesJapan);

}
}




function drawRect(data){
    rectMode(CORNER);
    for(var i = 0; i<rows; i++){
        rectMode(CORNER);
        strokeWeight(0.5);
        stroke(10);

        x[i] = margin + space*(i%n);
        y[i] = margin + (maxh+padding)*int((i/n));
        h1 = maxh*data.getNum(i,8);
        fill(data.getString(i,9));
        rect(x[i], y[i], maxw, h1);

        h2 = y[i]+h1;
        w2 = data.getNum(i,10)*maxw*maxh/(maxh-h1);
        fill(data.getString(i,11));
        rect(x[i], h2, w2, maxh-h1);

        h3 = h2;
        w3 = data.getNum(i,12)*maxw*maxh/(maxh-h1);
        fill(data.getString(i,13));
        rect(x[i]+w2,h2,w3,maxh-h1);

        w4 = maxw -w2 -w3;
        h4 = data.getNum(i,14)*maxw*maxh/w4;
        fill(data.getString(i,15));
        rect(x[i]+w2+w3,h2, w4,h4);

        h5 = maxh - h1-h4;
        fill(data.getString(i,17));
        rect(x[i]+w2+w3,y[i]+h1+h4,w4,h5); 

    }
}


function showPost(data,images){
   for(var i = 0; i<rows; i++){        

     if(mouseX>x[i] && mouseX <x[i]+maxw && mouseY>y[i] && mouseY<y[i]+maxh){

        noStroke();
        fill(255,200);
        rect(0,0,width,3000);


        push();
        translate(-maxw/8,-maxh/8);
        rectMode(CORNER);

        
        strokeWeight(1);
        stroke(10);

        x[i] = margin + space*(i%n);
        y[i] = margin + (maxh+padding)*int((i/n));
        h1 = maxh_*data.getNum(i,8);
        fill(data.getString(i,9));
        rect(x[i], y[i], maxw_, h1);

        h2 = y[i]+h1;
        w2 = data.getNum(i,10)*maxw_*maxh_/(maxh_-h1);
        fill(data.getString(i,11));
        rect(x[i], h2, w2, maxh_-h1);

        h3 = h2;
        w3 = data.getNum(i,12)*maxw_*maxh_/(maxh_-h1);
        fill(data.getString(i,13));
        rect(x[i]+w2,h2,w3,maxh_-h1);

        w4 = maxw_ -w2 -w3;
        h4 = data.getNum(i,14)*maxw_*maxh_/w4;
        fill(data.getString(i,15));
        rect(x[i]+w2+w3,h2, w4,h4);

        h5 = maxh_ - h1-h4;
        fill(data.getString(i,17));
        rect(x[i]+w2+w3,y[i]+h1+h4,w4,h5); 

        pop();


        var posx = x[i]+maxw_/2;
        var posy = y[i]+maxh_/2+160;
        
        //黑色背景
        fill(0,200);
        noStroke();
        vertex(posx,posy+60-170);
        vertex(posx-10,posy+60-150);
        vertex(posx+10,posy+60-150);
        endShape(CLOSE);

        rectMode(CENTER);
        rect(posx,posy+60,180,300);
        beginShape();

        //海报
        imageMode(CENTER);
        image(images[i],posx,posy+30,150,214);
        
        //电影信息
        fill(255);
        textSize(16);
        textAlign(LEFT);
        text("《"+data.getString(i,1)+"》",x[i]-50,y[i]+maxh_+270);
        text(data.getString(i,2)+"分",x[i]-46,y[i]+maxh_+300);
    }
}
}



function drawBubble(data){
 for(var i = 0; i<rows; i++){
    noStroke();
    x[i] = margin + space*(i%s);
    y[i] = margin + (10+space)*int((i/s));

    var r = map(data.getNum(i,8),0,1,0,50);


    fill(data.getString(i,9));
    ellipse(x[i],y[i],r,r);
}   
}


function drawBtn(btnY) {
    strokeCap(ROUND);
    stroke(10);
    rectMode(CORNER);
    fill(btn1Color);
    rect(width/2-2*btnW, btnY, btnW, btnH);
    fill(btn2Color);
    rect(width/2-1*btnW, btnY, btnW, btnH);
    fill(btn3Color);
    rect(width/2,btnY, btnW, btnH);
    fill(btn4Color);
    rect(width/2+1*btnW, btnY, btnW, btnH);

    noStroke();
    textAlign(CENTER, CENTER);
    textSize(14);
    fill(txt1Color);
    text("华语电影", width/2-2*btnW, btnY, btnW, btnH);

    fill(txt2Color);
    text("欧美电影", width/2-1*btnW, btnY, btnW, btnH);

    fill(txt3Color);
    text("韩国电影", width/2, btnY, btnW, btnH);

    fill(txt4Color);
    text("日本电影", width/2+btnW, btnY, btnW, btnH);

}



function mousePressed() {
    if (mouseX> width/2-2*btnW && mouseX< width/2-1*btnW &&
        mouseY> btnY && mouseY< btnY + btnH) {
        button = "a";
    btn1Color = color(hlcolor);
    btn2Color = color(unhlcolor);
    btn3Color = color(unhlcolor);
    btn4Color = color(unhlcolor);
    txt1Color = color(hltxt);
    txt2Color = color(unhltxt);
    txt3Color = color(unhltxt);
    txt4Color = color(unhltxt);
} else if (mouseX > width/2-1*btnW && mouseX < width/2&&
    mouseY> btnY && mouseY < btnY + btnH) {
    button = "b";
    btn1Color = color(unhlcolor);
    btn2Color = color(hlcolor);
    btn3Color = color(unhlcolor);
    btn4Color = color(unhlcolor);
    txt1Color = color(unhltxt);
    txt2Color = color(hltxt);
    txt3Color = color(unhltxt);
    txt4Color = color(unhltxt);
} else if (mouseX > width/2&& mouseX < width/2+btnW&&
    mouseY> btnY && mouseY < btnY + btnH) {
    button = "c";
    btn1Color = color(unhlcolor);
    btn2Color = color(unhlcolor);
    btn3Color = color(hlcolor);
    btn4Color = color(unhlcolor);
    txt1Color = color(unhltxt);
    txt2Color = color(unhltxt);
    txt3Color = color(hltxt);
    txt4Color = color(unhltxt);
} else if (mouseX > width/2+1*btnW && mouseX < width/2+2*btnW&&
    mouseY> btnY && mouseY < btnY + btnH) {
    button = "d";
    btn1Color = color(unhlcolor);
    btn2Color = color(unhlcolor);
    btn3Color = color(unhlcolor);
    btn4Color = color(hlcolor);
    txt1Color = color(unhltxt);
    txt2Color = color(unhltxt);
    txt3Color = color(unhltxt);
    txt4Color = color(hltxt);
} 
}



























