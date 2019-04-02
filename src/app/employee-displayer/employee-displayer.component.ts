import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-displayer',
  templateUrl: './employee-displayer.component.html',
  styleUrls: ['./employee-displayer.component.scss']
})
export class EmployeeDisplayerComponent implements OnInit {

  employeeData: object;
  colValue = 'blue'

  constructor() {
    // this.colValue = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`
    
    this.employeeData = {
      name: 'dani',
      age: 39,
      salary: 10000
    }

    this.employeeData['salary'] > 25000 ? this.colValue = "green" : this.colValue = "red"

  }



  ngOnInit() {
  }

}

// var xxx = EmployeeDisplayerComponent()
// xxx.employeeData = {
//   salary: 10000
// }

// expect(xxx.colValue).toBe("red")

// var xxx = EmployeeDisplayerComponent()
// xxx.employeeData = {
//   salary: 50000
// }

// expect(xxx.colValue).toBe("green")
