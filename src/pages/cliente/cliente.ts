import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Clientes } from '../../model/clientes';
import { ClientesService } from '../../service/clientes.service';

@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {
  clientes : Clientes[];
  clientesPage : Clientes[] =[];
  page : number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service : ClientesService,
              public loading : LoadingController) {
  }


  ionViewDidLoad() {
    this.getClientes();
  }

  getClientes(){
    this.service.getClientes()
      .subscribe( response => {
        this.clientes = response;
        this.addPage();
        console.log(this.clientesPage);
    });
   
  }
  addPage(){
    
    for(var i = 0; i < 3; i++){
      this.clientesPage.push(this.clientes[this.page]);
      this.page++;
    }
    console.log(this.clientesPage);
  }
  doRefresh(refresher) {
    this.clientesPage = [];
    setTimeout(() => {
     this.getClientes();
     refresher.complete();
    }, 2000);
  }
  doInfinite(infiniteScroll) {
    

    setTimeout(() => {

      this.addPage();
      infiniteScroll.complete();
    }, 500);
  }

}
