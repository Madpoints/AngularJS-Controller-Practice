var MainController = function($scope) {
  var person = {
    firstName: "Dwight",
    lastName: "Schrute",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzj9UIzG9lDCRqL-3_kuwjgmCAMwxrW4Ikeg08nI4wgo8eZrjB"
  };

  $scope.message = "Hello, World!";
  $scope.person = person;
};
