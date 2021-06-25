import {Component, Input, OnInit} from '@angular/core';
import {Igraci} from '../models/povreda-dodaj-vm';
import {HttpClient} from '@angular/common/http';
import {MyConfig} from '../../MyConfig';
import {NotificationService} from '../../notification.service';

@Component({
  selector: 'app-dodaj-povreda',
  templateUrl: './dodaj-povreda.component.html',
  styleUrls: ['./dodaj-povreda.component.css']
})
export class DodajPovredaComponent implements OnInit {

  constructor(private http: HttpClient, private notifyService : NotificationService) {}
  @Input()
  povredaDodaj: Igraci = null;

  ngOnInit(): void {
  }

  Spasi() {
    this.http.post(MyConfig.adresaServera + "/Povreda/SnimiDodaj", this.povredaDodaj, MyConfig.httpOpcije).subscribe((result)=>{
      this.notifyService.showSuccess("Podaci o povredi uspješno pohranjeni!", "Dodavanje povrede")
      this.povredaDodaj = null;
      window.location.reload();
    });
  }

  odaberiIgrac(igrac: any) {
    this.povredaDodaj.odabraniIgrac = igrac.target.value;
  }
}
