/// <reference path="crud.d.ts"/>
import * as CRUD from "./crud";
var row = {
    firstName: "Guillaume",
    lastName: "Salva"
};
var newRowID = CRUD.insertRow(row);
var updatedRow = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23
};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
//# sourceMappingURL=main.js.map