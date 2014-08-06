function Page (){
  this.init = function() {
    this.initStyling();
    this.initEvents();
  };
  Page.prototype.initStyling = function () {};
}


$(document).ready(function() {
page.init();
});

  var page = {

      init: function(){
        this.initStyling();
        this.initEvents();
      },

      initStyling: function(){

      },

      initEvents: function(){

        $(".box").on("click","#ham",function(){
        hamburger.eat(Chris)});

        $(".box").on("click","#fish",function(){
        fish.eat(Chris)});

        $(".box").on("click","#soup",function(){
        soup.eat(Chris)});

        $(".box2").on("click","#run",function(){
        run.do(Chris)});

        $(".box2").on("click","#swim",function(){
        swim.do(Chris)});

        $(".box2").on("click","#bike",function(){
        bike.do(Chris)});



        }
      }
