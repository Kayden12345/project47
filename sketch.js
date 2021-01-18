var personWalking;
var person;

function preload(){
    personWalking = loadAnimation("images/Walking Frame/walking_1.png","images/walking_2.png","images/walking_3.png","images/walking_4.png","images/walking_5.png","images/walking_6.png","images/walking_7.png","images/walking_8.png")
}

function setup(){
    createCanvas(700,400)
   person = createSprite(80,100,20,20)
   person.addAnimation("moving", personWalking)
    
}

function draw(){
    
}   

