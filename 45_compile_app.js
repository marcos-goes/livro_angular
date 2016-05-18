angular.module('dynamicFormApp', [])
   .controller('MainCtrl', [function(){
      var self = this;
      self.username = '';
      self.password = '';

      self.teste = function(){
         alert(self.username + ' | ' + self.password);
      }
   }]);
