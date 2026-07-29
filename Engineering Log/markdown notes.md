*(Alice pulls out a fresh `README.md` and clicks "Preview." The plain text instantly transforms into a polished document.)*

Welcome to **Markdown (`.md`)**. Think of it as a superpower for taking technical notes. It lets you write with a few simple symbols, and VS Code turns them into beautifully formatted documents.

---

# 1. What is Markdown?

Markdown is a **lightweight markup language**.

Instead of clicking buttons like in Microsoft Word, you type a few symbols.

For example, you type:

```md
# JavaScript Notes
```

It displays as:

# JavaScript Notes

---

# 2. Headings

Use `#`.

```md
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```

Result:

```text
Heading 1
    Heading 2
        Heading 3
            Heading 4
```

---

# 3. Bold

```md
**Important**
```

Result:

**Important**

---

# 4. Italic

```md
*Italic*
```

Result:

*Italic*

---

# 5. Bold + Italic

```md
***Very Important***
```

Result:

***Very Important***

---

# 6. Bullet List

```md
- Arrays
- Objects
- Functions
```

Result:

* Arrays
* Objects
* Functions

---

# 7. Numbered List

```md
1. Variables
2. Loops
3. Functions
```

Result:

1. Variables
2. Loops
3. Functions

---

# 8. Checklist ⭐

Perfect for studying.

```md
- [ ] Learn Arrays
- [x] Finish Functions
```

Result:

* [ ] Learn Arrays
* [x] Finish Functions

---

# 9. Horizontal Line

```md
---
```

Creates a divider.

---

# 10. Inline Code

Wrap code with a single backtick `` ` ``.

```md
Use `map()` to transform arrays.
```

Result:

Use `map()` to transform arrays.

---

# 11. Code Blocks ⭐⭐⭐

Use three backticks.

````md
```js
const age = 19;
console.log(age);
```
````

Result:

```js
const age = 19;
console.log(age);
```

You can replace `js` with other languages:

````md
```html
````

````md
```css
````

````md
```python
````

VS Code highlights the syntax automatically.

---

# 12. Quotes

```md
> JavaScript is single-threaded.
```

Result:

> JavaScript is single-threaded.

Great for definitions.

---

# 13. Links

```md
[MDN JavaScript](https://developer.mozilla.org/)
```

Result:

[MDN JavaScript](https://developer.mozilla.org/)

---

# 14. Images

```md
![Logo](logo.png)
```

---

# 15. Tables ⭐

```md
| Topic | Learned |
|-------|----------|
| Arrays | ✅ |
| Objects | ✅ |
| DOM | ❌ |
```

Result:

| Topic   | Learned |
| ------- | ------- |
| Arrays  | ✅       |
| Objects | ✅       |
| DOM     | ❌       |

---

# 16. Escaping Symbols

If you want to display a symbol literally:

```md
\*
```

Displays:

*

---

# 17. Emoji

Just paste emojis.

```md
# 🚀 JavaScript Notes
```

Works perfectly.

---

# 18. Organizing Notes

Example:

````md
# Arrays

## Definition

An array stores multiple values.

---

## Syntax

```js
let nums = [1,2,3];
```

---

## Methods

- push()
- pop()
- shift()

---

## Common Mistakes

- Forgetting indexes start at 0.

---

## Interview Tip

Arrays are ordered collections.
````

---

# 19. Best Features in VS Code

Press:

**Ctrl + Shift + V**

You'll see a live preview of your Markdown file.

It looks almost like a website.

---

# 20. My Recommended Structure

```text
Notes/
│
├── 01_HTML.md
├── 02_CSS.md
├── 03_JavaScript.md
├── 04_DOM.md
├── 05_Async.md
├── 06_Node.md
└── 07_Git.md
```

Inside `04_DOM.md`:

````md
# DOM

## Selecting Elements

```js
document.querySelector(".box");
```

**Returns the first matching element.**

---

## Common Methods

- querySelector()
- querySelectorAll()
- getElementById()

---

## Mistakes

- Forgetting `.` for classes.
- Forgetting `#` for IDs.

---

## Example

```js
const btn = document.querySelector("#submit");
```
````

---

## ⭐ Markdown Cheat Sheet

| Symbol       | Meaning         |       |
| ------------ | --------------- | ----- |
| `#`          | Heading         |       |
| `##`         | Subheading      |       |
| `**text**`   | Bold            |       |
| `*text*`     | Italic          |       |
| `` `code` `` | Inline code     |       |
| ` `          | Code block      |       |
| `-`          | Bullet list     |       |
| `1.`         | Numbered list   |       |
| `- [ ]`      | Checkbox        |       |
| `>`          | Quote           |       |
| `---`        | Horizontal line |       |
| `            | `               | Table |
| `[]()`       | Link            |       |
| `![]()`      | Image           |       |

---

📌 Since you're moving your notes into VS Code, I'd suggest one more habit:

**Don't copy the lecture word for word.** Write notes that your *future self* would need after forgetting the topic. Include:

* A one-line definition.
* A small code example.
* Common mistakes.
* A "How I read this code" section (to strengthen your code-reading skill).
* A real-world analogy if it helped you understand.

Those kinds of notes become much more valuable six months later than a transcript of the lecture.
