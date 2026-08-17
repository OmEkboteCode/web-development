# REST

Representantional State Transfer

- REST is an architectural style that defines a set of constraints(rules) to be used for creating web services.

- RESTful APIs(APIs that apply rest rules)

- CRUD (Create Read Update Delete)

- Use nouns instead of verbs in endpoint paths (verbs: action words like deleteUsers, seeUsers, seePosts. nouns: /articles, /users, /posts.)

## CRUD Operations

- GET retrieves resources
- POST submits new data to the server
- PUT updates existing data
- PATCH update existing data partially
- DELETE removes data

- resource: The thing on which we are applying CRUD (ex: tweets, users, posts are called resources)

## Quora Posts

### Creating RESTful apis

- GET /posts to get data for all posts (INDEX route, main)

- POST /posts to add a new post (CREATE route)

- GET /posts/:id to get one post(using id)(VIEW)

- PATCH or PUT /posts/:id to update specific post (UPDATE)

- DELETE /posts/:id to delete specific post (DESTROY)


### Implement: GET /posts
Index Route

- GET /posts to get data for all posts (INDEX route, main)


### Implement: POST /posts
Create Route

- POST /posts to add a new post
<br>

- 2 Routes
- Serve the form GET /posts/new
- Add the new post POST /posts


### Redirect

- res.redirect(URL)

- status from starting 3 are reponse redirect. 

```js
res.redirect('/foo/bar');
res.redirect('http://example.com');
res.redirect(301, 'http://example.com');
res.redirect('../login');
```

### Implement: Get /posts/:id
Show/View Route

- GET /posts/:id to get one post(using id)


### Create id for Posts

UUID Package

- Universally unique identifier
- npm install uuid


### Implement: PATCH /posts/:id
Update Route

- PATCH /posts/:id to update specific post

### Create Form for Update
Edit Route

- Serve the edit form GET /posts/:id/edit

- In html forms we can only use get and post requests
- npm install method-override (override using a query value)

### Implement: /posts/:id
Destroy Route

- DELETE  /posts/:id to delete specific post