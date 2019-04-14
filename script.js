var MainController = function($scope) {
  var person = {
    firstName: "Dwight",
    lastName: "Schrute",
    imageSrc:
      "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj54J2FytDhAhXWFzQIHTqQArAQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDwight_Schrute&psig=AOvVaw0bT1gpjuKp1-p6W72O2hb4&ust=1555365466797885"
  };

  $scope.message = "Hello, World!";
  $scope.person = person;
};
