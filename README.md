# JavaScript OOP & Logic Challenges 🚀

This repository contains a collection of JavaScript challenges focused on **Object-Oriented Programming (OOP)**, **Prototypes**, and **Data Validation** using Regular Expressions (Regex).

## 🛠️ Concepts Covered

- **Classes & Inheritance:** Using `class`, `extends`, and `super()`.
- **Encapsulation:** Implementing **Private Fields** (`#property`) to protect sensitive data like passwords and credit card numbers.
- **Getters:** Using `get` to format and return data dynamically.
- **Prototype Extension:** Adding custom methods to built-in objects like `String.prototype`.
- **Regex Validation:** Complex patterns for password strength and credit card formatting.
- **Modern JS Features:** Using Nullish Coalescing (`??`) and Template Literals.

---

## 📋 Challenges Overview

### 1. Admin Password System
- **Goal:** Secure password storage with strength validation.
- **Key Feature:** A private `#password` field that can only be changed if the old password matches and the new one meets strict security criteria (Uppercase, Lowercase, Numbers, and Symbols).

### 2. Credit Card Formatter
- **Goal:** Normalize different input formats (String, Number, dashed or not).
- **Key Feature:** A getter that cleans the input and returns a perfectly formatted card string: `XXXX-XXXX-XXXX-XXXX`.

### 3. Tablet & Phone Inheritance
- **Goal:** Demonstrate class inheritance and property overriding.
- **Key Feature:** The `Tablet` class extends `Phone` and handles optional properties like `size` using logical defaults.

### 4. String Prototype Extension
- **Goal:** Manipulating the global `String` object.
- **Key Feature:** Added `.addLove()` method to all strings to return a customized branding message.

---

## 💻 How to Run
Simply clone the repository and run any file using Node.js or the browser console:

```bash
node main.js
