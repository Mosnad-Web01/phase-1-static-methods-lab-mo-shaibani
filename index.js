class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(string) {
    const smallWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    
    let words = string.toLowerCase().split(" ");

    let titleized = words.map((word, index) => {
      if (index === 0 || !smallWords.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });

    return titleized.join(" ");
  }
}

// Testing the methods
console.log(Formatter.capitalize("hello")); // => "Hello"
console.log(Formatter.sanitize("Hello, World!")); // => "Hello World"
console.log(Formatter.titleize("a tale of two cities")); // => "A Tale of Two Cities"