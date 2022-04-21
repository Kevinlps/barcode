export const calculateCheckDigit = (barCode: string) => {
    if(barCode.length == 12) {
        let result = 0 
        for (let i =0; i < barCode.length; i++){
            const multiplier = i % 2 == 0 ? 1 : 3
            const character = barCode.charAt(i)
            const digit = parseInt(character)
            result = result + multiplier * digit
        }

        const reaming = result % 10
        const checkDigit = reaming != 0 ? 10 - reaming : reaming
        return checkDigit
    }
    return -1
}