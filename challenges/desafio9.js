// 9 - Retorne o nome de todos os lanches que possuam calorias abaixo de 500

db.produtos
  .find(
    {
      valoresNutricionais: {
        $elemMatch: {
          tipo: "calorias",
          quantidade: { $lt: 500 },
        }
      }
    },
    { nome: 1, _id: 0 },
    );