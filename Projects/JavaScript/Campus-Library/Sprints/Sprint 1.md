Perfect. Welcome to **Engineering Studio 1**.

From this point onward, you're no longer a student watching tutorials.

You're a **Junior Software Engineer** on the Campus Library team.

---

# 📚 Engineering Studio 1
## Sprint 0 – Understanding Before Building

> **Estimated Time:** 1.5–2 hours
>
> **Role:** Junior Software Engineer
>
> **Objective:** Understand the product, the codebase, and the engineering decisions behind it before making any changes.

---

# 📌 Scenario

Today is your first day.

Your tech lead says:

> *"Don't touch the code today. Engineers who change code before understanding it create bugs. First understand the system."*

Your task is to understand the project deeply enough that **tomorrow you could safely implement a new feature.**

---

# Part A — Product Understanding (15–20 min)

Run the application.

Do **not** open `app.js` yet.

Only use the application like a normal user.

---

## Task A1

Write a short description answering:

> What problem does this application solve?

Limit yourself to **4-6 sentences.**

---

## Task A2

Who are the primary users?

Think beyond

> "Students"

Explain:

- Who uses it?
- Why?
- What are they trying to accomplish?

---

## Task A3

List every feature currently available.

Don't invent future features.

Only list what exists today.

---

## Task A4

Imagine your product manager asks:

> "What is Version 1.0?"

Write release notes.

Example:

```
Campus Library v1.0

Features

•
•
•
```

---

# Part B — Reverse Engineering the HTML (20 min)

Read only `index.html`. 

Do not open CSS or JS yet.

---

## Task B1

Break the application into major sections.

Example:

```
Header
↓

Hero
↓

Statistics
↓

Catalogue
↓

Footer
```

---

## Task B2

For each section answer:

**Why does it exist?**

Not

"What tags are used?"

Instead

"What responsibility does this section have?"

---

## Task B3

Predict which HTML elements JavaScript interacts with.

Write every ID.

Do **not** verify yet.

---

## Task B4

Engineering Question

Why do you think the author preferred semantic elements like

- `header`
- `main`
- `section`
- `article`
- `footer`

instead of using only `<div>`?

Don't give the textbook answer.

Give the engineering answer.

---

# Part C — Reading the CSS (15–20 min)

Read `style.css`. 

---

## Task C1

How is the stylesheet organised?

Describe the author's structure.

---

## Task C2

Find **five** maintainability decisions.

Examples:

Naming

Variables

Responsive structure

Grouping

Component design

Explain why each helps.

---

## Task C3

Which CSS section would be easiest to modify?

Why?

---

## Task C4

Which CSS section do you think will grow the most over the next six months?

Explain your reasoning.

---

# Part D — JavaScript Reverse Engineering (45 min)

Now open `app.js`. 

Do **not** run through it line by line.

Read it like you're reviewing another engineer's work.

---

## Task D1

List every function.

Leave space under each one.

---

## Task D2

For every function answer:

**What responsibility does this function own?**

One sentence.

Not implementation.

Responsibility.

---

## Task D3

Which function is the "entry point" of the application?

Explain why.

---

## Task D4

Draw the execution flow.

Not code.

A system diagram.

Something like

```
Page Loads
      ↓
???
      ↓
???
      ↓
User Searches
      ↓
???
```

Use your own version.

---

## Task D5

Find every event listener.

For each one answer

- What event?
- Which element?
- Why that element?

---

# Part E — Engineering Review (20–25 min)

Now forget JavaScript syntax.

Think like an engineer.

---

## Task E1

Find three engineering decisions you really like.

Explain **why**.

---

## Task E2

Find two places where you think

> "This might become difficult to maintain."

Don't suggest fixes yet.

Just identify them.

---

## Task E3

Suppose tomorrow we have

100 books.

Would this architecture still work?

Why?

---

## Task E4

Suppose tomorrow we have

50,000 books.

What part of the application worries you most?

Don't code.

Reason.

---

## Task E5

Imagine another engineer joins the team next week.

What part of this project do you think they'll understand immediately?

What part will probably confuse them?

---

# Part F — Product Thinking (15 min)

Become the Product Manager.

Forget implementation.

---

## Task F1

Without writing code,

propose **five realistic future features**.

Not crazy ideas.

Real product improvements.

---

## Task F2

Choose one.

Explain:

- Why users would want it.
- How difficult you think it would be.
- Which existing part of the application it would affect.

---

# 🧠 Stanford Challenge

There is **no correct answer**.

Imagine the university dean says:

> "Campus Library is becoming the official library system for the entire university."

You have **one week** before students start using it.

You are **not allowed to add new features**.

You can only improve what already exists.

What would you spend that week doing?

Explain your priorities.

---

# 📓 Engineering Journal (5 min)

Answer these four questions.

1. What surprised me most about this codebase?
2. Which engineering decision did I admire the most?
3. Which engineering decision made me curious?
4. If I met the original developer tomorrow, what is the first question I would ask?

---

# ✅ Sprint 0 Success Criteria

By the end of today, you should be able to answer:

- ✅ What does this application do?
- ✅ How does data move through it?
- ✅ Why is it structured this way?
- ✅ Where would I add a new feature?
- ✅ Which parts of the design do I agree or disagree with?
- ✅ Could I confidently start working on my first engineering ticket?

---

## 🌟 One Last Rule

From today onward, every sprint has one golden rule:

> **Never criticize a design until you can explain why someone might have chosen it.**

That single habit will make you a much stronger engineer. Great engineers don't jump straight to "this is bad." They first ask, "What problem was the original developer trying to solve?" That mindset is one we'll practice throughout Engineering Studio.