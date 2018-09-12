console.log('client running');

let foodApp = angular.module('FoodApp' , []);

foodApp.controller('FoodController' , function(){
    let self = this;
    self.message= '';
    self.food = ['pizza', 'steak', 'tacos'];

    self.add = function() {
        self.food.push(self.message);
    };


})
