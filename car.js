function myFunction() {

    var a = pinta()
    document.querySelector(".card-top").innerHTML = a;
    document.querySelector(".card-botom").innerHTML = a;

    var b = number()

    document.querySelector(".numero").innerHTML = b;


};

let pinta = () => {

    let simbol = ["♦", "♥", "♠", "♣"];
   
    let randomCard = Math.floor(Math.random() * 4);
   

    return simbol[randomCard];
}
let number=()=>{

    let number=["A","J","K","Q","10","9","8","7","6","5"];
    let randomNumber= Math.floor(Math.random() * 10);
    return number[randomNumber];
}















