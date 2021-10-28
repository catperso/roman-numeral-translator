# _Roman Numeral Converter_

#### By _**Matt C.** & **Kate K.**_

#### _Converts inputted numbers into roman numerals_

## Technologies Used

* _HTML_
* _CSS_
* _Markdown_
* _JavaScript_
* _Bootstrap_
* _jQuery_

## Description

_Converts numbers to their equivalent in roman numerals. Only works on numbers from 1-3999 because Romans didn't have any other numbers._

## Setup/Installation Requirements

* _Clone this repository to your local device_
* _Run index.html in your browser_
* _Enjoy the lovely CSS_

## Known Bugs

* _None so far_

## License - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems/bugs feel free to send me an email @mc.casperson@gmail.com with details._

Copyright (c) _2021_ _Matt C._ _Kate K._

### Tests

Describe: romanNumeral();


* Test: When we input a number higher than 3999 or lower than 1 it tells the user an error
* Code: romanNumeral(input >= 4000 || input <= 0);
* Expected Output: "Number must be between 1-3999"

* Test: When we input a non-number it tells the user to input a number
* Code: romanNumeral("anything but a number");
* Expected Output: "That isn't a number"

* Test: When we input the number 1 it returns I
* Code: romanNumeral("1");
* Expected Output: "I"

* Test: When we input a number between 1 and 9 it outputs the correct symbol
* Code: romanNumeral("4");
* Expected Output: "IV"

* Test: When we input a two-digit number it outputs the correct symbols
* Code: romanNumeral("27");
* Expected Output: "XXVII"

* Test: When we input a number between 1-3999 it outputs the correct symbols
* Code: romanNumeral("2021");
* Expected Output: "MMXXI"

* Test: When we input more than one number it converts all of them
* Code: romanNumeral("1 15 2000 1893")
* Expected Output: "I XV MM MDCCCXCIII"

* Test: The input ignores all punctuation
* Code: romanNumeral("2,021");
* Expected Output: "MMXXI"