import {Component, Input, OnInit} from '@angular/core';
import {PovredaDetaljiVM} from '../models/povreda-detalji-vm';
import {PovredaUrediVM} from '../models/povreda-uredi-vm';

@Component({
  selector: 'app-detalji-povreda',
  templateUrl: './detalji-povreda.component.html',
  styleUrls: ['./detalji-povreda.component.css']
})
export class DetaljiPovredaComponent implements OnInit {
  @Input()
  povreda: PovredaUrediVM;
  constructor() { }

  ngOnInit(): void {}

}
