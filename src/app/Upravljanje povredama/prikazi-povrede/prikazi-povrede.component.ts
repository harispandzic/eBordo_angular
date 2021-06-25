import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PovredaPrikazVM, PovredaStavka} from '../models/povreda-prikaz-vm';
import {PovredaDetaljiVM} from '../models/povreda-detalji-vm';
import {PovredaUrediVM} from '../models/povreda-uredi-vm';
import {Igraci} from '../models/povreda-dodaj-vm';
import {NotificationService} from '../../notification.service';
import {MyConfig} from '../../MyConfig';
@Component({
  selector: 'app-prikazi-povrede',
  templateUrl: './prikazi-povrede.component.html',
  styleUrls: ['./prikazi-povrede.component.css']
})
export class PrikaziPovredeComponent implements OnInit {
  povredaPrikazVM: PovredaPrikazVM = null;
  povredaDetalji: PovredaDetaljiVM;
  povredaUredi: PovredaUrediVM;
  trazi: string = "";
  pozicija: string = "Filter...";
  pozicije:string[] = ["GOLMAN","ODBRANA","VEZNJAK","KRILO","NAPADAČ"];
  title: "";
  povredaDodaj: Igraci;
  adresaServera: string = MyConfig.adresaServera;
  pageSize: number = 5;
  currentPage: number = 1;

  constructor(private http: HttpClient, private notifyService : NotificationService) {}

  preuzmiPodatke() {
    this.http.get<PovredaPrikazVM>(MyConfig.adresaServera + '/Povreda/Prikaz?currentPage=' + this.currentPage +"&q=" + this.trazi).subscribe((result) => {
      this.povredaPrikazVM = result;
      if(this.povredaPrikazVM.povrede.length == 0){
        this.notifyService.showError("Nema rezultata pretrage!", "Pretraga")
      }
    });

  }
  ngOnInit(): void{
    this.preuzmiPodatke();
  }

  detalji(s: PovredaStavka) {
    this.http.get<PovredaDetaljiVM>(MyConfig.adresaServera + '/Povreda/Detalji?ID=' + s.povredaId).subscribe((result) => {
      this.povredaDetalji = result;
    });
  }

  obrisi(s: PovredaStavka) {
    this.http.get(MyConfig.adresaServera+ "/Povreda/Obrisi?ID="+s.povredaId).subscribe((result)=>{
      let indexOf = this.povredaPrikazVM.povrede.indexOf(s);
      this.povredaPrikazVM.povrede.splice(indexOf, 1);
      this.notifyService.showError("Podaci o povredi uspješno obrisani!", "Brisanje povrede")
    });
  }

  getPovrede() {
    return this.povredaPrikazVM.povrede;
  }

  pretragaPozicija(pozicija: any) {
    this.pozicija = pozicija.target.value;
    this.http.get<PovredaPrikazVM>(MyConfig.adresaServera + '/Povreda/Prikaz?currentPage=' + this.currentPage +"&pozicija=" + this.pozicija).subscribe((result) => {
      this.povredaPrikazVM = result;
      this.povredaPrikazVM.povrede = this.povredaPrikazVM.povrede.filter(s=>s.pozicija.startsWith(this.pozicija));
    });

    if(this.povredaPrikazVM.povrede.length == 0){
      this.notifyService.showError("Nema rezultata pretrage!", "Pretraga")
    }
  }

  refreshFilter() {
    this.pozicija = "Filter...";
    this.trazi = "";
    this.preuzmiPodatke();
  }

  uredi(s: number) {
    this.http.get<PovredaUrediVM>(MyConfig.adresaServera + '/Povreda/Uredi?ID=' + s).subscribe((result) => {
      this.povredaUredi = result;
    });
  }

  dodaj() {
    this.http.get<Igraci>(MyConfig.adresaServera + '/Povreda/Dodaj').subscribe((result) => {
      this.povredaDodaj = result;
    });
  }

  pageNumberChanged($event: any) {
    this.preuzmiPodatke();
  }

  pretragaImePrezime() {
    this.currentPage = 1;
    this.preuzmiPodatke();
  }

}
