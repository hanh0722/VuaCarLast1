const boxFollow = () =>{
    const number = [
        "18+",
        "6+",
        "100+",
        "4.5"
    ]
    const array = [
        "Người dùng",
        "Người theo dõi",
        "Lượt tiếp cận",
        "Lượt truy cập hàng tháng"
    ]
    const box = document.querySelectorAll(".box-fl-1");
    for(let i = 0; i < box.length; i++){
        for(let j = 0; j < 3; j++){
            const p = document.createElement("p");
            if(j === 0){
                p.textContent = number[i];
            }
            else if(j === 1){
                p.textContent = "Triệu";
            }
            else{
                p.textContent = array[i];
            }
            box[i].appendChild(p);
        }
    }
}
boxFollow();

const changeColor = () =>{
    const array = [
        "#48C178",
        "#48BAC1",
        "#0C5BD1",
        "#FFBC3F",
        "#FF843F",
        "#E34054"
    ]
    const number = document.querySelectorAll(".Number");
    for(let i = 0; i < array.length; i++){
        number[i].style.color = array[i];
    }
}
changeColor();