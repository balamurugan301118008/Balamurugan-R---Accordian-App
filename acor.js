// // <------target the all querySelector------>

// const btns = document.querySelectorAll('button')
// const answerText = document.querySelectorAll('#content-page')


// // // <--------using loop method------>
// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', (e) => {
//         //console.log('hi');
//         console.log(e.target);
//         //alert("hi")
//         if (e.target.classList.contains("btn1")) {
//             answerText[0].classList.toggle("show")
//             answerText[1].classList.remove("show")
//             answerText[3].classList.remove("show")
//             answerText[2].classList.remove("show")

//         }
//         else if (e.target.classList.contains("btn2")) {
//             answerText[1].classList.toggle("show")
//             answerText[0].classList.remove("show")
//             answerText[3].classList.remove("show")
//             answerText[2].classList.remove("show")


//         }
//         else if (e.target.classList.contains("btn3")) {
//             answerText[2].classList.toggle("show")
//             answerText[1].classList.remove("show")
//             answerText[3].classList.remove("show")
//             answerText[0].classList.remove("show")


//         }
//          else if (e.target.classList.contains("btn4")) {
//             answerText[3].classList.toggle("show")
//             answerText[1].classList.remove("show")
//             answerText[0].classList.remove("show")
//             answerText[2].classList.remove("show")

//         }
//     })

// }

const article = document.querySelectorAll("article")
const btn = document.querySelectorAll("button")
for(let i=0;i<btn.length;i++){
    console.log(btn[i]);
    btn[i].addEventListener("click",()=>{
        for(let a=0;a<article.length;a++){
            if(article[a] != article[i]){
                article[a].classList.remove("show")
            }
            else{
                article[i].classList.toggle("show")
            }
        }
    })
}





































