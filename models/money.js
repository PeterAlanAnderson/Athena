module.exports = (sequelize, DataTypes) => {
    var Money = sequelize.define("Money", {
        vendorId: {
            type: Datatypes.INTEGER,
            primaryKey: true,
        },
        balance: {
            type: Datatypes.INTEGER,
            allowNull: false, 
        }
    });

    Money.associate = (models) => {
    
        Money.belongsTo(models.Customer, {
            foreignKey: 'vendorId'
        });
    };
    return Money;
}