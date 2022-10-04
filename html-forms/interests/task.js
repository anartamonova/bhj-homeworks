const interestsActive = Array.from(document.getElementsByClassName('interests_active'));
mainInterests = [];
interestsActive.forEach((i)=>{
  mainInterests.push(i.previousElementSibling.children[0]);
})
mainInterests.forEach((i)=>{
  i.addEventListener('change',()=>{
  let list = Array.from(i.closest('li').getElementsByClassName('interests_active'));
  let input = Array.from(list[0].getElementsByClassName('interest__check')); 
  input.forEach((e)=>{
    (i.checked) ? e.checked = true : e.checked = false;
    });
  });
})