## Project setup
### Install dependencies 
```
yarn
```

### Run tests
```
yarn test
```

### Generate build 
```
yarn build
```

### Requirements

#### Step 1:
[X] With a method: int Add(string numbers)

[X] The numbers in the string are separated by a comma.

[X] Empty strings should return 0.

[X] The return type should be an integer.

[X] Example input: “1,2,5” - expected result: “8”.

[X] Write tests to prove your input validates.

#### Step 2:

[X] Change the Add method to handle new lines in the input format
```
a. Example: “1\n,2,3” - Result: “6”
b. Example 2: “1,\n2,4” - Result: “7”
```

#### Step 3: Support a custom delimiter

[X] The beginning of your string will now contain a small control code that lets you
set a custom delimiter. Format: “//[delimiter]\n[delimiter separated numbers]”
```
Example: “//;\n1;3;4” - Result: 8
```
[X] In the above you can see that following the double forward slash we set a
semicolon, followed by a new line. We then use that delimiter to split our
numbers.
```
e. e. Other examples
i. “//$\n1$2$3” - Result: 6
ii. “//@\n2@3@8” - Result: 13
```
[X] Calling add with a negative number should throw an exception: “Negatives not allowed”.
The exception should list the number(s) that caused the exception

#### Bonus

[X] Numbers larger than 1000 should be ignored.
```
a. Example “2,1001” - Result: 2
```
[X] Delimiters can be arbitrary length
```
a. “//***\n1***2***3” - Result 6
```
[ ] Allow for multiple delimiters
```
a. “//$,@\n1$2@3” - Result 6
```
[ ] Combine 2 and 3 bonus questions. Allow multiple delimiters of arbitrary length