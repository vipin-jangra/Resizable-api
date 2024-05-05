const router = require("express").Router();

const Article = require("../models/model");

let addCount = 0;
let updateCount = 0;

router.post('/add', async (req, res) => {
    try {
        if (req.body.article ==='' || Object.keys(req.body).length === 0) {
            return res.send({
                success: false,
                message: "Please enter data",
            });
        }

        const newArticle = new Article(req.body);
        await newArticle.save();
        addCount++;
        return res.send({
            success: true,

            message: "New Article added in database",
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
});


router.put('/update-article', async(req, res)=>{
    try {
        
        const updatedArticle = await Article.findByIdAndUpdate(req.body._id, req.body, {new:true});
        updateCount++;
        return res.send({
            message :`Article ${updatedArticle.article} updated successfully!`,
            data : updatedArticle,
            success : true
        });

    } catch (error) {
        return res.send({
            message:error.message,
            success :false
        });
    }
});

router.get('/get-latest',async(req, res)=>{
    try {
        // Fetch the latest article from the database
        const latestArticle = await Article.findOne().sort({ createdAt: -1 });

        if (!latestArticle) {
            return res.send({
                success: false,
                message:'No article found'
            })
        }

        // Send the latest article as the response
        return res.send({
            success: true,
            data : latestArticle
        });
    } catch (error) {
        return res.send({
            success: false,
            message : error.message
        });
    }
})

// Route to get counts
router.get('/counts', async(req, res) => {
    return res.send({
        success: true,
        data: { addCount, updateCount }
    });
});

module.exports = router;