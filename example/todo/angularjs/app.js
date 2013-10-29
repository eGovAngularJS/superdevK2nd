function userMgtCtr ($scope,$http) {
 $scope.deptList = [
  { deptId: '001', deptNm: '부서A'},
  { deptId: '002', deptNm: '부서B'}
 ];

	$scope.posList = [
  { posId: '001', posNm: '부서A'},
  { posId: '002', posNm: '부서B'}
 ];

	$scope.find = function (sObj) {
		$http({
				method: 'GET', url: 'getUserList',
				params: { deptId: sObj.deptId, posId: sObj.posId }
			})
				.success(function(data, status, headers, config) {
					response.data = $scope.userList;
				});
	};

	$http({method: 'GET', url: 'getDeptCode'})
		.success(function(data, status, headers, config) {
			response.data = $scope.deptList;
		});

	$http({method: 'GET', url: 'getPosCode'})
		.success(function(data, status, headers, config) {
			response.data = $scope.posList;
		});

}