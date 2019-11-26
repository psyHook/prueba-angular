import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService {
  public peliculas: Pelicula[];

  constructor() {
    this.peliculas = [
      new Pelicula(
        "Spiderman 4",
        2019,
        "http://static.t13.cl/images/sizes/1200x675/1569598035-spider-man-2.jpg"
      ),
      new Pelicula(
        "Los vengadores",
        2018,
        "https://estaticos.elperiodico.com/resources/jpg/7/8/1556123252187.jpg"
      ),
      new Pelicula(
        "Harry Potter",
        2010,
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-reboot-1550045805.jpg"
      ),
      new Pelicula(
        "Rapido y furioso",
        2001,
        "https://cde.laprensa.e3.pe/ima/0/0/1/6/7/167019.jpg"
      )
    ];
  }

  holaMundo() {
    return "hola mundo desde un servicio de angular";
  }

  getPeliculas() {
    return this.peliculas;
  }
}
