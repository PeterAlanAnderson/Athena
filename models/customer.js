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
        }

    });
    Customer.associate = (models) => {

        Customer.hasMany(models.Money, {
            foreignKey: 'vendorId'
        });
        Customer.hasMany(models.PurchaseLog, {
            foreignKey: 'customerId'
        });
        Customer.hasMany(models.Item, {
            foreignKey: 'owner'
        });
    }
    return Customer;
}