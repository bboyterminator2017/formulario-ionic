import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CategoriasService } from '../../service/categorias.service';
import { Categorias } from '../../model/categorias';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
  categorias : Categorias[];
  categoriasPage : Categorias[] =[];
  page : number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service : CategoriasService,
              public loading : LoadingController) {
  }

  ionViewDidLoad() {
    this.getCategorias();
  }

  getCategorias(){
    this.service.getCategorias()
      .subscribe( response => {
        this.categorias = response;
        this.addPage();
        console.log(this.categoriasPage);
    });
   
  }
  addPage(){
    
    for(var i = 0; i < 3; i++){
      this.categoriasPage.push(this.categorias[this.page]);
      this.page++;
    }
    console.log(this.categoriasPage);
  }
  doRefresh(refresher) {
    this.categoriasPage = [];
    setTimeout(() => {
     this.getCategorias();
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
