const {Sequelize, DataTypes} = require('sequelize'); 
const {sequelize} = require('../config/db');

const Denunciar = sequelize.define('denunciar',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    denunciante_nombre: {
        type: DataTypes.STRING(80),
        allowNull:false,
        unique:false
    },
    denunciante_cc: {
        type: DataTypes.STRING(30),
        allowNull:false,
        unique:false
    },

    denunciante_edad :{
        type: DataTypes.INTEGER(5),
        allowNull:false,
        unique:false
    },

    mail :{
        type: DataTypes.STRING(20),
        allowNull:false,
        unique:false
    },


    denunciante_fecha_nacimiento :{
        type: DataTypes.DATE
    },

    denunciante_estado_civil :{
        type: DataTypes.STRING(20),
        allowNull:false,
        unique:false
    },

    victima :{
        type: DataTypes.STRING(5),
        allowNull:false,
        unique:false
    },

    denunciante_domicilio :{
        type: DataTypes.STRING(150),
        allowNull:false,
        unique:false
    },

    denunciante_telefono :{
        type: DataTypes.STRING(20),
        allowNull:false,
        unique:false
        
    },
    denunciante_relacion :{
        type: DataTypes.STRING(50),
        allowNull:false,
        unique:false

    },

    ubicacion_victima :{
        type: DataTypes.STRING(120),
        allowNull:false,
        unique:false

    },

    relato_hecho :{
        type: DataTypes.STRING(5000),
        allowNull:false,
        unique:false

    },

    victima_nombre :{
        type: DataTypes.STRING(80),
        allowNull:false,
        unique:false

    },
    victima_mayor :{
        type: DataTypes.STRING(5),
        allowNull:false,
        unique:false

    },

    victima_edad_aprox :{
        type: DataTypes.INTEGER(3),
        allowNull:false,
        unique:false

    },

    victima_fecha_nacimiento :{
        type: DataTypes.DATE,
        allowNull:false,
        unique:false

    },
    victima_domicilio :{
        type: DataTypes.STRING(150),
        allowNull:false,
        unique:false

    },

    relacion_agresor :{
        type: DataTypes.STRING(80),
        allowNull:false,
        unique:false

    },
    victima_telefono :{
        type: DataTypes.STRING(20),
        allowNull:false,
        unique:false

    },
    victima_agresor :{
        type: DataTypes.STRING(5),
        allowNull:false,
        unique:false

    },

    lugares_victima :{
        type: DataTypes.STRING(80),
        allowNull:false,
        unique:false

    },

    agresor_nombre : {
        type: DataTypes.STRING(80),
        allowNull:false,
        unique:false

    },
    agresor_domicilio : {
        type: DataTypes.STRING(120),
        allowNull:false,
        unique:false
    },

    agresor_relacion :{
        type: DataTypes.STRING(80),
        allowNull:false,
        unique:false

    },
    agresor_telefono: {
        type: DataTypes.STRING(20),
        allowNull:false,
        unique:false

    },

    agresor_victima_si :{
        type: DataTypes.STRING(5),
        allowNull:false,
        unique:false

    },
      
    lugares_agresor :{
        type: DataTypes.STRING(20),
        allowNull:false,
        unique:false

    }, 
    
    date:{
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW

    }
},

{

timestamps: false

})

module.exports = Denunciar;
