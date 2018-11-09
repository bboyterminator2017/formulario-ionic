import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Produtos } from "../model/produtos";

@Injectable()
export class ProdutosService {
        constructor(private http : HttpClient) { }

        getProdutos(id : String) : Observable<Produtos[]>{
            return this.http.get<Produtos[]>(
                'https://tcc-lojavirtual.herokuapp.com/produtos/?categorias=${id}');
        }

            
    }

