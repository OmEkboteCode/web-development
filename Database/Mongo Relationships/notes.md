# Mongo Relationships

## SQL (via Foreign Keys)

- one to one (1x1)

- one to many (1xn)

- many to many (nxn)

## Mongo Relationships

### One to Many / Approach 1(one to few)

- Store the child document inside parent

```js
{
    _id: objectId("651d234drgr34ewr433t5534"),
    username: `Richard`,
    addresses: [
        {location: `221B Baker Street`, city: `London`},
        {location: `P36 DownTown`, city: `London`},

    ],
    __v: 1
},
```
