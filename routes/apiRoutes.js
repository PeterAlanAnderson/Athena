var db = require("../models")

module.exports = function (app) {

    //login api
    app.patch("/api/login", function (req, res) {
        console.log(req.body)
        db.Customer.findOne({
            where: {
                email: req.body.emailAddress
            }
        }).then(function (data) {
            console.log(data)
            if (data.password == req.body.pwdin) {
                console.log("match password")
                // res.render("user")
                res.send("true")
            } else {
                console.log("mismatch password")
                // res.render("user", user)
                // return
                res.send("false")
            }
        })
    })

    //get all customers
    app.get("/api/customers", function (req, res) {
        db.Customer.findAll({}).then(function (result) {
            res.json(result)
        })
    })

    //get one customer
    // app.get("/api/customer/:name", function (req, res) {
    //     db.Customer.findOne({
    //         where: {
    //             name: req.body.name
    //         }
    //     }).then(function (result) {
    //         res.json(result)
    //     })
    // })

    //get one username
    app.get("/api/customer/:email", function (req, res) {
        db.Customer.findOne({
            where: {
                email: req.params.email
            }
        }).then(function (result) {
            res.json(result)
        })
    })

    //POST new customer
    app.post("/api/customer", function (req, res) {
        console.log("posting " + req.body.name)
        db.Customer.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            vendor: req.body.vendor,
            storeName: req.body.storeName,
            likedTags: req.body.likedTags,
            balance: 0
        }).then(function (result) {
            res.json(result)
        })
    })

    //POST new item
    app.post("/api/item", function (req, res) {
        db.Item.create({
            name: req.body.name,
            description: req.body.description,
            quantity: req.body.quantity,
            auction: false,
            owner: req.body.owner,
            price: req.body.price,
            image: req.body.image,
            category: req.body.category,
            featured: false,
            totalSold: 0,
            tags: req.body.tags
        }).then(function (result) {
            res.json(result)
        })
    })

    //GET all items
    app.get("/api/items", function (req, res) {
        db.Item.findAll({}).then(function (result) {
            res.json(result)
        })
    })

    app.get("/api/items/:id", function (req, res) {
        db.Item.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.json(data)
        })
    })
    
    app.get("/api/items/:category", function (req, res) {
        db.Item.findAll({
            where: {
                category: req.params.category
            }
        }).then(function (data) {
            res.json(data)
        })
    })

    // Get all items where totalSold => 1, order DESC
    app.get("/api/items/ts", function (req, res) {
        db.Item.findAll({
            where: {
                totalSold: {
                    $gte: 1
                }
            },
            order: [
                ["totalSold", "DESC"]
            ]
        }).then(function (results) {
            res.json(results);
        });
    });

    // Get all featured items
    app.get("/api/items/featured", function (req, res) {
        db.Item.findAll({
            where: {
                featured: {
                    $gte: 1
                }
            }
        }).then(function (results) {
            res.json(results);
        });
    });


    //GET items that match
    // ********************** YA STILL NEED TO DO THIS ONE PETE
    // app.get()

    //UPDATE item (reduce quantity for sale?)
    app.put("/api/item", function (req, res) {
        db.Item.update({
            quantity: req.body.quantity
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (result) {
            res.json(result)
        })
    })

    //CREATE purchaseLog
    app.post("/api/purchaseLog", function (req, res) {
        db.PurchaseLog.create({
            purchaseId: req.body.purchaseId,
            itemId: req.body.itemId,
            quantity: req.body.quantity,
            customerId: req.body.customerId,
            date: req.body.date
        }).then(function (result) {
            res.json(result)
        })
    })

    //GET all purchase logs
    app.get("/api/purchaseLog", function (req, res) {
        db.PurchaseLog.findAll({}).then(function (result) {
            res.json(result)
        })
    })


}