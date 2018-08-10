angular.module("mainModule")
       .component("postsList", {
    bindings: {
        query:"="
    },
    templateUrl:"posts-list/posts-list.template.html",
    controller: function postsListController($http){
        let self = this;
        
        $http.get("https://jsonplaceholder.typicode.com/posts").then(function(response){
            self.posts = response.data; 
        }, function(response){
            self.status = response.status; 
        });
    }
});