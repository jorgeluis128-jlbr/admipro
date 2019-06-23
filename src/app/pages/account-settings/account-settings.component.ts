import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _settings: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(theme: string, link: any) {
    this.aplicarCheck(link);
    this._settings.aplicarTema(theme);
  }
  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');
    for ( let ref of selectores ) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
  colocarCheck() {
    let tema = this._settings.ajustes.tema;
    let selectores: any = document.getElementsByClassName('selector');
    for ( let ref of selectores ) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
