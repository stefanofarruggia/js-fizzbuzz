//Consegna:
//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//-------------------------------------------------------------------------------------------------


//mettiamo un for per fargli stampare tutti i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {        //mettiamo un if + console.log perstampare come FizzBuzz i multipli sia di 3 che di 5
                                        //lo mettiamo per primo per far si che non venga sovrascritto
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
     
    } else if (i % 3 == 0) {            //mettiamo un if + console.log per fargli stampare come Fizz tutti i multipli di 3
        console.log("Fizz")
    
    } else if (i % 5 == 0){             //mettiamo un if + console.log per fargli stampare come Buzz tutti i multipli di 5
        console.log("Buzz")
        
    } else {                            //mettiamo un else per fargli stampare tutti gli altri numeri
        console.log(i)
    }
}
    

