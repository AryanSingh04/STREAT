let ham=document.getElementById("menu")
let items=document.getElementById("menu-items")
let cross =document.getElementById("cross")
const k=[ham,cross]
console.log(items)
k.forEach((e)=>{
    e.addEventListener("click",()=>{
        items.classList.toggle("active")
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.footer-section h3');

    sections.forEach(section => {
        section.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});

gsap.from(".anim *",{
    y:100+"%",
    stagger:0.5,
})