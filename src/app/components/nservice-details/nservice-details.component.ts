import { Component, Input, OnInit } from '@angular/core';
import { NserviceService } from 'src/app/services/nservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Nservice } from 'src/app/models/nservice.model';
@Component({
  selector: 'app-nservice-details',
  templateUrl: './nservice-details.component.html',
  styleUrls: ['./nservice-details.component.scss']
})
export class NserviceDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentNservice: Nservice = {
    title: '',
    description: '',
    published: false
  };
  
  message = '';
  constructor(
    private nserviceService: NserviceService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getNservice(this.route.snapshot.params["id"]);
    }
  }
  getNservice(id: string): void {
    this.nserviceService.get(id)
      .subscribe({
        next: (data) => {
          this.currentNservice = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updatePublished(status: boolean): void {
    const data = {
      title: this.currentNservice.title,
      description: this.currentNservice.description,
      published: status
    };
    this.message = '';
    this.nserviceService.update(this.currentNservice.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentNservice.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  updateNservice(): void {
    this.message = '';
    this.nserviceService.update(this.currentNservice.id, this.currentNservice)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Nservice was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteNservice(): void {
    this.nserviceService.delete(this.currentNservice.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/nservices']);
        },
        error: (e) => console.error(e)
      });
  }
}