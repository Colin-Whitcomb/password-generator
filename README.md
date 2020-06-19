# Colin Whitcomb 

### Deployed Site 
https://colin-whitcomb.github.io/password-generator/

--- 
## Summary & Process

In this assignment our objective was to create a password generator that provided an 8-128 character password composed of random generated variables. Several character options were available for the user to choose from (i.e. uppercase, lowercase, numerical values, and special characters). 

I began the development process by thinking through major structures that I wanted to use, specifically objects that would contain the arrays containing character values and prompt/confirm questions. However, I decided to alter the construction of the promt/confirm questions wrapping them in a large infoGrab function and using conditional if statements to 1) ensure the user chooses the right length and 2) to ensure the user chooses at least one of the required criteria. After collecting the responses, I made sure to store the corresponding answers in the collectedResponse object. 

The second largest function, generatePassword, was developed afterward. In generatePassword I processed collectedResponses through conditional if statements that then push the chosen character sets, generate random characters from those desired arrays, and links together all generated characters in a string. By pushing characters into the generatedCh array (and by adding them to results later) it was guaranteed that the generated password will have at least one character from each chosen array of character types. 

Towards the bottom of the code, I made sure to return my result string to generatePassword so that it could work through the writePassword function. In the later portion of my process I made sure to streamline the structure and added comments to further explain the code. 

---
### Technologies / Resources
- Visual Studio Code
- Git / GitHub / GitPages
- JavaScript / HTML  
- I found the following link especially helpful in thinking through the generatePassword process: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

---
### Author

***Colin Whitcomb** [LinkedIn](https://ww.linkedin.com/in/colin-whitcomb-b808301a6/)

___
