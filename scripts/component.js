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
  let postParts = [vm.title]
  postParts.push(vm.author)
  postParts.push(vm.image)
  postParts.push(vm.description)
  vm.formattedPost = postParts.join(' ')
  console.log(vm)
  }
  }

}());