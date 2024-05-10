class PaginationHelper {
	constructor(collection, itemsPerPage) {
        this.collection = collection
        this.itemsPerPage = itemsPerPage
        // console.log(Math.ceil(1.0 * collection.length / itemsPerPage))
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
	}
	itemCount() {
        return this.collection.length
	// returns the number of items within the entire collection

	}
	pageCount() {
        return Math.ceil(1.0 * this.collection.length / this.itemsPerPage)
	// returns the number of pages
	}
	pageItemCount(pageIndex) {
        const totalPages = this.pageCount();
    if (pageIndex < 0 || pageIndex >= totalPages) {
        return -1; // pageIndex out of range
    }

    const startIndex = pageIndex * this.itemsPerPage;
    const remainingItems = this.itemCount() - startIndex;
    
    if (remainingItems >= this.itemsPerPage) {
        return this.itemsPerPage;
    } else {
        return remainingItems;
    }
        // console.log((pageIndex + 1) * this.itemsPerPage)
        // if((pageIndex + 1) * this.itemsPerPage <= this.itemCount()) this.itemsPerPage
        // if(pageIndex * this.itemsPerPage < this.itemCount && (pageIndex +1) * this.itemsPerPage > this.itemCount()) this.itemCount()%this.itemsPerPage
        // return -1
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
	}

    pageIndex = (itemIndex) => itemIndex < this.itemCount() && itemIndex >= 0 ? Math.floor(itemIndex / this.itemsPerPage) : -1
}


// const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
const helper = new PaginationHelper(['a','b','c','d','e','f'], 4)


console.log(helper.pageCount())
console.log(helper.itemCount())
console.log(helper.pageItemCount(0)) // should == 4
console.log(helper.pageItemCount(1)) // should == 2
console.log(helper.pageItemCount(2)) // should == -1
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); // should == 1 (zero based index)
// helper.pageIndex(2); // should == 0
// helper.pageIndex(20); // should == -1
console.log(helper.pageIndex(-10)); // should == -1

