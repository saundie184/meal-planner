'use strict';

app.controller('MainController', [mainController]);

function mainController(){
  var vm = this;
  vm.title = "My Meal Planner";
  vm.isOpen = false;
   vm.demo = {
     isOpen: false,
     count: 0,
     selectedDirection: 'left'
   };

}
