const {Sequelize, DataTypes} = require('sequelize'); 
const {sequelize} = require('../config/db');

const Registro = sequelize.define('registro',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    id_user : {
        type: DataTypes.STRING(30),
        allowNull:false,
        unique:true
    },
    

    username:{
        type: DataTypes.STRING(80),
        allowNull:false,
        unique:false
    },

    email:{
        type: DataTypes.STRING(20),
        allowNull:false,
        unique:true
    },

    telefono:{
        type: DataTypes.STRING(30),
        allowNull:false
    },

    date:{
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW

    }
},

{

timestamps: false

})

module.exports = Registro;
