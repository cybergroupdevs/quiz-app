import { Component, OnInit , Input } from '@angular/core';
import {MatDialog , MatDialogRef , MatDialogConfig , MatSnackBar } from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {HttpWrapperService} from '../services/http-wrapper.service';
import {AddNewRoundDialogComponent} from '../add-new-round-dialog/add-new-round-dialog.component';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})

export class RoundsComponent implements OnInit {

  round: {};
  gradientCounter = 0;
  rand: any[] = [];
  randBackground: any;
  roundlist: any;
  isGradColorCalled = false;
  dialogRef: MatDialogRef<AddNewRoundDialogComponent>;
  @Input() showMePartially: boolean;
  baseUrl = this._http.baseUrl ;
  dialogConfig = new MatDialogConfig();

  constructor(private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _http?: HttpWrapperService) {
    this.roundlist = [{
        _id : 1 ,
        roundName : 'Round1',
        roundType : 'buzzer',
        category  : [{
          categoryId : 1 ,
          numberOfQuestion : 3,
          points : 5
        }]
      }, {
        _id : 2 ,
        roundName : 'Round2',
        roundType : 'buzzer',
        category  : [{
          categoryId : 1 ,
          numberOfQuestion : 3,
          points : 5
        }]
      }];
    }

    addEditRound(id = 1): void {
      debugger;
      if (id) {
        // this.getRoundById(id).subscribe(response => {
          // this.round = response;
          this.round = this.roundlist[id];
          this.dialogRef = this._dialog.open(AddNewRoundDialogComponent, {
            width: '700px',
            height : 'auto',
            hasBackdrop : false,
            data : this.round
          });
        this.dialogRef.afterClosed().subscribe( data => {
          console.log('Edit Dialog closed');
            // this._http.get(this.baseUrl + '/api/round').subscribe(response => {
            // console.log(response);
            // this.roundlist = response;
            // });
          // });
        });
      } else {
        this.dialogRef = this._dialog.open(AddNewRoundDialogComponent, {
          width : '750px' ,
          height : 'auto' ,
          hasBackdrop : false,
          data : ''
        });
        this.dialogRef.afterClosed().subscribe( data => {
          console.log('Add Dialog closed');
          this._http.get(this.baseUrl + '/api/round').subscribe(response => {
            console.log(response);
            this.roundlist = response;
          });
        });
    }
  }

    // deleteround(id) {
    //   this._http.delete(this.baseUrl + '/api/round/' + id)
    //   .subscribe(response => {
    //     this._http.get(this.baseUrl + '/api/round').subscribe(response => {
    //       console.log(response);
    //       this.roundlist = response;
    //     });
    //     this._snackBar.open('Deleted Round', '' , {
    //       duration: 2000
    //     });
    //   });
    // }

    // getRoundById(id: string): Observable<Response> {
    //   return this._http.get(this.baseUrl + '/api/round/' + id );
    // }

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
      for (let i = 0; i < this.roundlist.length; i++) {
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
