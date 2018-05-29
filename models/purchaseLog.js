module.exports = (sequelize, DataTypes) => {
    var PurchaseLog = sequelize.define("PurchaseLog", {
        transactionId : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        purchaseID: {
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        date: {
            type: DataTypes.DATE
        }
    });

    PurchaseLog.associate = (models) => {
    
        PurchaseLog.belongsToMany(models.Customer, {
            foreignKey: 'customerId'
        });
        PurchaseLog.belongsToMany(models.Item, {
            foreignKey: 'itemId'
        });

    };
    return PurchaseLog;
}