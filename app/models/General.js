module.exports = (sequelize, Sequelize) => {
    const General = sequelize.define('General', {

        type: {
            type: Sequelize.STRING,
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        RestaurantId: {
            type: Sequelize.INTEGER
        }

    });

    return General;
}