import {Component, Input, OnInit} from '@angular/core';
import {PovredaDetaljiVM} from '../models/povreda-detalji-vm';
import {MyConfig} from '../../MyConfig';
import {HttpClient} from '@angular/common/http';
import {PovredaPrikazVM} from '../models/povreda-prikaz-vm';
import {PovredaUrediVM} from '../models/povreda-uredi-vm';
import {NotificationService} from '../../notification.service';

@Component({
  selector: 'app-uredi-povreda',
  templateUrl: './uredi-povreda.component.html',
  styleUrls: ['./uredi-povreda.component.css']
})
export class UrediPovredaComponent implements OnInit {
  @Input()
  povredaUrediDodaj: PovredaUrediVM;
  constructor(private http: HttpClient, private notifyService : NotificationService) {}

  ngOnInit(): void {
  }

  Spasi() {
    this.http.post(MyConfig.adresaServera + "/Povreda/SnimiUredi", this.povredaUrediDodaj, MyConfig.httpOpcije).subscribe((result)=>{
      this.notifyService.showWarning("Podaci o povredi uspješno ažurirani!", "Ažuriranje podataka");
      this.povredaUrediDodaj = null;
      window.location.reload();
    });
  }
}
