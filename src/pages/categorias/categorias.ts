import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CategoriasService } from '../../service/categorias.service';
import { Categorias } from '../../model/categorias';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
  categorias : Categorias[];
  categoriasPage : Categorias[] =[];


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service : CategoriasService) {
  }

  ionViewDidLoad() {
    this.getCategorias();
  }

  getCategorias(){
    this.service.getCategorias()
      .subscribe( response => {
        this.categorias = response;

    
    });
   
  }

  irParaProdutos(id : String){
    this.navCtrl.push('ProdutoPage', {'id' : id});
  }
}
