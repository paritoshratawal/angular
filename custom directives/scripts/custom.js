var app=angular.module('myApp',[]);

app.directive('myCustom',function(){
    return{

        template: '<strong>{{msg}}</strong>',
        restrict:'A'
        /*link:function(scope,element,attrs)
        {
            element.hide(4000)
        }*/

    };
});


app.controller('myCtrl',['$scope',function($scope){
$scope.msg="HELLO WORLD";
}]);
