import express from "express";
import fs from "fs";
import uniqid from "uniqid";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
// import { parseFile, uploadFile } from "../utils/upload/index.js";

// import {
//   checkBlogPostSchema,
//   checkCommentSchema,
//   checkSearchSchema,
//   checkValidationResult,
// } from "./validation.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const productsFilePath = path.join(__dirname, "products.json");

const productsRouter = express.Router();

productsRouter.get("/", async (req, res, next) => {
  try {
    const fileAsBuffer = fs.readFileSync(productsFilePath);
    const fileAsString = fileAsBuffer.toString();
    const fileAsJSON = JSON.parse(fileAsString);
    res.send(fileAsJSON);
  } catch (error) {
    res.send(500).send({ message: error.message });
  }
});

productsRouter.get(
  "/:productID",
  //   checkSearchSchema,
  //   checkValidationResult,
  async (req, res, next) => {
    try {
      console.log("filtered");
      const { productID } = req.params;
      const fileAsBuffer = fs.readFileSync(productsFilePath);
      const fileAsString = fileAsBuffer.toString();
      const array = JSON.parse(fileAsString);
      const filtered = array.find((product) => product.id === productID);
      res.send(filtered);
    } catch (error) {
      res.send(500).send({ message: error.message });
    }
  }
);
productsRouter.post(
  "/",
  //   checkBlogPostSchema,
  //   checkValidationResult,
  async (req, res, next) => {
    try {
      const newProduct = {
        id: uniqid(),
        ...req.body,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const fileAsBuffer = fs.readFileSync(productsFilePath);
      const fileAsString = fileAsBuffer.toString();
      const fileAsJSONArray = JSON.parse(fileAsString);
      fileAsJSONArray.push(newProduct);

      fs.writeFileSync(productsFilePath, JSON.stringify(fileAsJSONArray));

      res.send(newProduct);
    } catch (error) {
      res.send(500).send({ message: error.message });
    }
  }
);
productsRouter.put("/:productID", async (req, res, next) => {
  try {
    const fileAsBuffer = fs.readFileSync(productsFilePath);
    const fileAsString = fileAsBuffer.toString();
    let fileAsJSONArray = JSON.parse(fileAsString);
    const productIndex = fileAsJSONArray.findIndex(
      (product) => product.id === req.params.productID
    );
    if (productIndex === -1) {
      res.status(404).send({
        message: `product with ${req.params.productID} is not found!`,
      });
    }
    const previousProduct = fileAsJSONArray[productIndex];
    const updatedProduct = {
      ...previousProduct,
      ...req.body,
      updatedAt: new Date(),
    };
    fileAsJSONArray[productIndex] = updatedProduct;

    fs.writeFileSync(productsFilePath, JSON.stringify(fileAsJSONArray));
    res.send(updatedProduct);
  } catch (error) {
    next(error);
  }
});

productsRouter.delete("/:productID", async (req, res, next) => {
  try {
    const fileAsBuffer = fs.readFileSync(productsFilePath);
    const fileAsString = fileAsBuffer.toString();
    let fileAsJSONArray = JSON.parse(fileAsString);

    const product = fileAsJSONArray.find(
      (product) => product.id === req.params.productID
    );
    if (!product) {
      res
        .status(404)
        .send({
          message: `product with ${req.params.productID} is not found!`,
        });
    }
    fileAsJSONArray = fileAsJSONArray.filter(
      (product) => product.id !== req.params.productID
    );
    fs.writeFileSync(productsFilePath, JSON.stringify(fileAsJSONArray));
    res.status(204).send();
  } catch (error) {
    res.send(500).send({ message: error.message });
  }
});

export default productsRouter;
