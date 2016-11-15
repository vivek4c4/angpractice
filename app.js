(function () {
  angular.module("myFirstApp",[])
  .controller("myFirstController",function($scope) {
    $scope.name="";

    $scope.check2much=function () {
      var names=$scope.name;

      var result=names.split(',');
      var totallength=result.length;
      var lenEmpty=0;
      for (var i = 0; i < result.length; i++) {
        console.log(result[i]);
        if (result[i]!=null &&result[i]==" " &&result[i].length==1) {
          lenEmpty++;

        }
      }
      var correctLen=totallength-lenEmpty;
      console.log("emptylen",lenEmpty);
      console.log("corroect",correctLen);
      console.log(result);
      if (correctLen==1 && result=="") {
        $scope.isempty="enter a value first";
        $scope.color={"color":"red"};
        $scope.bordercolor={"border-color":"red"};
      }
      else if (correctLen<=3) {
        $scope.isempty="enjoy.!";
        $scope.color={"color":"green"};
        $scope.bordercolor={"border-color":"green"};
      }
      else if (correctLen>=4) {
        $scope.isempty="Too much.!"
        $scope.color={"color":"green"};
        $scope.bordercolor={"border-color":"green"};
      }
      else{
        $scope.isempty="";
      }
    };

  })
})();
