Customer.hasMany(Money, {foreignKey: 'vendorId'});
Customer.hasMany(PurchaseLog, {foreignKey: 'customerId'});