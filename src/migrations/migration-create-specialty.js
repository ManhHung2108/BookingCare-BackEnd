"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("specialties", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            image: {
                type: Sequelize.BLOB("long"),
            },
            descriptionHTML: {
                type: Sequelize.TEXT("long"),
            },
            descriptionMarkdown: {
                type: Sequelize.TEXT("long"),
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("specialties");
    },
};

/**Dùng để tự động map vào database cho chúng ta */
