/*Objective

In this challenge, we learn about switch statements. Check out the attached tutorial for more details.

Task

Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string  is in the set , then return A.
If the first character in string  is in the set , then return B.
If the first character in string  is in the set , then return C.
If the first character in string  is in the set , then return D.
Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i).
*/
    
function getLetter(s) {
    let letter;
    // Write your code here
    
  /*
  TODO: Nick is possible do - but is not optimal (O(n))
  let arr = ['a','e','i','o','u']
  if(arr.includes(s[0])) letter='A'
  */
  
    s=s.toLowerCase()
    switch(s[0]){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        //console.warn('111a')
        letter='A'
        break;
        
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        //console.warn('111a')
        letter='B'
        break;
    
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        //console.warn('111a')
        letter='C'
        break;
    
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
        //consle.warn('111a')
        letter='D'
        break;
    }
    
    
    return letter;
}
