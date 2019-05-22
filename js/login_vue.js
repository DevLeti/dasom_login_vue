// USING VUE
// var login = new Vue({
// 	el : "#login",

// 	data: {
// 		id : '',
// 		password : '',
// 	},

// 	methods :{
// 		login : function(){
// 			axios.post("http://api.dasom.io:8000/v1/signin",{
// 				id : this.id,
// 				password : this.password
// 			})
// 			.then(function(response){
// 				console.log(response);
// 				location.href = "/logged_in.html";
// 			})
// 			.catch(function(error){
// 				console.log(error);
// 				document.write("!!!ERROR!!!");
// 			})
// 		}
// 	}
// })

// /*
// id / password
// 2018100000 / test
// 2019100000 / test
// 2018100001 / test
// */
// /*
// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// */

// /*
// 	url : http://api.dasom.io:8000
// 	/signin 에다가 post로 json 보내기.
// 	{
// 		"id" : "~~~"
// 		"password" : "~~~"
// 	}
// 	성공 : 200, 실패 : 401
// */

// USING JS
const formEl = document.querySelector(`form`);
formEl.addEventListener(`submit`, (e) => {
	e.preventDefault();

	//콘솔로 받은 값 확인
	var user_input_id = $('input[name=id]').val();
	var user_input_pw = $('input[name=password]').val();
	console.log(user_input_id);
	console.log(user_input_pw);

	//axios를 이용해 post형식으로 서버에 정보 확인.
	axios.post("http://api.dasom.io:8000/signin", {
		id: $('input[name=id]').val(),
		password: $('input[name=password]').val()
	})
		//성공시 logged_in.html로 redirect
		.then(function (response) {
			console.log(response);
			location.href = document.location.href +"logged_in.html";
		})
		//실패시 페이지 reload
		.catch(function (error) {
			console.log(error);
			location.reload();
		})
});

// /*
// id / password
// 2018100000 / test
// 2019100000 / test
// 2018100001 / test
// */
