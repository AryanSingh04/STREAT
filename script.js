let ham=document.getElementById("menu")
let items=document.getElementById("menu-items")
let cross =document.getElementById("cross")
const k=[ham,cross]
console.log(items)
function callAnim(){
    gsap.from(".menanim *",{
        y:100+"%",
        stagger:0.2,
    })
}
k.forEach((e)=>{
    e.addEventListener("click",()=>{
        items.classList.toggle("active")
        if(items.classList.contains("active")){
        document.body.style.height="100vh"
        document.body.style.overflow="hidden"
        callAnim()
        }
        else{
        document.body.style.height="fit-content"
        document.body.style.overflow="visible"
        }
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

