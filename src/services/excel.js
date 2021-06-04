const xl = require("excel4node");
const wb = new xl.Workbook();
const ws = wb.addWorksheet("Nome da planilha");

function formatData(products) {
  const data = products.map((product) => {
    return {
      ref: product.ref,
      description: product.descricao,
    };
  });
  const headingColumnNames = ["Referência (código fornecedor)", "HTML da descrição completa"];

  return { data, headingColumnNames };
}

function generateFile(products) {
  const { data, headingColumnNames } = formatData(products);

  let headingColumnIndex = 1;
  headingColumnNames.forEach((heading) => {
    ws.cell(1, headingColumnIndex++).string(heading);
  });

  let rowIndex = 2;
  data.forEach((record) => {
    let columnIndex = 1;
    Object.keys(record).forEach((columnName) => {
      ws.cell(rowIndex, columnIndex++).string(record[columnName]);
    });
    rowIndex++;
  });

  wb.write("./src/archives/arquivo.xlsx");
}

module.exports = generateFile;

// const data = [
//   {
//     "name": "Test",
//     "email": "alison@gmail.com",
//     "cellphone": "65992438102"
//   },
//   {
//     "name": "Test",
//     "email": "alison@gmail.com",
//     "cellphone": "65992438102"
//   }
// ];

// const headingColumnNames = [
//   "Nome",
//   "E-mail",
//   "Celular"
// ];

// let headingColumnIndex = 1
// headingColumnNames.forEach(heading => {
//   ws.cell(1, headingColumnIndex++).string(heading)
// });

// let rowIndex = 2
// data.forEach(record => {
//   let columnIndex = 1
//   Object.keys(record).forEach(columnName => {
//     ws.cell(rowIndex, columnIndex++).string(record[columnName])
//   })
//   rowIndex++
// })

// wb.write("./src/archives/arquivo.xlsx")
