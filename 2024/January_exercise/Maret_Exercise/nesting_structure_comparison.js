Array.prototype.sameStructureAs = function(other) {
    return Array.isArray(other) && this.length === other.length && this.every((item, index) => Array.isArray(item) ? Array.isArray(other[index]) && item.sameStructureAs(other[index]) : !Array.isArray(other[index]));
};

console.log([1,[1,1]].sameStructureAs([2,[2,2]]))
console.log([1,[1,1]].sameStructureAs([[2,2],2]))