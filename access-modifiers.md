# Access Modifiers in TypeScript

## Introduction

In OOP, we do not want everyone to change the data inside a class. TypeScript gives us access modifiers to control this. They are `public`, `private`, `protected` and `readonly`. In this blog I will explain each one with a simple example.

## How They Work

`public` is the default. A public member can be used from anywhere. `private` members can only be used inside the same class. `protected` members can be used inside the class and also in its child classes, but not from outside. `readonly` means the value can be set once (in the constructor) and cannot be changed later.

```typescript
class Account {
  public owner: string;
  private balance: number;
  protected bankName = "ABC Bank";
  readonly id: number;

  constructor(owner: string, balance: number, id: number) {
    this.owner = owner;
    this.balance = balance;
    this.id = id;
  }

  deposit(amount: number) {
    this.balance += amount; 
  }
}

class SavingsAccount extends Account {
  showBank() {
    return this.bankName; 
  }
}

const acc = new Account("RM", 500, 121);
console.log(acc.owner); 

```

Here, `balance` is hidden so nobody can set it directly. They have to use the `deposit` method.

## Conclusion

Access modifiers help us protect data and keep our code safe. I think the best practice is to make properties `private` by default and open them only when needed. 