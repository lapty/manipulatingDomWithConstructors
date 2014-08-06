function Person(name, fullness, energy) {

  this.name = name;
  this.fullness  = fullness;
  this.energy = energy;

  this.ate = function (foodAte) {
    this.fullness = this.fullness + foodAte;
    this.energy = this.energy + foodAte/2;

    if (this.fullness > 100 && this.fullness < 150) {
      $(".currentBox").text("You're too full. You will get sick if you continue eating.");
  } else if (this.fullness > 151) {
      return $(".currentBox").text("YOU DIED FROM EATING TOO MUCH. NICE JOB."),
      $(".container").css('background-image','url(http://icons.iconarchive.com/icons/aha-soft/desktop-halloween/128/Skull-and-bones-icon.png)')
    }
  };

  this.did = function (actionDid) {
  this.energy = this.energy - actionDid;
  this.fullness = this.fullness - actionDid/4;
  if (this.energy < 0) {
    return $(".currentBox").text("YOU'RE DEAD FROM EXHAUSTION. POOR YOU."),
    $(".container").css('background-image','url(http://icons.iconarchive.com/icons/aha-soft/desktop-halloween/128/Skull-and-bones-icon.png)')

  } else if (this.energy > 0 && this.energy < 40) {
      return $(".currentBox").text("You're exhausted.")
    } else {
      return $(".currentBox").text("You do the activity.")
  }

  };


};



function Food(name, howFilling) {

  this.name = name;
  this.howFilling = howFilling;
  this.eat = function(Person) {
    $(".currentBox").text("You ate. ");
      Person.ate(this.howFilling);
    $(".statsbar").text(Person.fullness);
  }
};

function Action(name, energyCost) {
  this.name = name;
  this.energyCost = energyCost;
  this.do = function(Person) {
    $(".currentBox").text("You do the activity.");
      Person.did(this.energyCost);
      $(".statsbar2").text(Person.energy);
    }
  };


var Brendan = new Person ("Brendan", 0, 100);
var Chris = new Person ("Chris", 0, 100);


var hamburger = new Food ("Hamburger", 19);
var fish = new Food ("Fish", 14);
var soup = new Food ("Soup", 12)

var run = new Action ("Run", 10)
var swim = new Action ("Swim", 15)
var bike = new Action ("bike", 11)



//help commands
// var foodmenu = ["fries", "hamburger","fish","soup"];
// var actions =["swim","run","jog","bike","nap"];
// var personlist =["Brendan","Charles","Will","Margaret","Andrew"];
// var help = ["To eat, type: food.eat(name). To do an action, type: action.do(name)"];
//
//
// //Intro phrase
// $(".currentBox").text ("Try not to die.    to begin, type personlist//foodmenu//actions//help")
