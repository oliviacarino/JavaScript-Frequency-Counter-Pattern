function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    // create objects and store all values into new objects
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    // loop over frequencyCounter1 object and check if each key in frequencyCounter1 is also a value in frequencyCounter2 
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false
        }
        // check if values of both values correspond in frequencyCounter1 and frequencyCounter2
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}
