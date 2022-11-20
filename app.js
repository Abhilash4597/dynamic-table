const button = document.querySelector('#add_btn')
const inputName = document.querySelector('#name')
const email = document.querySelector('#email')
const number = document.querySelector('#number')
const tablebody = document.querySelector('tbody')

button.onclick = ()=>{
    if(inputName.value =="" || email.value =="" || number.value == "" ){
alert('Please Fill Full Information');
return;
    }
tablebody.innerHTML += `<tr>
<td>${inputName.value}</td>
<td>${email.value}</td>
<td>${number.value}</td>
<td class="Delete">
<button>Delete</button>
</td>
</tr>`

var row = document.querySelectorAll(".Delete");
for(let i=0; i<row.length; i++){
    row[i].onclick = function(){
        this.parentNode.remove();
    }
}
inputName.value =""
email.value =""
number.value =""
}