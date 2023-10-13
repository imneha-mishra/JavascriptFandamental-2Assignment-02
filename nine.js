function uniqueCharatesCheck(inputString){
    const charSet = new Set();

    for (let char of inputString){
        if(charSet.has(char)){
            console.log("The input string contains duplicates");
            return false
        }
        charSet.add(char)
    }
    console.log("The input string contains only unique charaters");
    return true;
}
uniqueCharatesCheck("Mithun")
uniqueCharatesCheck("anurag")