export class PovredaStavka {
  povredaId: number;
  igrac: string;
  datumPovrede: string;
  odsustvo: string;
  brojDana: number;
  tipPovrede: string;
  slika: string;
  kratkiOpis: string;
  pozicija: string;
  oporavljen: boolean;
}

export class PovredaPrikazVM {
  povrede: PovredaStavka[];
  total: number;
}
