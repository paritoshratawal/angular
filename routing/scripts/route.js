var app=angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/partial',{
            templateUrl:'../spa/h1.html'}
    )

});