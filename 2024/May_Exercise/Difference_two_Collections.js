const diff = (a,b) => {
    if(a.sort().join(',') == b.sort().join(',')) return []
    if(!b.length) return a
    if(!a.length) return b
    let A = new Set(a) 
    let B = new Set(b)
    // console.log(A.union(B))
    // console.log(setA.symmetricDifference(setB)) 
    let diffA = new Set([...A].filter((element) => !B.has(element)))
    let diffB = new Set([...B].filter((element) => !A.has(element)))
    console.log(Array.from(diffA).concat(Array.from(diffB)).sort())
}

// diff(["a","b"], ["a","b"])
let a = ["a","b","z"];
let b = ["a","b"];
console.log(diff(a,b))

// a = ["a","b","z","d","e","d"];
// b = ["a","b", "j","j"];
// diff(a,b)