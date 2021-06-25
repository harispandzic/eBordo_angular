import {Component, OnInit} from '@angular/core';
import {MyConfig} from './MyConfig';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
}
