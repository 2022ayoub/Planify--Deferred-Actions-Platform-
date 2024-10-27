const addNote=document.querySelector('.add-note');
const form =document.querySelector('form.create-note');
const notes=document.querySelector('ul.notes-container');
const btn=document.querySelector('div.btns button.btn-add')
addNote.addEventListener('click',()=>{
    form.style.display='flex';
    notes.style.display='none'
    
});
btn.addEventListener('click',()=>{
    form.style.display='none';
    notes.style.display='flex';
    
});

const title=document.querySelector('#title');
const content=document.querySelector('#content');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(title.value.trim()!='' && content.value.trim()!=''){
        form.submit()
    }
});