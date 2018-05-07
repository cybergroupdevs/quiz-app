import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { FormArray } from '@angular/forms/src/model';


@Component({
  selector: 'app-add-new-round-dialog',
  templateUrl: './add-new-round-dialog.component.html',
  styleUrls: ['./add-new-round-dialog.component.scss']
})
export class AddNewRoundDialogComponent implements OnInit {

  roundForm: FormGroup;
  baseUrl = this._http.baseUrl ;
  categoryList: any;
  constructor(private _fB: FormBuilder ,
    private _dialogRef: MatDialogRef<AddNewRoundDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _http?: HttpWrapperService) {
      this._http.get(this.baseUrl + '/api/category').subscribe(response => {
        console.log(response);
        this.categoryList = response;
      });
    }

    categoryForRound: Array<any> = [];
    newCategory: any = {};
    categoryFinal: Array<any> = [];
  // categoryList = [{
  //   _id: 1 ,
  //   name: 'Angular'
  // }, {
  //   _id: 2 ,
  //   name: 'Logo'
  // }, {
  //   _id: 3 ,
  //   name: 'Vocab'
  // }];

  pushCategory() {
    debugger;
    this.newCategory = this.roundForm.controls.categoryFinal.value[0].category ;
    console.log(this.newCategory);
    // Control.push(this.initCategory());
    }


  ngOnInit() {
    this.roundForm = this._fB.group({
      roundName : ['' , [Validators.required]],
      categoryFinal : this._fB.array([
        this.initCategory()
      ])
    });

  }
  initCategory() {
    return this._fB.group({
      category: ['', Validators.required],
      numberOfQuestion : [5, [Validators.required]],
      point: [ 5, [Validators.required,
                Validators.max(15)]],
      });
  }
}
