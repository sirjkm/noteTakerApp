const { Model, DataTypes } = require("sequelize");
const { model } = require("../config/connection");
const sequelize = require("../config/connection");

class Note extends Model {}

Note.init(
    {
        note_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'note'
    }
);

module.export = Note;