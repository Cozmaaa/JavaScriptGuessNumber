function NumberGuess(){
    score=20;
    HiddenNumber=Math.floor(Math.random()*15);
    document.querySelector('.check').addEventListener('click',function(){
    console.log(HiddenNumber);
    if (document.querySelector('.guess').value==HiddenNumber){                  //if the guess is correct (It shows that the guess is correct )
        document.querySelector('.checktext').textContent='Correct Number';
        document.querySelector('.result').textContent=HiddenNumber;
        return
 
    }
    else if(document.querySelector('.guess').value<HiddenNumber){  //if the guess is less than the hidden number
        document.querySelector('.checktext').textContent='Too Low';
        document.querySelector('.score').textContent=`Current score is ${score--}`;
    }
    else                                        //if the guess is greater than the hidden number                            
    {
        document.querySelector('.checktext').textContent='Too High';
        document.querySelector('.score').textContent=`Current score is ${score--}`;
    }
    if (score<=0){
        document.querySelector('.checktext').textContent='You Lost!';
        document.getElementById('.check').style.display='none';
        
    }
});
}
NumberGuess();

document.querySelector('.try-again').addEventListener('click',function(){
    NumberGuess();
    document.querySelector('.result').textContent='??';
    document.querySelector('.guess').value='';
});