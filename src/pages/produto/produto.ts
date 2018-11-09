import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produtos } from '../../model/produtos';
import { ProdutosService } from '../../service/produtos.service';

/**
 * Generated class for the ProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {
  
  produtos : Produtos[];
 

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public produtosService : ProdutosService,
  ) {
  

  this.produtosService.getProdutos(this.navParams.get('id'))
  .subscribe(response => {
    this.produtos = response['content'];
  });
  }
}
