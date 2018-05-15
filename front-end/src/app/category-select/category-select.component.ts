import { Component, Input, OnInit } from '@angular/core';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { NgStyle } from '@angular/common';
import { MatDialog, MatDialogRef, MatDialogConfig, MatSnackBar } from '@angular/material';
import {Http, RequestOptions, Headers} from '@angular/http';
import { AddNewCategoryDialogComponent } from '../add-new-category-dialog/add-new-category-dialog.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss']
})

export class CategorySelectComponent implements OnInit {
  Category: {};
  gradientCounter = 0;
  rand: any[] = [];
  randBackground: any;
  categorylist: any;
  isGradColorCalled = false;
  dialogRef: MatDialogRef<AddNewCategoryDialogComponent>;
  @Input() showMePartially: boolean;
  baseUrl = this._http.baseUrl ;
  dialogConfig = new MatDialogConfig();

  constructor(private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _http?: HttpWrapperService) {
      this._http.get(this.baseUrl + '/api/category').subscribe(response => {
        console.log(response);
        this.categorylist = response;
      });
    }
    childStatusChange(edited: boolean) {
      if (edited) {
        this._http.get(this.baseUrl + '/api/category').subscribe(response => {
          console.log(response);
          this.categorylist = response;
        });
      }
    }

    addNewCategory(id?): void {
      if (id) {
        this.getCategoryById(id).subscribe(response => {
          this.Category = response;
          this.dialogRef = this._dialog.open(AddNewCategoryDialogComponent, {
            width : '500px' ,
            height : 'auto',
            hasBackdrop : false,
            data : this.Category
          });
          this.dialogRef.afterClosed().subscribe( data => {
            console.log('Edit Dialog closed');
            this._http.get(this.baseUrl + '/api/category').subscribe(response => {
              console.log(response);
              this.categorylist = response;
            });
          });
        });
      } else {
        this.dialogRef = this._dialog.open(AddNewCategoryDialogComponent, {
          width : '500px' ,
          hasBackdrop : false,
          data : ''
        });
        this.dialogRef.afterClosed().subscribe( data => {
          console.log('Add Dialog closed');
          this._http.get(this.baseUrl + '/api/category').subscribe(response => {
            console.log(response);
            this.categorylist = response;
          });
        });
      }
    }

    deletecategory(id) {
      this._http.delete(this.baseUrl + '/api/category/' + id)
      .subscribe(response => {
        this._http.get(this.baseUrl + '/api/category').subscribe(response => {
          console.log(response);
          this.categorylist = response;
        });
        this._snackBar.open('Deleted Category', '' , {
          duration: 2000
        });
      });
    }

    getCategoryById(id: string): Observable<Response> {
      return this._http.get(this.baseUrl + '/api/category/' + id );
    }

    gradColor() {
      this.isGradColorCalled = true;
      const color = [
      'linear-gradient(120deg, #FF82A9 0%, #FFA4C0 51%, #FFBAD0 75%)',
      'linear-gradient(120deg, #56CBF9 0%, #A2E2FB 51%, #B2E7FC 75%)',
      'linear-gradient(120deg, #6DD1A3 0%, #79E8B5 51%, #85FFC7 75%)',
      'linear-gradient(120deg, #ff9a9e 0%, #ff99cc 51%, #fecfef 90%)',
      'linear-gradient(120deg, #E6FF89 0%, #D2FF28 51%, #DEFF62 75%)',
      'linear-gradient(120deg, #9900FF 0%, #9933FF 51%, #9966FF 75%)',
      'linear-gradient(120deg, #FF9900 0%, #FFCC00 51%, #FFFF00 75%)',
      'linear-gradient(120deg, #C6BAC7 0%, #DCCFDD 51%, #F1E3F3 75%)',
      'linear-gradient(120deg, #BF98A0 0%, #D6BDC2 51%, #DCC6CB 75%)',
      'linear-gradient(120deg, #6DD1A3 0%, #79E8B5 51%, #85FFC7 75%)',
      'linear-gradient(120deg, #FF82A9 0%, #FFA4C0 51%, #FFBAD0 75%)',
      'linear-gradient(120deg, #56CBF9 0%, #A2E2FB 51%, #B2E7FC 75%)',
      'linear-gradient(120deg, #E4BE9E 0%, #E6C3A6 51%, #EDD5C1 75%)'];
<<<<<<< HEAD
=======

>>>>>>> f49d1d02068fd8fec798704d00574cc071815841
      for (let i = 0; i < this.categorylist.length; i++) {
        if (this.gradientCounter === 3) {
          this.gradientCounter = 0;
        }
        this.rand[i] = color[this.gradientCounter];
        this.gradientCounter++;
      }
    }

    bgChange(index) {
      if (this.isGradColorCalled === false) {
        this.gradColor();
      }
      this.randBackground = {
        'background': this.rand[index]
      };
      return this.randBackground;
    }
    ngOnInit() {
    }
  }
