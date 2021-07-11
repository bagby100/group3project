const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render("admin/addOrEdit", {
        viewTitle: "Admin Registration"
    });
    res.render("pet/addOrEdit", {
        viewTitle: "Pet Registration"
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;