function sum (a,b){
    const primeiroNum = Number(a)
    const segundoNum = Number(b)
 
    if(isNaN(primeiroNum) || isNaN(segundoNum)) {
        throw new error('Errado');
       
    }
 
    return primeiroNum + segundoNum
}
 
try{
console.log(sum(2, 9))
    console.log(sum(true, 14))
    console.log(sum(undefined, 22))
    console.log(sum(18, "0"))
    console.log(sum(39, null))
    console.log(sum(13, "zero"))
} catch (error) {
    console.log('Error', error.message)
}finally{
    console.log('Finalizando...')
}

