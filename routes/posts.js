const express = require("express");
const router = express.Router();

const posts = require("../data/posts");
const error = require("../utilities/error");

router
    .route("/")
    .get((req, res, next) => {
        const links = [
            {
                href: "posts/:id",
                rel: ":id",
                type: "GET",
            },
        ];
        if (req.query.userId) {
            // Filter the posts array to only include posts where the userId matches the query parameter
            const userPosts = posts.filter((p) => p.userId == req.query.userId);

            // If any posts are found, return them as a JSON response
            if (userPosts.length > 0) res.json(userPosts);
            // If no posts are found, call the next middleware with an error
            else next(error(404, "No posts found for this user"));
        } else {
            // If no userId is provided, return all posts
            res.json(posts);
        }
        res.json({ posts, links });
    })
    .post((req, res, next) => {
        if (req.body.userId && req.body.title && req.body.content) {
            const post = {
                id: posts[posts.length - 1].id + 1,
                userId: req.body.userId,
                title: req.body.title,
                content: req.body.content,
            };

            posts.push(post);
            res.json(posts[posts.length - 1]);
        } else next(error(400, "Insufficient Data"));
    });

router
    .route("/:id")
    .get((req, res, next) => {
        const post = posts.find((p) => p.id == req.params.id);

        const links = [
            {
                href: `/${req.params.id}`,
                rel: "",
                type: "PATCH",
            },
            {
                href: `/${req.params.id}`,
                rel: "",
                type: "DELETE",
            },
        ];

        if (post) res.json({ post, links });
        else next();
    })
    .patch((req, res, next) => {
        const post = posts.find((p, i) => {
            if (p.id == req.params.id) {
                for (const key in req.body) {
                    posts[i][key] = req.body[key];
                }
                return true;
            }
        });

        if (post) res.json(post);
        else next();
    })
    .delete((req, res, next) => {
        const post = posts.find((p, i) => {
            if (p.id == req.params.id) {
                posts.splice(i, 1);
                return true;
            }
        });

        if (post) res.json(post);
        else next();
    });

module.exports = router;
