import { Component, OnInit } from '@angular/core';
import { Nservice } from 'src/app/models/nservice.model';
import { NserviceService } from 'src/app/services/nservice.service';
@Component({
  selector: 'app-nservice-list',
  templateUrl: './nservice-list.component.html',
  styleUrls: ['./nservice-list.component.scss']
})
export class NserviceListComponent implements OnInit {
  Nservices?: Nservice[];
  currentNservice: Nservice = {};
  currentIndex = -1;
  title = '';
  constructor(private nserviceService: NserviceService) { }
  ngOnInit(): void {
    this.retrieveNservices();
  }
  retrieveNservices(): void {
    this.nserviceService.getAll()
      .subscribe({
        next: (data) => {
          this.Nservices = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveNservices();
    this.currentNservice = {};
    this.currentIndex = -1;
  }
  setActiveNservice(Nservice: Nservice, index: number): void {
    this.currentNservice = Nservice;
    this.currentIndex = index;
  }
  removeAllNservices(): void {
    this.nserviceService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
  searchTitle(): void {
    this.currentNservice = {};
    this.currentIndex = -1;
    this.nserviceService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.Nservices = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}