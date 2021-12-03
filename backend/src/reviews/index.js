import express from "express";

import fs from "fs";

import uniqid from "uniqid";

import path, { dirname } from "path";

import { fileURLToPath } from "url";
import { parseFile, uploadFile } from "../utils/upload/index.js";

import {
  checkReviewSchema
} from "./validation.js";
import { check } from "express-validator";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const reviewsFilePath = path.join(__dirname, "reviews.json");

const reviewsRouter = express.Router();

// Create Review

reviewsRouter.post("/", checkReviewSchema, async (req, res, next) => {
    try {
        const review = {
            id: uniqid(),
            ...req.body,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        const fileAsBuffer = fs.readFileSync(reviewsFilePath);

        const fileAsString = fileAsBuffer.toString();

        const fileAsJSONArray = JSON.parse(fileAsString);

        fileAsJSONArray.push(review);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});



const reviewsRouter = express.Router();

export default reviewsRouter;
