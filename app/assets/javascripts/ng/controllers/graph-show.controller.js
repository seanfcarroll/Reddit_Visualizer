var RV = RV || {}
RV.RedditViz.controller('GraphShowCtrl', ['$scope', 'subredditService', '$timeout',
  function($scope, subredditService, $timeout) {

    var _showSubreddit = function(d) {
      $scope.subreddit = d;
      $scope.$apply()
    }

    $scope.subredditName = "AskReddit";
    $scope.drawGraph = function() {
      subredditService.getSubreddit($scope.subredditName)
        .then(function(response) {
          RV.config.json.rootId = response.id;
          RV.config.nodeClickHandlers = [ _showSubreddit ];
          $scope.subreddit = response;
          RV.graph.init(RV.config);
        });
    }

    $(".tt-dataset").on("click",".tt-suggestion", function(e){
      var text = e.currentTarget.innerText
      $scope.subredditName = text
    })

    $scope.expandChildren = function(){
      RV.graph.expandChildren()
    }

    $scope.drawGraph()
  }])
