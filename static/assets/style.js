
function mode(){
    let shape1 = document.querySelector(".shape1")
    let shape2 = document.querySelector(".shape2")
    let dark = document.querySelector(".dark")
    let user = document.querySelectorAll(".user")
    let bot = document.querySelectorAll(".bot")
    let edit = document.querySelectorAll(".modif")
    let logo = document.querySelector(".logo")
    let style = document.querySelector(".stylecss")
    let arr = [shape1, shape2, dark, user, bot, edit, logo]
    let arr2 = [
        "Ellipse 1.png",
        "Ellipse 2.png",
        "circum_dark.png",
        "mdi_user.png",
        "Vector.png",
        "material-symbols_edit-outline.png",
        "Logo R Cosmetics.png"
    ]

    if(localStorage.getItem("mode") == null){
        localStorage.setItem("mode", "light")
    }
    else if(localStorage.getItem("mode") == "dark"){
        style.setAttribute("href", "/static/assets/darkstyle.css")
        arr.forEach((el, i) =>{
            if(el == user || el == edit || el == bot){
                el.forEach(e =>{
                    e.setAttribute("src", "/static/assets/imgs/dark/" + arr2[i])

                })
            }else{

                el.setAttribute("src", "/static/assets/imgs/dark/" + arr2[i])
            }

        })
    }
    else if(localStorage.getItem("mode") == "light"){
        style.setAttribute("href", "/static/assets/style.css")
        arr.forEach((el, i) =>{
            if(el == user || el == edit || el == bot){
                el.forEach(e =>{
                    e.setAttribute("src", "/static/assets/imgs/" + arr2[i])
                })
            }else{

                el.setAttribute("src", "/static/assets/imgs/" + arr2[i] )
            }
        })
    }
}
function changemode(){
    if(localStorage.getItem("mode") == "light"){
        localStorage.setItem("mode", "dark")
    }else{
        localStorage.setItem("mode", "light")
    }
    mode()
}
window.addEventListener('load', ()=>{
    mode()
})
