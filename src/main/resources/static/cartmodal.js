angular.module("modal", [])
    .controller('modalcarts', function($scope){
        $scope.cartbox_show = true;
        $scope.open = function () {
            $scope.cartbox_show = false;
            $scope.cartsArray = JSON.parse(localStorage.getItem("carts"));
        };
        $scope.close = function () {
            $scope.cartbox_show = true;
        };

        $scope.cartsArray = JSON.parse(localStorage.getItem("carts"));
        $scope.but_show = false;

    if ($scope.cartsArray.length == 0) {
        $scope.but_show = true;
    }


    $scope.removeOne = function ($index) {
        console.log("delete" + $index);
        $scope.cartsArray.splice($index, 1);

        localStorage.setItem("carts", JSON.stringify($scope.cartsArray));
        if ($scope.cartsArray.length == 0) {
            $scope.but_show = true;
        }


    };
    $scope.increment = function ($index) {
        console.log("increment" + $index);
        var a = $scope.cartsArray[$index].quantity;
        $scope.cartsArray[$index].quantity = a + 1;
        localStorage.setItem("carts", JSON.stringify($scope.cartsArray));
    };
    $scope.decrement = function ($index) {
        console.log("decrement" + $index);
        var a = $scope.cartsArray[$index].quantity;
        if (a > 1) {
            $scope.cartsArray[$index].quantity = a - 1;
            localStorage.setItem("carts", JSON.stringify($scope.cartsArray));
        }

    };

    $scope.total_item = function ($index) {
          $scope.sum = $scope.cartsArray[$index].price * $scope.cartsArray[$index].quantity;
      return $scope.sum;
    };

    $scope.total = function () {
        $scope.t_price = 0;
        for (let i in $scope.cartsArray) {
           $scope.t_price += $scope.cartsArray[i].quantity * $scope.cartsArray[i].price;
           console.log($scope.t_price);
           console.log($scope.cartsArray[i].quantity);
           console.log($scope.cartsArray[i].price);

        }
        return $scope.t_price;
    }

    });