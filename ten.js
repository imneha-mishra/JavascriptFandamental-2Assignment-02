function wordCounter(sentence){
    const wordFrequenceMap=new Map();

    const words=sentence.split(/\s+/);

    for(const word of words){
        const cleanWord=word.toLowerCase().replace(',','');

        if(cleanWord.length > 0){
            wordFrequenceMap.set(cleanWord,(wordFrequenceMap.get(cleanWord)||0)+1)
        }
    }
    return wordFrequenceMap;
}
const sentence="please please submit your assignment on time ,your assignmen is important";
const result=wordCounter(sentence);
console.log(result);