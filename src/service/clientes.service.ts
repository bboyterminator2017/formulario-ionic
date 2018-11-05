import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Clientes } from "../model/clientes";

@Injectable()
export class ClientesService {
        constructor(private http : HttpClient) { }

        getClientes() : Observable<Clientes[]>{
            return this.http.get<Clientes[]>(
                'https://tcc-lojavirtual.herokuapp.com/clientes'
            );

            
    }

    cadastrar(cliente: Clientes){
        return this.http.post(
            'https://tcc-lojavirutal.herokuapp.com/clientes',cliente,
            {
                observe: 'response',
                responseType: 'text'
            }

        )
    }
}