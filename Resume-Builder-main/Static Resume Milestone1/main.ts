

const SkillsSection  = document.getElementById('latest-projects') as HTMLElement 
const togglebutton = document.getElementById("projects-section")as HTMLButtonElement 
togglebutton.addEventListener("click" , ()=>{
 if(SkillsSection.style.display === "none"){
    SkillsSection.style.display = "block";
 }else{
    SkillsSection.style.display = "none";
 }
})
