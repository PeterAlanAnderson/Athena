module.exports = (sequelize, DataTypes) => {
    var Money = sequelize.define("Money", {
        vendorId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        balance: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    Money.associate = (models) => {

        Money.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Money;
}