const express = require("express");
const router = express.Router();

const comments = require("../data/comments");
const error = require("../utilities/error");

router
    .route('/')
    .get((req, res, next) => {
        try {
            if (req.query.userId) {
                const userComments = comments.filter(c => c.userId == req.query.userId);
                res.json(userComments);
            } else if (req.query.postId) {
                const postComments = comments.filter(c => c.postId == req.query.postId);
                res.json(postComments);
            } else {
                res.json(comments);
            }
        } catch (error) {
            next(error);
        }
    })
    .post((req, res, next) => {
        try {
            const newComment = {
                id: comments.length + 1,
                userId: req.body.userId,
                postId: req.body.postId,
                body: req.body.body
            };
            comments.push(newComment);
            res.json(newComment);
        } catch (error) {
            next(error);
        }
    });   
    

module.exports = router;