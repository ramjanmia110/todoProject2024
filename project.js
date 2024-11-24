
let cardBox =document.getElementById('card_box');
let inputBox =document.getElementById('name');
let areaBox =document.getElementById('caption');
let addButton =document.getElementById('btn01');
let nameSpan =document.querySelector('.input_Field');
let areaSpan =document.querySelector('.caption_areabox');
let updateButton =document.getElementById("btn02")

let arrValue =[];
let indexBox ;

addButton.addEventListener('click',()=>{
    if(inputBox.value === "" && areaBox.value === ""){
        inputBox.style.border ='1px solid red';
        areaBox.style.border ='1px solid red';
        nameSpan.innerHTML ='Please Enter A Full Name Value';
        nameSpan.style.display ='inline-block';
        areaSpan.innerHTML ='Please Enter Description Field Value';
        areaSpan.style.display ='inline-block'
    }else if(inputBox.value === ""){
        inputBox.style.border ='1px solid red';
        nameSpan.innerHTML ='Please Enter A Full Name Value';
        nameSpan.style.display ='inline-block';

        areaBox.style.border ='';
        areaSpan.innerHTML ='';
        areaSpan.style.display ='none'

    }else if(areaBox.value === ""){
        areaBox.style.border ='1px solid red';
        areaSpan.innerHTML ='Please Enter Description Field Value';
        areaSpan.style.display ='inline-block';

        inputBox.style.border ='';
        nameSpan.innerHTML ='';
        nameSpan.style.display ='none';

    }else{
       arrValue.push({
        PersonName :inputBox.value,
        caption    :areaBox.value
       })

       inputBox.value ="";
       areaBox.value ="";
       nameSpan.innerHTML ="";
       areaSpan.innerHTML ="";
       cardBox.innerHTML ="";
       inputBox.style.border ="";
       areaBox.style.border ="";
       display()

       
    }
})

updateButton.addEventListener('click',()=>{

    if(inputBox.value ==="" && areaBox.value ==="" ){
        inputBox.style.border ='1px solid red';
        areaBox.style.border ='1px solid red';
        nameSpan.innerHTML ='Please Enter A Update Value';
        nameSpan.style.display ='inline-block';
        areaSpan.innerHTML ='Please Enter A Update Description Value';
        areaSpan.style.display ='inline-block'
        return;
    }else if(inputBox.value ===""){
    inputBox.style.border ='1px solid red';
    nameSpan.innerHTML ='Please Enter A Update Value';
    nameSpan.style.display ='inline-block';

    areaBox.style.border ='';
    areaSpan.innerHTML ='';
    areaSpan.style.display ='none';
    return;

    }else if(areaBox.value ==="" ){
        areaBox.style.border ='1px solid red';
        areaSpan.innerHTML ='Please Enter A Update Description Value';
        areaSpan.style.display ='inline-block';

        inputBox.style.border ='';
        nameSpan.innerHTML ='';
        nameSpan.style.display ='none';
        return;

    }else{
    arrValue[indexBox].PersonName =inputBox.value;
    arrValue[indexBox].caption =areaBox.value;
    cardBox.innerHTML ="";
    updateButton.style.display ="none";
    addButton.style.display ="inline-block"
    inputBox.value ="";
    areaBox.value ="";
    inputBox.style.border ="";
    areaBox.style.border ="";
    nameSpan.style.display ="none";
    areaSpan.style.display ="none";
    display()

    
  
    }
    
  
})

function display(){
    arrValue.map((value)=>{
        cardBox.innerHTML+=`
                    <div class="intro_box">
                        <h2>${value.PersonName}</h2>
                        <p>${value.caption}</p>
                        <div class="buttons">
                            <button id="edit_btn">Edit</button>
                            <button id="delete_btn">Delete</button>
                        </div>
                    </div>
        `
    })

    let deleteButton =document.querySelectorAll('#delete_btn');
    let arrayDelete =Array.from(deleteButton);
    arrayDelete.map((items,index)=>{
        items.addEventListener('click',()=>{
           arrValue.splice(index,1)
           cardBox.innerHTML ="";
           display()
        })
    })


    let editButton =document.querySelectorAll('#edit_btn');
    let arrayEdit =Array.from(editButton);
    arrayEdit.map((items,index)=>{
        items.addEventListener('click',()=>{
            inputBox.value =arrValue[index].PersonName;
            areaBox.value =arrValue[index].caption;
            
            cardBox.innerHTML ="";
            updateButton.style.display ="inline-block";
            addButton.style.display ="none"
            indexBox =index;
            display()


            })
    })
}

