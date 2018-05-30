var db = require("../models")

module.exports = function(app){

    //get all customers
    app.get("/api/customers", function(req, res){
        db.Customer.findAll({}).then(function(result){
            res.json(result)
        })
    })

    //get one customer
    app.get("/api/customer", function(req, res){
        db.Customer.findOne({
            where:{
                name: req.body.name
            }
        }).then(function(result){
            res.json(result)
        })
    })

    //POST new customer
    app.post("/api/customer", function(req, res){
        db.Customer.create({
            name: req.body.name,
            username: req.body.username,
            password: req.body.passoword,
            vendor: req.body.vendor,
            storeName: req.body.storeName,
            likedTags: req.body.likedTags
        }).then(function(result){
            res.json(result)
        })
    })

    //POST new item
    app.post("/api/item", function(req, res){
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
        }).then(function(result){
            res.json(result)
        })
    })

    //GET all items
    app.get("/api/items", function(req, res){
        db.Item.findAll({}).then(function(result){
            res.json(result)
        })
    })

    //GET items that match
    // ********************** YA STILL NEED TO DO THIS ONE PETE
    // app.get()

    //UPDATE item (reduce quantity for sale?)
    app.put("/api/item", function(req, res){
        db.Item.update({
            quantity: req.body.quantity
        },{
            where:{
                id: req.body.id
            }
        }).then(function(result){
            res.json(result)
        })
    })

    //CREATE purchaseLog
    app.post("/api/purchaseLog", function(req, res){
        db.PurchaseLog.create({
            purchaseId: req.body.purchaseId,
            itemId: req.body.itemId,
            quantity: req.body.quantity,
            customerId: req.body.customerId,
            date: req.body.date
        }).then(function(result){
            res.json(result)
        })
    })

    //GET all purchase logs
    app.get("/api/purchaseLog", function(req,res){
        db.PurchaseLog.findAll({}).then(function(result){
            res.json(result)
        })
    })

    //POST a new balance
    app.post("/api/money", function(req, res){
        db.Money.create({
            vendorId: req.body.vendorId,
            balance: 0
        })
    })

    //UPDATE money for a vendor
    app.post("/api/money", function(req, res){
        db.Money.update({
            balance: req.body.balance
        },{
            where:{
                id: req.body.id
            }
        }).then(function(result){
            res.json(result)
        })
    })

    //GET money for a vendor
    app.get("/api/money", function(req, res){
        db.Money.findOne({
            where:{
                vendorId: req.body.vendorId
            }
        }).then(function(result){
            res.json(result)
        })
    })
}