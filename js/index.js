


var app = angular.module("app",["ionic"]);


app.controller("kitchen",function($scope,$http,$interval,$timeout){
      //lead
      $scope.slideHasChanged = function($index){
        console.log($index);
        if($index == 2){
          $timeout(function(){
             document.querySelector(".slider").style.display = "none";
          },2000);
        }
      }
      //lead end
      

      //shop
      $scope.fruitArrs = [{
        name:"水果",
        content:[{
        img:"./img/mugua.jpg",
        fName:"牛奶木瓜",
        fruitName:"【三 农】 海南青木瓜 牛奶木瓜 5斤",
        formerPrice:"43.0",
        price:"29",
        pid:1,
        choosenum:1,
        state:false,
        id:0
      },{
        img:"./img/yingtao.jpg",
        fName:"车厘子",
        fruitName:"【小二】烟台车厘子 新鲜现摘 2斤",
        formerPrice:"108.0",
        price:"88",
        pid:2,
        choosenum:1,
        state:false,
        id:1
      }]
      },{
        name:"零食",
        content:[{
        img:"./img/haitai.jpg",
        fName:"波力海苔",
        fruitName:"【进 口】 波力海苔  海牌海飘 32包",
        formerPrice:"49.9",
        price:"39",
        pid:3,
        choosenum:1,
        state:false,
        id:2
      },{
        img:"./img/huasheng.jpg",
        fName:"多味花生",
        fruitName:"【百草味】多味花生 零食 210*2包",
        formerPrice:"28.8",
        price:"15",
        pid:4,
        choosenum:1,
        state:false,
        id:3
      }]
      },{
        name:"生鲜",
        content:[{
        img:"./img/niurou.jpg",
        fName:"鲜牛腩",
        fruitName:"【比夫家人】鲜牛腩 进口牛肉 2斤",
        formerPrice:"88.8",
        price:"76",
        pid:5,
        choosenum:1,
        state:false,
        id:4
      },{
        img:"./img/jidan.jpg",
        fName:"农家鸡蛋",
        fruitName:"【平 沙】新鲜农鸡蛋 满88包邮 2斤",
        formerPrice:"56.6",
        price:"39",
        pid:6,
        choosenum:1,
        state:false,
        id:5
      }]
      }];

      $scope.car = false;
      $scope.shoping = true;
      $scope.chooseproduct = function($event){
        $scope.shoping = false;
        $scope.car = true;
      };
      $scope.returnShop = function($event){
        $scope.car = false;
        $scope.shoping = true;

      }

      $scope.chooseArr = [];
      $scope.choose = function($event){
        var add= angular.element($event.target).parent().attr('data-arr');
        console.log(add);
        var obj = angular.fromJson(add);
        console.log(obj)
        if ($scope.chooseArr.length!=0) {
          var zx=0;
            for(i=0;i<$scope.chooseArr.length;i++){
              if (obj.fName==$scope.chooseArr[i].fName) {
                $scope.chooseArr[i].choosenum++;
                zx=1;
              }}
              if (zx==0) {
                    $scope.chooseArr.push(obj);
                    $scope.chooseArr[$scope.chooseArr.length-1].id=$scope.chooseArr.length-1;
              }
            
            zx=0;
        }else{
          $scope.chooseArr.push(obj);
          $scope.chooseArr[$scope.chooseArr.length-1].id=$scope.chooseArr.length-1;

        }
      }
    
      $scope.addNum = function($event){
          var id = angular.element($event.target).parent().parent().attr('data-id');
          //console.log(id);
          //console.log($scope.chooseArr[id]);
          $scope.chooseArr[id].choosenum++;
      }

      $scope.jianNum = function($event){
          var id = angular.element($event.target).parent().parent().attr('data-id');
          if ($scope.chooseArr[id].choosenum == 1) {
            console.log($scope.chooseArr[id]);
            $scope.chooseArr.splice(id,1);
          }else{
            $scope.chooseArr[id].choosenum--;
          }
          for(var i=0;i<$scope.chooseArr.length;i++){
            $scope.chooseArr[i].id = i;
          }
      }

      $scope.fukuan = function($event){
         if ($scope.chooseArr.length!=0) {
            alert("提交订单成功！");
         }else{
            alert('您还没有选择商品！');
         }
         
      }



      
      //teach
      /*var teacharr = []*/
      $scope.zaixian = function($event){
         console.log($event);
         angular.element($event.target).css({
           color:"orange",
           borderBottom:"1px solid orange"
         })
      }

      $scope.record = [
          "aa",
          "ss",
          "dd",
          "ff"
      ]


      //cook
      $scope.gChang = function($event){
        console.log($event);
         angular.element($event.target).css({
             color:"orange",
             borderBottom:"2px solid orange"
         })
      }

  })


/*底部导航*/
    app.config(function($stateProvider,$urlRouterProvider){
      $stateProvider.state("tabs",{
        url:"/tab",
        templateUrl:"templates/tabs.html"
      }).state("tabs.home",{
        url:"/home",
        views:{
          "home-tab":{
            templateUrl:"templates/home.html"
          }
        }
      }).state("tabs.shop",{
        url:"/shop",
        views:{
          "shop-tab":{
            templateUrl:"templates/shop.html"
          }
        }
      }).state("tabs.teach",{
        url:"/teach",
        views:{
          "teach-tab":{
            templateUrl:"templates/teach.html"
          }
        }
      }).state("tabs.cook",{
        url:"/cook",
        views:{
          "cook-tab":{
            templateUrl:"templates/cook.html"
          }
        }
      }).state("tabs.mine",{
        url:"/mine",
        views:{
          "mine-tab":{
            templateUrl:"templates/mine.html"
          }
        }
      })
      $urlRouterProvider.otherwise("/tab/home");
    });

    



  
