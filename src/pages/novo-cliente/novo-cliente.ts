import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientesService } from '../../service/clientes.service';

@IonicPage()
@Component({
  selector: 'page-novo-cliente',
  templateUrl: 'novo-cliente.html',
})
export class NovoClientePage {

  formGroup : FormGroup;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public clientesService: ClientesService
  ){

 
    this.formGroup = this.formBuilder.group({
      cpf : ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      endereco : ['', [Validators.required]],
      municipio : ['Rio de Janeiro', []],
      estado : ['RJ', []],
      telefone : ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha : ['', [Validators.required]]
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoClientePage');
  }

  cadastrar(){
    console.log(this.formGroup.value);

    this.clientesService.cadastrar(this.formGroup.value)
    .subscribe(response => {
      console.log("Cadastrado com sucesso");
    },
      error => {
        console.log(error);
      }
    );
  }
}
