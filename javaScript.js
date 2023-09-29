const User=document.getElementById('username');

const btn=document.getElementById('add'); 
const btnn=btn.innerHTML;

const tables=document.getElementById('table')


let a=[];
let edit=null;







let obj=localStorage.getItem('users');

if(obj!=null){
    a=JSON.parse(obj);

}


display()

btn.onclick=()=>{
    const name=User.value;

if(edit!=null){
    a.splice(edit,1,{'name':name})
    edit=null;


}
else{

   
   
    a.push({'name':name});
    
}

User.value="";
   
    save(a)
   
    btn.innerHTML=btnn
}

function save(a){
    const b=JSON.stringify(a);
    localStorage.setItem('users',b)
    display();


}
function display(){
let show='';
a.forEach((user,i)=>{
   show+=`<tr>
    <th scope="row">${i+1}</th>
    <td>${user.name}</td>
    <td><i class=" btn btn-danger fa fa-trash"   onclick ='Delete(${i})'></i>
        <i class="btn btn-success fa fa-edit" aria-hidden="true"onclick ='Edit(${i})'></i>  </td>
        
  </tr> `;
  tables.innerHTML=show;
})




}
function Edit(id){
edit=id;
User.value=a[id].name;
btn.innerHTML="Edit";
}
function Delete(id){

    a.splice(id,1);
    save(a)
    
}





