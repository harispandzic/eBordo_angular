import {HttpHeaders} from '@angular/common/http';

export class MyConfig{
  static adresaServera: string = 'https://api.p2024.app.fit.ba';
  //static adresaServera: string = 'http://localhost:58929';
  static httpOpcije= {
    headers:new HttpHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin':"*",
      'Access-Control-Allow-Methods': "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      'Access-Control-Allow-Headers': "Origin, Content-Type, X-Auth-Token'"
    })
  };
}
