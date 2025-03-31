const author=document.getElementById('author');
const title=document.getElementById('title');
const date=document.getElementById('date');
const btn=document.querySelector('.btn');
const message=document.querySelector('.message');
const today=new date();
let hour=today.gethour();
let minute=today.getminute();

btn.addEventListener('click', showText);
function showText(){
  const text=document.querySelector('.text');
  const author=document.getElementById('author');
  const title=document.getElementById('title');
  const date=document.getElementById('date');
  const h2=document.querySelector('.txt');
 
  const info=document.querySelector('.info');
 const p=document.createElement('p');
 const input=document.getElementsByTagName('input');
  for(let i=0; i<input.length; i++){
  if(date.value && author.value && title.value){
    
    text.appendChild(p);
    p.className="para";
    p.innerHTML=`<h2 class="txt">meeting scheduled
    <i class="fa-solid fa-arrow-right"> </i> </h2>` +
    date.value+ ":" +" "+ author.value+"," +" " +title.value
    +`<span class="close">delete</span>` +`<i class="fa-solid fa-calendar-check"></i>` + `${hour}:${minute}`;
  
  
  }else{
    info.style.marginLeft="0px";
    
  }
  }
  
  setTimeout(()=>{
    info.style.marginLeft="-500px";
  },2000);
  
  const para=document.getElementsByClassName('para');
  for(let i=0;  i<para.length; i++) {
  para[i].addEventListener('click', delet);

  function delet(){
    
    const current=document.getElementsByTagName('p');
    for(let i=0; i<current.length; i++){
    current[i].className="para";
    if(current[i].className==="para"){
        this.style.display="none";
        message.style.marginBottom="110px";
    }else{
         this.style.display="block";
      
    }
    
    }
  }
  setTimeout(()=>{
     message.style.marginBottom="-300px";
  }, 5000);

}
const bttn=document.querySelector('.bttn');
bttn.addEventListener('click', remove);
function remove(){
  const p=document.getElementsByTagName('p');
       const text=document.querySelector('.text');    
       while(text.hasChildNodes()) {
      text.removeChild(text.firstChild);
      } 
      
      }
}