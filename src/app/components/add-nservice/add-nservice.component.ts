import { Component, OnInit } from '@angular/core';
import { Nservice } from 'src/app/models/nservice.model';
import { NserviceService } from 'src/app/services/nservice.service';
@Component({
  selector: 'app-add-nservice',
  templateUrl: './add-nservice.component.html',
  styleUrls: ['./add-nservice.component.scss']
})
export class AddNserviceComponent implements OnInit {
  nservice: Nservice = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;
  constructor(private nserviceService: NserviceService) { }
  ngOnInit(): void {
  }
  saveNservice(): void {
    const data = {
      title: this.nservice.title,
      description: this.nservice.description
    };
    this.nserviceService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newNservice(): void {
    this.submitted = false;
    this.nservice = {
      title: '',
      description: '',
      published: false
    };
  }
}