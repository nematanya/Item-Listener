// console.log(document.forms);
// console.log(document.head);
// var sec=document.querySelector('.list-group-item:nth-child(3var)');
// sec.style.color="red";
// var iteml=document.querySelector('#items');
// iteml.parentNode.style.backgroundColor='yellow';
// var newp=document.createElement('p');
// newp.className ='tanya';
// var pt=document.createTextNode('tanya');
// newp.appendChild(pt);

// var aft=document.querySelector('#test');

// bef.insertBefore(newp,aft);
// var button =document.getElementById('button');
// button.addEventListener('mouseenter',buttonclicked);
// function buttonclicked(e)
// {
//  document.head.style.backgroundColor ="black";
// }
var form=document.getElementById('button');
var listadd=document.getElementById('items');
listadd.addEventListener('click',removeItem);
form.addEventListener('click',addItem);
function addItem(e){
    e.preventDefault();
    var newitem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newitem));
    listadd.appendChild(li);
    var bt=document.createElement('button');
    bt.className="btn btn-danger btn-sm float-right delete";
    bt.textContent='X'
    li.appendChild(bt);
    listadd.appendChild(li);


}
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    { if(confirm("want to delete the item ")){
var li=e.target.parentElement;
    listadd.removeChild(li);}
}}