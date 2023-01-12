import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';


@Component({
  selector: 'app-add-new-teacher',
  templateUrl: './add-new-teacher.component.html',
  styleUrls: ['./add-new-teacher.component.css']
})
export class AddNewTeacherComponent implements OnInit {

  constructor(private service : AppServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  createTeacher(value){

    const teacher = {
      id : value.id,
      name : value.name,
      age : value.age
    }


    this.service.addTeacher(teacher).subscribe((response)=>{
      this.router.navigate(['teacher'])
    },(error)=>{
      console.log('ERROR - ', error)
    })
  }

}
