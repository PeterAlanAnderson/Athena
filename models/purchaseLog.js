module.exports = (sequelize, DataTypes) => {
    var PurchaseLog = sequelize.define("PurchaseLog", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        purchaseID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1
        },
        itemId: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    }, { timestamps : false
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