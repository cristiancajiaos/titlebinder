angular.module("mainModule")
       .component("todosList", {
    bindings: {
        query:"="
    },
    templateUrl:"todos-list/todos-list.template.html",
    controller: function todosListController($http) {
        let self = this; 
        
        $http.get("https://jsonplaceholder.typicode.com/todos").then(function(response){
            self.todos = response.data;
        }, function(response){
            self.status = response.status; 
        });
    }
});