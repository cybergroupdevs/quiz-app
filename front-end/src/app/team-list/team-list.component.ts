import { Component, OnInit , Input } from '@angular/core';
import { MatDialog , MatDialogRef } from '@angular/material';
import {AddNewTeamDialogComponent} from '../add-new-team-dialog/add-new-team-dialog.component';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
debugger;
color: string;

  participent =  [{
    id : 1 ,
    name : 'Astha'
  }, {
    id: 2 ,
    name : 'Akshita'
  }, {
    id: 3 ,
    name: 'Ashish'
  }];

  name: string ;
  gradientCounter = 0;
  rand: any[] = [];
  randBackground: any;
  roundlist: any;
  isGradColorCalled = false;

  teamList = [{
  id: 1,
  name: 'Team 1',
  member: ['Neha' , 'Surya' , 'Nisha']
  }, {
  id: 2,
  name: 'Team 2',
  member: ['Sonali' , 'Bhavna' , 'Neha']
  }, {
    id: 3,
    name: 'Team 3',
    member: ['Lagnesh', 'Vishal' , 'Neha']
  }];

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  dialogRef: MatDialogRef<AddNewTeamDialogComponent>;

  teamPopUp(teamId?) {
    this.dialogRef = this.dialog.open(AddNewTeamDialogComponent, {
        width: '500px',
        data : this.participent,
        hasBackdrop: false
    });

    this.dialogRef.afterClosed().subscribe(results => {
      console.log('Dialog Closed!');
    });
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
    for (let i = 0; i < this.teamList.length; i++) {
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
