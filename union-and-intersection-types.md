# Combining Union and Intersection Types in TypeScript

## Introduction

TypeScript has two useful tools to build new types from old ones: the union type (`|`) and the intersection type (`&`). A union means "one of these types", and an intersection means "all of these types together". In this blog I will show a simple example where I use both.

## Practical Example

Think about a student record. A student ID can be a number (like `101`) or a string (like `"S-102"`), so we use a union for the ID. A student also needs a name and a phone number. We keep them in two small types and join them with an intersection.

```typescript
type Id = string | number;        

type Person = { name: string };
type Contact = { phone: string };

type Student = Person & Contact & { id: Id }; 

function show(s: Student) {
  console.log(s.name, s.phone, s.id);
}

show({ name: "Rahim", phone: "01700000000", id: 101 });
show({ name: "Karim", phone: "01800000000", id: "21-45192-2" });
```

Both calls work because `id` can be a number or a string. If we forget `name` or `phone`, TypeScript will show an error, because the intersection needs all the properties.

## Conclusion

Union types are good when a value can be one of many types, and intersection types are good for joining small types into a bigger one. When we use them together, our types stay small, clean and easy to reuse.
