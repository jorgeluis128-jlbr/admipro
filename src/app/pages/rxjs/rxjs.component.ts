import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter  } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcription: Subscription;

  constructor() {
    // this.regreseObservable().pipe(  retry(2)).subscribe(
     this.subcription = this.regreseObservable().subscribe(
        numero => console.log('subs', numero),
        error => console.error('Error en el obs: ', error),
        () => console.log('El observable ha terminado'),
        );
      }
      ngOnInit() {
      }
      ngOnDestroy() {
        console.log('la página se va a cerrar!');
        this.subcription.unsubscribe();
        console.log('Se ha cancela la suscripcion!');
      }

      regreseObservable(): Observable<any> {
        return new Observable( (observer: Subscriber<any>) => {
          let contador = 0;
          let intervalo = setInterval(() => {
            contador += 1;
            const salida = {
              valor: contador
            };
            observer.next(salida );
            //
            /*if (contador === 2) {
              // clearInterval(intervalo);
              observer.error('Auxilio!!');
            }*/
          }, 1000);
        }).pipe(
          map(resp => resp.valor),
          filter( (valor, index) => {
            // console.log('Filter', valor, index);
            if (valor % 2 === 1) {
              return true; // impar
            } else {
              return false; // par
            }
          })
        );
  }

}
