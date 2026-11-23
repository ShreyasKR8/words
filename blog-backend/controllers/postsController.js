export const getNewPost = async(req, res) => {
    res.json({
        message: "Post form opened",
    });
};

export const createPost = async(req, res) => {
    res.json({
        message: "Post created",
    });
};

export const getPosts = async(req, res) => {
    res.json({
        message: "Posts retrieved",
    });
};

export const getPost = async(req, res) => {
    res.json({
        message: `Retrieved post id - ${req.params.id}`,
    });
};

export const updatePost = async(req, res) => {
    res.json({
        message: `Updated post id - ${req.params.id}`,
    });
};

export const deletePost = async(req, res) => {
    res.json({
        message: `Deleted post id - ${req.params.id}`,
    });
};