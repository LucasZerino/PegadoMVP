const inputs = document.querySelectorAll(".input");


function form(){
    
}

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


containerForm = document.querySelector(".main-slider-three__bottom").querySelectorAll("a");
console.log(containerForm);

containerForm.forEach(element => {
    element.addEventListener("click", function(){
        containerForm.forEach(containerForm=>containerForm.classList.remove("active"));
        this.classList.add("active");
    })
})

function abrir(){
    let form = document.getElementById("formulario");
        form.classList.add('ativo');
}

function fechar(){
    let form = document.getElementById("formulario");
    form.classList.remove('ativo');
}
