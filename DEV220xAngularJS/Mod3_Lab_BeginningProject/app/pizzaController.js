app.controller('pizzaController', [
    '$scope',
    function($scope) {
        $scope.model = {
            title: 'Pizza Builder',
            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
            toppings: [],
            filteredToppings: []
        };

        $scope.addTopping = function(topping) {
            $scope.model.toppings.push(topping);
            $scope.model.search = "";
            $scope.model.success = true;
        };

        $scope.closeSuccessAlert = function() {
            $scope.model.success = false;
        };
    }
]);