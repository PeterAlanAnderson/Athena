module.exports = (sequelize, DataTypes) => {
    var Item = sequelize.define("Item", {
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {len:[1,50]}
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {len:[1,300]}
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        auction: {
            type: DataTypes.BOOLEAN
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true
        },
        featured: {
            type: DataTypes.BOOLEAN
        },
        totalSold:{
            type: DataTypes.INTEGER
        },
        tags: {
            type: DataTypes.TEXT
        }

    });

    Item.associate = (models) => {

        // Item.hasOne(models.PurchaseLog, {
        //     foreignKey: 'itemId'
        // });
        Item.belongsTo(models.Customer, {
            foreignKey: 'owner'
            // through: models.PurchaseLog
        })
    };
    return Item;
}