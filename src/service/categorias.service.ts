import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Categorias } from "../model/categorias";

@Injectable()
export class CategoriasService {
        constructor(private http : HttpClient) { }

        getCategorias() : Observable<Categorias[]>{
            return this.http.get<Categorias[]>(
                'https://tcc-lojavirtual.herokuapp.com/categorias'
            );
            
    }
}