# ALAB 318.3.1: Expanding a RESTful API
## Introduction

This assignment expands the example REST API application that was explored during the lesson, adding additional routes and features that are common with an API of its kind.

## Objectives

- Add additional features to an existing RESTful Express API.
- Refactor existing code for efficiency, organization, and/or performance.


### Part 1: Exploring Existing Routes

The application has the following routes as a starting point:

- GET /
- GET /api
- GET /api/users
- POST /api/users
- GET /api/users/:id
- PATCH /api/users/:id
- DELETE /api/users/:id
- GET /api/posts
- POST /api/posts
- GET /api/posts/:id
- PATCH /api/posts/:id
- DELETE /api/posts/:id

### Part 2: Adding Additional Routes

The following additional routes and any code necessary to make them work are implemented in this project. 

- GET /api/users/:id/posts
- GET /api/posts?userId=<VALUE>
- GET /comments
- POST /comments
- GET /comments/:id
- PATCH /comments/:id
- DELETE /comments/:id
- GET /comments?userId=<VALUE>

### The following route are yet to be implemented.contribution to this route is highly appreciated.
- GET /comments?postId=<VALUE>
- GET /posts/:id/comments
- GET /users/:id/comments
- GET /posts/:id/comments?userId=<VALUE>
- GET /users/:id/comments?postId=<VALUE>

