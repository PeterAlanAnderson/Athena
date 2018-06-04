module.exports = (sequelize, DataTypes) => {
    var PurchaseLog = sequelize.define("PurchaseLog", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        purchaseID: {
            type: DataTypes.TIMESTAMP
        },
        itemId: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        date: {
            type: DataTypes.DATE
        }
    });

    PurchaseLog.associate = (models) => {

        // Item.hasOne(models.PurchaseLog, {
        //     foreignKey: 'itemId'
        // });
        PurchaseLog.belongsTo(models.Item, {
            foreignKey: 'itemId'
            // through: models.PurchaseLog
        })
    };

    return PurchaseLog;
}