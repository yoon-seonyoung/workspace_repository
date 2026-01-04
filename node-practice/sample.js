
     
    for (let i = 1; i <= 5; i++) {
        
        for (let j = 5; j >= i+1; j--) {
            process.stdout.write(" ")
        }
        for (let k = 1; k <= (i*2)-1; k++){
            //process.stdout.write(`${k}`)
            process.stdout.write("*")
        }
        process.stdout.write("\n")

    }