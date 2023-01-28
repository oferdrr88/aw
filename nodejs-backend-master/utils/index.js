function createRandomNumber(length){
    let num = ""
    for(let i =0; i <length; i++){
    num+=  Math.floor(Math.random() * 9) 
    }


    return Number(num)
}

module.exports={createRandomNumber}