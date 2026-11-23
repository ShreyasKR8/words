import express from "express";
import postsRouter from "./routes/postsRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/posts', postsRouter);

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});