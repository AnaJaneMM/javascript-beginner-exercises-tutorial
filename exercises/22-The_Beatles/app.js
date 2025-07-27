function sing(){
    let lyrics = '';
    let letItBe = "let it be";
    let coma = ", "

    for(let i = 1; i <= 10; i++){
        lyrics += letItBe + coma;
        if(i === 4){
            lyrics += "there will be an answer" + coma;
        }else if ( i === 9){
            lyrics += "whisper words of wisdom" + coma;
        }
    }
    return lyrics.slice(0, -2);
}

//Your code above ^^^

console.log(sing());