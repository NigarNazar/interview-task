const projectBtns = document.querySelectorAll(".project")
const neticeDivi = document.querySelector('.netice')

// [.project, .project, .project]


for(let i=0; i<projectBtns.length; i++ ) {
    projectBtns[i].addEventListener("click", function(){
       neticeDivi.classList.add('active')
    })
}

