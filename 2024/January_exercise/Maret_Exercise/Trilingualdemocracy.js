const trilingual_democracy = (group) => {
    const object = group.split('').reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    console.log(object);

    const array = Object.keys(object);
    if ((object[array[0]] === 0 || object[array[0]] === 1) && object[array[1]] === 2 || (object[array[0]] === 1 && object[array[2]] === 2)) return array[0];
    if ((object[array[1]] === 0 || object[array[1]] === 1) && object[array[2]] === 2 || (object[array[1]] === 1 && object[array[0]] === 2)) return array[1];
    if(array.length === 3){

        if(!object['D']) return 'D'
        if(!object['F']) return 'F'
        if(!object['I']) return 'I'
        if(!object['K']) return 'K'
    }
    return array[0];
}

console.log(trilingual_democracy('DFK'));
