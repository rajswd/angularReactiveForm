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


  constructor(private fb:FormBuilder){
    this.formModel = this.fb.group({
      fName:['', Validators.required],
      mName:[''],
      lName:['', Validators.required],
      id:['', Validators.required],
      idType:['', Validators.required],
      companyList: this.fb.array([])
    });
  }

  get companyList() {
    return this.formModel.get('companyList') as FormArray;
  }

  getName(item):string{
    return item.fName +" " + item.mName+ " "+item.lName;
  }

  addcompanyList(index:number) {

    this.companyList.push(this.fb.group({
      cName:['',Validators.required],
      wLocation:['',Validators.required],
      tDuration:['']
    }));
    // this.dataModel = this.formModel.value;//get("companyList") as FormArray
    
  }

  ngOnInit(){


  }

  reset(index:number){
    let cList = this.formModel.get("companyList") as FormArray;
    cList.at(index).reset();
  }

  delItem(index:number){
    let cList = this.formModel.get("companyList") as FormArray;
    cList.removeAt(index);
  }

  addToDataList(){
    if(this.formModel.valid){
      this.dataModel.push(this.formModel.value);//, this.formModel.valid);
      console.log(this.dataModel);
      this.formModel.reset();
    }
  }


}
