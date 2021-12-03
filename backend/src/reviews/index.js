import express from "express";

import fs from "fs";

import uniqid from "uniqid";

import path, { dirname, join } from "path";

import { fileURLToPath } from "url";

import { reviewsFilePath } from "../utils/uploadProductImg/index.js";

import {
  checkReviewSchema
} from "./validation.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const reviewsRouter = express.Router();

// Create Review

reviewsRouter.post("/", async (req, res, next) => {
    try {
        const { comment, price, productId } = req.body;

        const review = {
            id: uniqid(),
            comment,
            price,
            productId,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        const fileAsBuffer = fs.readFileSync(reviewsFilePath);

        const fileAsString = fileAsBuffer.toString();

        const fileAsJSONArray = JSON.parse(fileAsString);

        fileAsJSONArray.push(review);
        
        res.send(review);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Get All Reviews

reviewsRouter.get("/", async (req, res, next) => {
    try {
        getReviews();
        const fileAsBuffer = fs.readFileSync(reviewsFilePath);

        const fileAsString = fileAsBuffer.toString();

        const fileAsJSON = JSON.parse(fileAsString);
        
        res.send(fileAsJSON);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Edit Review

reviewsRouter.get("/", async (req, res, next) => {
    try {
        const fileAsBuffer = fs.readFileSync(reviewsFilePath);
        
        const fileAsString = fileAsBuffer.toString();

        const fileAsJSONArray = JSON.parse(fileAsString);

        const reviewIndex = fileAsJSONArray.findIndex((review) => review.id === req.params.id);
        if (reviewIndex !== -1) {
            res.status(404).send({ message: error.message });
        }
        const previousReviewData = fileAsJSONArray[reviewIndex];
        const changedReview = {
            ...previousReviewData,
            ...req.body,
            updatedAt: newDate(),
            id: req.params.id,
        };
        fileAsJSONArray[reviewIndex] = changedReview;

        fs.writeFileSync(reviewsFilePath, JSON.stringify(fileAsJSONArray));

        res.send(changedReview);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Delete Review

reviewsRouter.delete("/:id", async (req, res, next) => {
    try {
        const fileAsBuffer = fs.readFileSync(reviewsFilePath);

        const fileAsString = fileAsBuffer.toString();

        const fileAsJSONArray = JSON.parse(fileAsString);

        const review = fileAsJSONArray.find((review) => review.id === req.params.id);
        if (!review) {
            res.status(404).send({ message: `Review with ${req.params.id} does not exist.` });
        }
        fileAsJSONArray = fileAsJSONArray.filter((review) => review.id);

        fs.writeFileSync(reviewsFilePath, JSON.stringify(fileAsJSONArray));

        res.status(204).send();
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

export default reviewsRouter;
