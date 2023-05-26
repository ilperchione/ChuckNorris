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

fetch('https://api.chucknorris.io/jokes/categories')
  .then(function(response) {
    return response.json()
  })
  .then(data => {
	const select = document.getElementById('selectCategory');
	data.forEach(category => {
	  const option = document.createElement('option');
	  option.value = category;
	  option.text = category;
	  select.appendChild(option);
	});
  });

document.querySelector("a").addEventListener("click", function(e){
    e.preventDefault()
    console.log("Cliccato")
    let categoria = document.querySelector("select").value
    let url = ""
    if(categoria === "random"){
        url = "https://api.chucknorris.io/jokes/random"
    }else{
        url = "https://api.chucknorris.io/jokes/random?category=" + categoria
    }
    fetch(url)
    .then(function(data){
        console.log("Fetch fatta")
        return data.json()
    })
    .then(function(s){
        console.log("Battuta inserita")
        joke.innerHTML = s.value
    })
    .catch(function(){
        console.log("Error!")
    })
})

function copiaTesto() {
    var testoDaCopiare = document.getElementById("joke").innerText;

    navigator.clipboard.writeText(testoDaCopiare)
      .then(function() {
        alert("Testo copiato!");
      })
      .catch(function(error) {
        console.error("Errore durante la copia del testo:", error);
      });
  }
