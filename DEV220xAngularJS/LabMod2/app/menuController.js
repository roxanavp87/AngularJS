app.controller("menuController", ["$scope", function($scope) {
    $scope.model = { title: "Our Menu" };
    $scope.changeMainDish = function(item) {
        $scope.model.mainDish = { name: item };
        switch (item) {
            case "Cheese Pizza":
                $scope.model.mainDish.price = 5.99;
                break;
            case "Pepperoni Pizza":
                $scope.model.mainDish.price = 7.99;
                break;
            case "Margherita Pizza":
                $scope.model.mainDish.price = 8.99;
                break;
            case "BBQ Chicken Pizza":
                $scope.model.mainDish.price = 11.99;
                break;
            case "Combo Pizza":
                $scope.model.mainDish.price = 13.99;
        }
    };
    $scope.$watch('model.mainDish', function(newValue, oldValue) {
        if (newValue === 'BBQ Chicken Pizza') {
            alert('You have selected the BBQ Chicken Pizza!');
        }
    });
}]);