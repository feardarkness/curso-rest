module.exports = (sequelize, DataType) => { 
  const persona = sequelize.define('persona', {
    id_persona: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombres: {
      type: DataType.STRING(100), 
      allowNulll: false,
    },
    apellidos: {
      type: DataType.STRING(100),
      allowNulll: false,
    },
    fecha_nacimiento: {
      type: DataType.DATE,
      allowNulll: false,
    },
  });

  persona.associate = (models) => {
    persona.hasMany(models.hobbie, { as: 'hobbies', foreignKey: { name: 'fid_persona', allowNull: false } });
  };

  return persona;
};