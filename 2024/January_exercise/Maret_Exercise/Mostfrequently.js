const TopThreeWord = (text) => {
    let text1 = text.toLowerCase();
    // console.log(text1)
    const New_object = {};
    text1.split(/\s+/).forEach(element => {
        if (element !== '') {
            const words = element.trim().replace(/[^a-zA-Z']/g, '') 
            // console.log(words)
            if(words != '' && words !== "'") New_object[words] = (New_object[words] || 0) + 1;
            
        }
    });
    const sortedWords = Object.entries(New_object)
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, 3)
                        .map(pair => pair[0]); // Hanya mengambil kata, bukan pasangan kata dan frekuensinya
    return sortedWords;
}


console.log(TopThreeWord("  //wont won't won't "))
console.log(TopThreeWord("  , e   .. "));
console.log(TopThreeWord("  '  "));
console.log(TopThreeWord("  ...  "));