import { Component } from '@angular/core';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';  

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // databaseObj: SQLiteObject; // Database instance object
  // name_model:string = ""; // Input field model
  // row_data: any = []; // Table rows
  // readonly database_name:string = "freaky_datatable.db"; // DB name
  // readonly table_name:string = "myfreakytable"; // Table name

  constructor() {}

  //constructor( private sqlite: SQLite) {}

  // // create () : Usado para criar um novo banco de dados com nome e local fornecidos. Retorna promessa.
  // createDB() {
  //   this.sqlite.create({
  //     name: this.database_name,
  //     location: 'default'
  //   })
  //     .then((db: SQLiteObject) => {
  //       this.databaseObj = db;
  //       alert('freaky_datatable Database Created!');
  //     })
  //     .catch(e => {
  //       alert("error " + JSON.stringify(e))
  //     });
  // }

  // // IF NOT EXISTS é usado para verificar se uma tabela já existe no banco de dados; se sim, ela ignorará a consulta. 
  // // pid é a CHAVE PRIMÁRIA do tipo INTEGER
  // // Nome é outra coluna para salvar o valor do tipo Varchar .
  // // Você pode ler mais sobre Criar consulta SQL da tabela aqui
  // // O método createTable () na classe component criará uma nova tabela
  // createTable() {
  //   this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (pid INTEGER PRIMARY KEY, Name varchar(255))', [])
  //     .then(() => {
  //       alert('Table Created!');
  //     })
  //     .catch(e => {
  //       alert("error " + JSON.stringify(e))
  //     });
  // }

  // // Aqui temos nomes de coluna separados por vírgula. A chave primária não é adicionada,
  // // pois será autoincrementada por si mesma. VALUES aceita entradas correspondentes a nomes de colunas na mesma ordem.
  // // O método insertRow () aceita valores de entrada e insere uma nova linha na tabela.
  // insertRow() {
  //   if (!this.name_model.length) {
  //     alert("Enter Name");
  //     return;
  //   }
  //   this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (Name) VALUES ("' + this.name_model + '")', [])
  //     .then(() => {
  //       alert('Row Inserted!');
  //       this.getRows();
  //     })
  //     .catch(e => {
  //       alert("error " + JSON.stringify(e))
  //     });
  // }

  // // O método getRows () buscará todas as linhas e fará um loop sobre o resultado para inserir row_data
  // getRows() {
  //   this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
  //     .then((res) => {
  //       this.row_data = [];
  //       if (res.rows.length > 0) {
  //         for (var i = 0; i < res.rows.length; i++) {
  //           this.row_data.push(res.rows.item(i));
  //         }
  //       }
  //     })
  //     .catch(e => {
  //       alert("error " + JSON.stringify(e))
  //     });
  // }

  // // O método deleteRow () pegará o objeto item e excluirá uma linha correspondente da tabela.
  // deleteRow(item) {
  //   this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE pid = " + item.pid, [])
  //     .then((res) => {
  //       alert("Row Deleted!");
  //       this.getRows();
  //     })
  //     .catch(e => {
  //       alert("error " + JSON.stringify(e))
  //     });
  // }
  
}
