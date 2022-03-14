import { Component, OnInit } from '@angular/core';

import { JobService } from '../services/job.service';
import { Job } from '../models/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  jobs: Job[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public jobService: JobService) { }

  ngOnInit(): void {
    console.log('okkkk');
    
    this.jobService.getAllJobs().subscribe((data: Job[])=>{
      console.log(data);
      
      this.jobs = data;
      console.log(this.jobs);
    })  
  }

}
