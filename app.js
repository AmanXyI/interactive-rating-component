const ratingBtns=document.querySelectorAll('.rating-btn')
const submitBtn=document.querySelector('.submit-btn')
const submitedArticle=document.querySelector('.submited-state')
const selectedRating=document.querySelector('#selected-rating')

let selId=0
ratingBtns.forEach((btns)=>{
    btns.addEventListener('click',((e)=>{
        ratingBtns.forEach((e)=>{
            e.style.background=`hsl(213, 19%, 18%)`
            e.style.color=`hsl(217, 12%, 63%)`
        })
        const id = e.currentTarget.dataset.id
        selId=id
        const ele=document.getElementById(id)
        ele.style.background=`hsl(25, 97%, 53%)`
        ele.style.color=`white`
        if(id !=='1'){
            const prevId=id-1
            const prevEle=document.getElementById(prevId)
            prevEle.style.background=`hsl(216, 12%, 54%)`
            prevEle.style.color=`white`
        }
    }))
})

submitBtn.addEventListener('click',((e)=>{
    console.log('clicked')
    submitedArticle.classList.add('show-submited')
    selectedRating.textContent=selId
}))
