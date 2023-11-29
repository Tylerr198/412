function* wordGenerator(sentence) {
    const words = sentence.split(' ');
    for (const word of words) {
      yield word;
    }
  }
  
  // Using the generator to print each word of the sentence
  const sentence = "All I know is something like a bird within her sang";
  const wordGen = wordGenerator(sentence);
  
  // Use the generator variable 'wordGen' to iterate over the words
  let result = wordGen.next();
  while (!result.done) {
    console.log(result.value);
    result = wordGen.next();
  }
  