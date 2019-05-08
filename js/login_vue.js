var login = new Vue({
	el : "#login",

	data: {
		id : '',
		password : '',
	},

	methods :{
		login : function(){
			axios.post("http://api.dasom.io:8000/v1/signin",{
				id : this.id,
				password : this.password
			})
			.then(function(response){
				console.log(response);
				location.href = "/logged_in.html";
			})
			.catch(function(error){
				console.log(error);
				location.reload();
			})
		}
	}
})

/*
id / password
2018100000 / test
2019100000 / test
2018100001 / test
*/
/*
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
*/

/*
	url : http://api.dasom.io:8000
	/signin 에다가 post로 json 보내기.
	{
		"id" : "~~~"
		"password" : "~~~"
	}
	성공 : 200, 실패 : 401
*/

/*
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
  }
})

var app3 = new Vue({
	el: "#app-3",
	data :{
		seen : false
	}
})
*/
/*
var app6 = new Vue({
	el: "#app-6",
	data :{
		message : "워우 Vue.js!"
	},
	methods :{
		reverseMessage : function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})
*/

