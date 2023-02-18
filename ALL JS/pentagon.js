document.getElementById('pentagon-calculate').addEventListener('click', function(){

    const inputelement1String =document.getElementById('pentagon-p-input');
    const inputelement2String =document.getElementById('pentagon-h-input');
    
    const inputElementofValue1 = parseFloat(inputelement1String.value);
    const inputElementofValue2 = parseFloat(inputelement2String.value);
    if((isNaN(inputElementofValue1)|| isNaN(inputElementofValue2))){
        
        inputelement1String.value = '';
        inputelement2String.value = '';
        return alert("Plase Input a Number");
    }
    else if( inputElementofValue1 < 0 || inputElementofValue2 < 0) {
        inputelement1String.value = '';
        inputelement2String.value = '';
        return  alert("Plase Input a Positive Number");
    }

    cunter+=1;
      const resultArea = document.getElementById('Calculate-result')
      const tr = document.createElement('tr');
      tr.innerHTML= `<tr>
      <td>${cunter}</td>
      <td> ${areaOfTRP('pentagon-p-input', 'pentagon-h-input' )} </td>
      <td><button class="btn btn-primary ml-2 position-relative bottom-50"> Convert </button></td> 
      </tr>`
      resultArea.appendChild (tr);
    })
    function setBgpentagon(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const btnbody = document.getElementById('pentagon-border')
        btnbody.style.backgroundColor = "#" + randomColor;
        
      }