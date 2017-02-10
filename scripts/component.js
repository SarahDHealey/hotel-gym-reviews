(function() {
  "use strict";
  angular.module('app', [])
  .component('reviewsPage', {
  controller: controller,
  templateUrl: './templates/main.html'
  })

  function controller() {
    const vm = this

    vm.$onInit = function () {
      vm.showNewPostForm = false;
    }

    vm.formatPost = function () {
    let post = {};
    post.title = vm.title;
    post.author = vm.author;
    post.image = vm.image;
    post.description = vm.description;
    vm.formattedPost = post;
    console.log(vm.formattedPost)
    }
  }

}());