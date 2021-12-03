import { checkSchema, validationResult } from "express-validator";

const schema = {
    comment: {
        in: ["body"],
        isString: {
            errorMessage: "Content validation failed, type must be string.",
        },
    },
    rate: {
        in: ["body"],
        isNumeric: {
            errorMessage: "Rating validation failed, type must be string.",
        },
    },
    productId: {
        in: ["body"],
        isString: {
            errorMessage: "Product ID validation failed, type must be string.",
        },
    },
};