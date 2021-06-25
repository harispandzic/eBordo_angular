export class SelectListItemIgrac {
  disabled: boolean;
  group?: any;
  selected: boolean;
  text: string;
  value: string;
}
export interface SelectListItemTipovi {
  disabled: boolean;
  group?: any;
  selected: boolean;
  text: string;
  value: string;
}
export class Igraci {
  povredaID: number;
  datumPovrede: Date;
  odsustvo: Date;
  tipPovrede: number;
  kratkiOpis: any;
  misljenjeLjekara: any;
  odabraniIgrac: string;
  igraci: SelectListItemIgrac[];
  tipovi: SelectListItemTipovi[];
}
