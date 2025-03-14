
http://localhost:3000/fotos/findAll/json



npx sequelize-cli seed:generate --name fotos

async up (queryInterface, Sequelize) {
for (let i = 0; i <10; i++) {
  await
queryInterface.bulkInsert('fotos', [{

titulo: 'fotos'+i,
descripcion: 'Lorem ipsum
dolor sit amet, consectetur adipiscing
elit.',

calificacion:
(Math.random()*10).toFixed(2),

ruta:

'public/images/'+'fotos'+i+'.png',
createdAt: new Date(),
updatedAt: new Date()
}], {});
}
},


En la función de reversión de cambios down, agregue:

...
async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('fotos', null, {});
},


npx sequelize-cli db:seed --seed YYYYMMDDHHMMSS-fotos


npx sequelize-cli migration:generate --name associate-foto-etiqueta