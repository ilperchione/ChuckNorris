document.querySelector("a").addEventListener("click", function(e){
	e.preventDefault();

	function thenCallback(response){
		if(response.status === 200){
			return response.json()
		}
	}

	function catchCallback(error){
		console.log(error)
		document.querySelector("#error").innerHTML = error
	}

	function finalCallback(data){
		console.log(data.value)
		document.querySelector("#joke").innerHTML = data.value
	}

	fetch("https://api.chucknorris.io/jokes/random")
		.then(thenCallback)
		.then(finalCallback)
		.catch(catchCallback)

})