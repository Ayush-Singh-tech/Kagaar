// document.querySelector('.friends-list input').addEventListener('input', function() {
//     const filter = this.value.toLowerCase();
//     const friends = document.querySelectorAll('.friends-list ul li');
    
//     friends.forEach(friend => {
//         const name = friend.querySelector('span').textContent.toLowerCase();
//         if (name.includes(filter)) {
//             friend.style.display = 'flex';
//         } else {
//             friend.style.display = 'none';
//         }
//     });
// });

document.querySelector('.open-sidebar').addEventListener("click", ()=>{
    document.querySelector('.sidebar').style.display="flex"
    
})
document.querySelector('.close-sidebar').addEventListener("click",()=>{
    document.querySelector('.sidebar').style.display="none"
})

document.querySelector('.open-friends-list').addEventListener("click", ()=>{
   document.querySelector('.friends-list').style.display="block"
})
document.querySelector('.close-friends-list').addEventListener("click",()=>{
    document.querySelector('.friends-list').style.display="none"
})

document.querySelector('.open-search-input').addEventListener("click", ()=>{
    document.querySelector('.search-input').style.display="block"
    document.querySelector('.')
 })
