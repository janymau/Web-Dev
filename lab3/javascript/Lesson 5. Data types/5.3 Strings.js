// TASK 1: Uppercase the first character
function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  }

  alert( ucFirst("john") ); // John

// TASK 2: Check for spam
function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }

  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );

// TASK 3: Truncate the text
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}

// TASK 4: Extract the money
function extractCurrencyValue(str) {
    return +str.slice(1);
}
