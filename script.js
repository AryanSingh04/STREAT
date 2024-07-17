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

gsap.from(".anim *",{
    y:100+"%",
    stagger:0.5,
})

elems=document.querySelectorAll("footer .list h2")
console.log(elems)
elems.forEach((e)=>{
    e.addEventListener("click",()=>{
        const list=e.parentElement
        const ul = list.querySelector('ul');
        if (list.classList.contains('active')) {
            // Closing the accordion
            ul.style.maxHeight = null;
        
            list.classList.remove('active');
            ul.style.paddingTop=0
        } else {
          
            document.querySelectorAll('.footer-container .list').forEach(item => {
                item.classList.remove('active');
                const l=item.querySelector('ul')
                l.style.maxHeight = null
                l.style.paddingTop=0
            });
            
            // ul.style.display="block";
            list.classList.add('active');
            ul.style.paddingTop=20 + "px"
            ul.style.maxHeight = ul.scrollHeight + 'px'; 
        }
       
    })
})

