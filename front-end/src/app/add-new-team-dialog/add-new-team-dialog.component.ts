import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm, FormArray} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');

@Component({
  selector: 'app-add-new-team-dialog',
  templateUrl: './add-new-team-dialog.component.html',
  styleUrls: ['./add-new-team-dialog.component.scss']
})
export class AddNewTeamDialogComponent implements OnInit {

  firstFormGroup: FormGroup ;
  participents: any = [];
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];


  constructor(private _fb: FormBuilder ,
              public dialogRef: MatDialogRef<AddNewTeamDialogComponent>,
              @Inject(MAT_DIALOG_DATA) _participent: any) {
                this.participents = _participent;
              }

  ngOnInit() {
    this.firstFormGroup = this._fb.group({
      teamName : ['', [Validators.required]] ,
      members : this._fb.array([ new FormControl()]) ,
      password : [, [Validators.required]]
  });
  }

  get members() {
    return this.firstFormGroup.get('members') as FormArray;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.members.push(new FormControl(value.trim()));
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  getNonNullMembers() {
    return this.members.controls.filter((member) => member.value !== null);
  }


  remove(participent: any): void {
    const index = this.members.controls.indexOf(participent);
    if (index >= 0) {
      this.members.controls.splice(index, 1);
    }
  }

  submit() {
    const name = this.firstFormGroup.controls.teamName.value ;
    const teamMember = this.firstFormGroup.controls.members.value;
    const pwd = this.firstFormGroup.controls.password.value;
    console.log(name + ' ' + teamMember + ' ' + pwd);
    // Need to access service once created by node team
  }
}
