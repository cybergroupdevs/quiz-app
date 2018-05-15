import { Component, OnInit, Inject , Optional } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { FormArray } from '@angular/forms/src/model';
import { CategorySelectComponent } from '../category-select/category-select.component';


@Component({
  selector: 'app-add-new-round-dialog',
  templateUrl: './add-new-round-dialog.component.html',
  styleUrls: ['./add-new-round-dialog.component.scss']
})
export class AddNewRoundDialogComponent implements OnInit {

  roundForm: FormGroup;
<<<<<<< HEAD
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
=======
  title = 'Add New Round';
    newCategory: any ;
    categoryFinal: FormArray;
    categoryList = [{
      _id: 1 ,
      name: 'Angular'
    }, {
      _id: 2 ,
      name: 'Logo'
    }, {
      _id: 3 ,
      name: 'Vocab'
    }];
>>>>>>> f49d1d02068fd8fec798704d00574cc071815841

  constructor(private _fB: FormBuilder ,
              private _dialogRef: MatDialogRef<AddNewRoundDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) private roundToEdit: any  ) { }

  ngOnInit() {
    debugger;
    this.roundForm = this._fB.group({
      roundName : [this.roundToEdit[0] ? this.roundToEdit[0].roundName : '', [Validators.required]],
      roundType : [this.roundToEdit[0] ? this.roundToEdit[0].roundType : '', [Validators.required]],
      categoryFinal : this._fB.array([
      this.initCategory()])
      });
  }

  initCategory() {
    return this._fB.group({
      category: [, ] ,
      numberOfQuestion : [, ],
      point: [, [Validators.max(15)]],
      });
  }

      submit(roundForm) {
        console.log(roundForm.value);
      }

      isNotNull(a) {
        if (a.category !== '' && a.numberOfQuestion !== null && a.point !== null ) {
          return true ;
        } else {
          return false ;
        }
      }
      getCategory() {
        return this.roundForm.get('categoryFinal').value;
      }

      removeCategory(i: number) {
        const control = <FormArray>this.roundForm.controls['categoryFinal'];
        control.removeAt(i);
      }

      addCategory(cat: any, number: any , pnt: any) {
        if (cat.value === '' || number.value === '' || pnt.value === '') {
          return;
        }
        this.categoryFinal = <FormArray>this.roundForm.get('categoryFinal');
        this.newCategory = this._fB.group({
          category: cat.value,
          numberOfQuestion: number.value,
          point: pnt.value
        });
        this.categoryFinal.push(this.newCategory);
        cat.value = '';
        number.value = '';
        pnt.value = '';
        debugger;
      }
    }
