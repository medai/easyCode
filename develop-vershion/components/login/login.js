(function() {
  'use strict';


		loginCtrl.$inject = ["$scope", "factoryAuth"];
  angular.module('app')

  		.component('login', {
	      templateUrl: 'components/login/login.html',
	      controller: loginCtrl 
    	});

      
  	// @ngInject
    function loginCtrl($scope, factoryAuth) {

      $scope.user = {email: "", password: ""};


      $scope.login = function() {

        factoryAuth.postLogin($scope.user).then( function ( d ) {
          if ( d.result === 'ok' ) {

          } else {
            
          }
        });



      };




		}

})();