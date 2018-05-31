module.exports = (sequelize, DataTypes) => {
    var Customer = sequelize.define("Customer", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            validate: {len: [1, 75]},
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            validate: {len:[1, 75]},
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            validate: {len:[1, 20]}
        },
        vendor: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        storeName: {
            type: DataTypes.STRING,
            validate: {len:[1, 50]}
        },
        likedTags: {
            type: DataTypes.TEXT
        },
        balance: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }

    });
    // Customer.associate = (models) => {

    //     Customer.belongsToMany(models.Item, {
    //         foreignKey: 'customerId',
    //         through: models.PurchaseLog
    //     });
    // }
    return Customer;
}