import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cat } from 'src/app/models/cat.model';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private gatoserv: CatService) { }

  gatos: Cat[] | undefined;
  opciones: number[] = [5, 10, 15, 20, 25];
  limite: any;

  valor = new FormGroup({
    limite: new FormControl('1', [Validators.required])
  });

  buscar(): void {
    const minim: string | null = this.valor.controls['limite'].value;

    this.gatoserv.getCats(minim).subscribe({ next: (value: Cat[]) => { this.gatos = []; this.gatos = value; 
    console.log(value);
    } });
  }

}
