const notify = () =>{
    Notification.requestPermission();
}
notify();
const hamburger = () =>{
    const hamnav = document.querySelector(".hamburger");
    const content = document.querySelector(".second-nav");
    const layout1 = document.querySelector(".layout");
    const turnOff = document.querySelector(".turnOff");
    hamnav.addEventListener("click", () =>{
        content.classList.add("click1");
        layout1.classList.add("layout-block");
    })
    turnOff.addEventListener("click", () =>{
        content.classList.remove("click1");
        layout1.classList.remove("layout-block");
    })

}
hamburger();
const form = () =>{
    const signIn = document.querySelector(".sign-in-1");
    const signUp = document.querySelector(".sign-up-1");
    const contentSignIn = document.querySelector(".sign-in");
    const contentSignUp = document.querySelector(".sign-up");
    signIn.addEventListener("click", () =>{
        contentSignIn.style.display = "block";
        signIn.style.borderColor = "#da5427";
        signUp.style.borderColor = "#ddd";
        contentSignUp.style.display = "none";
    })
    signUp.addEventListener("click", () =>{
        contentSignIn.style.display = "none";
        contentSignUp.style.display = "block";
        signIn.style.borderColor = "#ddd";
        signUp.style.borderColor = "#da5427";
    })
}
form();

// click outside and show true place with sign in or sign up
const formOut = () =>{
    const sign = document.querySelectorAll(".right p");
    const x = document.querySelector(".fa-times-1");
    const popUp = document.querySelector(".pop-up-menu");
    const layout = document.querySelector(".layout-black");
    x.addEventListener("click", () =>{
        popUp.style.display = "none";
        layout.style.display = "none";
    })
    const signIn = document.querySelector(".sign-in");
    const signUp = document.querySelector(".sign-up");
    const border1 = document.querySelector(".sign-in-1");
    const border2 = document.querySelector(".sign-up-1");
    for(let i = 0; i < sign.length; i++){
        sign[i].addEventListener("click", () =>{
            popUp.style.display = "block";
            layout.style.display = "block";
            if(i === 1){
                signIn.style.display = "block";
                signUp.style.display = "none";
                border2.style.borderColor = "#ddd";
                border1.style.borderColor = "#da5427"
            }
            else{
                signIn.style.display = "none";
                signUp.style.display = "block";
                border2.style.borderColor = "#da5427";
                border1.style.borderColor = "#ddd";
            }
       })
    }
}
formOut();
const block = () =>{
    const list = document.querySelectorAll(".infor-mobile");
    const arrow = document.querySelectorAll(".right-pick .fa-angle-right");
    for(let i = 0; i < list.length; i++){
        arrow[i].addEventListener("click", () =>{
            arrow[i].classList.toggle("rotate");
            list[i].classList.toggle("block");
        })
    }
}
block();
const bookMark = () =>{
    const icon = document.querySelectorAll(".fa-bookmark-o");
    for(let i = 0; i < icon.length; i++){
        icon[i].addEventListener("click", () =>{
            let check = icon[i].classList.toggle("fa-bookmark");
            if(check === true){
                icon[i].classList.remove("fa-bookmark-o");
            }
            else{
                icon[i].classList.add("fa-bookmark-o");
            }
        })
    }
}
bookMark();
const changeColor = () =>{
    const input = document.querySelector(".form-control");
    input.addEventListener("click", () =>{
        input.classList.add("change-color");
    })
}
changeColor();

const input = () =>{
    const array = [
        "Email hoặc số điện thoại đăng nhập",
        "Mật khẩu"
    ]
    const inp = document.querySelectorAll(".sign-in input");
    for(let i = 0; i < inp.length; i++){
        const span = document.createElement("span");
        span.textContent = "*";
        span.style.color = "red";
        inp[i].setAttribute("placeholder", `${array[i]} ${span.innerHTML}`);
    }
}
input();

const inputText = () =>{
    const input = document.querySelector(".fa-fa-mobile input");
    const search = document.querySelector(".fa-new");
    search.addEventListener("click", () =>{
        input.classList.toggle("block");
    })
}
inputText();