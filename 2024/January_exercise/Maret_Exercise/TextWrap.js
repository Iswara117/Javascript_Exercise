const TextWrap = (text, digit) => {
    return text.split('').reduce((result, char, index) => {
    const chunkIndex = Math.floor(index / digit);
    // console.log(chunkIndex)
    if (!result[chunkIndex]) {
        result[chunkIndex] = '';
    }
    result[chunkIndex] += char;
    return result;
}, [])
}

console.log(TextWrap("123456789012345678901234567890",4))