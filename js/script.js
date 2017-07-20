function piglatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'],
    result = str.split('');
  if (vowels.includes(str.charAt(0))) {    //looks for other a vowel at the begining of the word
    return str += "ay";     //if true it adds an "ay"
  } else {
    for (var index = 0; index < str.length; index++) { //loops through the letters in the word
      if (!vowels.includes(str[index])) { //if a vowel starts in the word like "eight
                                          //it returns "false" so it continues looping.
        result.push(result.shift());//the str is pushed to result since its already an array
                                    //shift is removing the first item and returning 
      } else {
        result.push("ay");
        return result.join('');
      }
    }
  }
}



$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#sentence").val();
    var result = piglatin(userInput);
    $("#output").text(result);

  });
});
