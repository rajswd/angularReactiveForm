import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dataModel:Array<any> = [];
  formModel:FormGroup;
  _counter:number = 0;

  constructor(private fb:FormBuilder){
    this.formModel = this.fb.group({
      fName:['', Validators.required],
      lName:['', Validators.required],
      id:['', Validators.required],
      idType:['', Validators.required],
      companyList: this.fb.array([])
    });
  }

  get companyList() {
    return this.formModel.get('companyList') as FormArray;
  }

  addcompanyList(index:number) {
    let a = "cName_"+this._counter,
        b = "wLocation_"+this._counter;

    this.companyList.push(this.fb.group({
      cName:['',Validators.required],
      wLocation:['',Validators.required]
    }));
    this._counter++;
  }

  ngOnInit(){


  }

  addToDataList(){
    console.log(this.formModel.value, this.formModel.valid);
  }


}
