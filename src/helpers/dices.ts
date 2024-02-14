export const rollDices = ()=>{
    const diceA = Math.floor(6 * Math.random()+1)
    const diceB = Math.floor(6 * Math.random()+1)
    const result = diceA+ diceB == 7 ? 'win' : 'lose'
    
    return{
        diceA,
        diceB,
        rollScore: diceA + diceB,
        veredict: result
    }
}