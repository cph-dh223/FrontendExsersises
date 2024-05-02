# Assignment Readme Guidelines

## Overview

- David Ajken Hansen
- Exsersises  
  - state - all
  - list - all
    - [2](###2questions)
  - Tick Counter - all
  - CRUD-form - all but 11
  - CRUD React Project - done
    - [Comment](###Comment)


  
### 2 questions

#### 2.1 What is the purpose of the key value, which must be given to individual rows in a react-list
Keys help React identify which items have changed, are added, or are removed.

#### 2.2 It's recommended to use a unique value from your data if available (like an ID). How do you get a unique value in a map callback, for data without a unique id?
Yes
map has a key value you can use, this value is the plasement of the elemnt in the array
```javascript
{members.map((m, k) => {return(<tr key={k}><td>{m.name}</td><td>{m.age}</td></tr>)})}
```


#### 2.3 What is the difference(s) between state and props?
state is values kept in one componetet
props are sent from one componenet to a noter

#### 2.4 For which scenarios would you use props, and for which would you use state?
prps if you need to sent values form a parrent to a child component
state if all the values are only used in that component

### Comment
This is basicaly a strait coppy of the crud-form but with slight diffenreses to conform to the diffenreses in exsersise descirption