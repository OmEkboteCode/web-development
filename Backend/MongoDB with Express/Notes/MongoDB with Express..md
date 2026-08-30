# MongoDB with Express

## Creating the Model

Chat will have: (_id, from, to, message, created_at)


## Initialize Database

init.js


## Chats

### Index Route

- GET /chats

### New & Create Route

- GET /chats/new

- POST /chats

### Using Date

- <p><%= chat.created_at.toString().split(" ")[4] %></p>
- <p><%= chat.created_at.toString().split(" ").slice(0, 4).join("-") %></p>


### Edit & Update Route

- GET /chats/:id/edit
- PUT /chats/:id

### Destroy Route

- DELETE /chats/:id  delete chat with id