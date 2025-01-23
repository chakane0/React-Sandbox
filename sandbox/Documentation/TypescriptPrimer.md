# Typescript Primer

This chapter focuses on ```property validation``` in react components with typescript. Here we can expect to:
* Setup typescript within the project
* Example of how to use typescript
* have a good understanding of property validation and type checking
* Be able to create more predictable and reliable components using TypeScript

When we talk about ```props validation``` we are talking about the properties were passing into react components. Validating this will ensure it behaves in a certain way if it receives props of those types. Props validation can:
1. Help catch errors early.
2. Improves code readability.
3. Makes components more predictable.

Heres an example of a react component which renders a list using typescript:

```.jsx
type User = {
    name: String;
    email: String;
};
type MyListProps = {
    list: User[];
};
const MyList = ({ list }: MyListProps) => (
    <ul>
        {list.map((user) => (
            <li key={user.name}>
                {user.name} ({user.email})
            </li>
        ))}
    </ul>
);
```

Here, we are defining a ```User``` and ```MyListProps``` type which we use in our react component. 

## Introduction To TypeScript
```Typescript``` is a statically typed superset of Javascript that is developed and maintained by Microsoft. Its basically Javascript with additional features, most importantly being, static typing. Javascript itself is dynamically typed. 

Heres an example of a greeting statement:

```.jsx
function greet(name: string) {
    return 'Hello, ' + name;
};
console.log(greet('chakane'))
```

#### Setting up typescript in your project
You can create a new project with typescript included by executing this: ```npm create vite@latest my-react-app -- --template react-ts```.

#### Basic Types in typescript
* boolean
* number
* string
* number[]
* ```Array<number>```
* tuples
* enums
* any
* unknown --> similar to any except it isnt assign to anything but itself.
* void --> the opposite of any; meaning the abscense of any type at all.
* null/undefined --> undefined plays a crucial role in optional types which are denoted by ```?``` after the type name; meaning the value can be the specified type or undefined.
* never --> represents a type of value that never occurs.

##### Interfaces and type aliases
Type aliases are similar to interfaces, although they can be used for other types as well not just objects. Heres a type alias for example:

```.jsx
// This is a Point type that represents a point in a two dimensional space and ID that can be a string or number.
type Point = {
    x: number;
    y: number;
};
type ID = number | string;

// This is how we can use them
const point: Point = {
    x: 10,
    y: 20,
};
const id: ID = 100;
```

##### Interfaces vs type alias
Both are way to describe objects and their structures. 
Interfaces are more extensible because they can be declared multiple times and they will be merged together. Usually used to create object shapes

Type aliases cant be re-opened to add new properties. Although they can represent other types like union types, intersection types, tuples, and other types that arent currently available in the interface. Is the usual tool for defining any type, not just objects. 
