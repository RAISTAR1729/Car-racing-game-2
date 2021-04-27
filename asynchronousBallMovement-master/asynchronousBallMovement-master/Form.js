class Form{
constructor(){
    this.input=createInput("Name");
    this.button=createButton("play");  
    this.greeting=createElement("h3");
}
hide(){
this.input.hide();
this.button.hide();
this.greeting.hide();
}
display(){
var title=createElement("h2")
title.html("car racing game")
title.position(130,0)

this.input.position(displayWidth/2,displayHeight/2);

this.button.position(displayWidth/2,displayHeight/2+100);


this.button.mousePressed(()=>{
this.input.hide();
this.button.hide()
player.name=this.input.value()
playerCount=playerCount+1
player.index=playerCount
player.update()
player.updateCount(playerCount)
this.greeting.html("hello"+player.name)
this.greeting.position(150,150)

})
}
}