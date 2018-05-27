import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

// services
import {HttpWrapperService} from './services/http-wrapper.service';
import {AuthService} from './services/authservice.service';
import { AuthGuard } from './services/auth-guard.service';

// Components
import {AppComponent} from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ManageQuizComponent} from './manage-quiz/manage-quiz.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SampleComponent} from './sample/sample.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { CategorySelectComponent } from './category-select/category-select.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamListComponent } from './team-list/team-list.component';
import {QuizSelectComponent} from './quiz-select/quiz-select.component';
import { AddNewCategoryDialogComponent } from './add-new-category-dialog/add-new-category-dialog.component';
import { AddNewTeamDialogComponent, DIALOG_DATA } from './add-new-team-dialog/add-new-team-dialog.component';
import { RoundsComponent } from './rounds/rounds.component';
import { AddNewRoundDialogComponent } from './add-new-round-dialog/add-new-round-dialog.component';
import {CdkTableModule} from '@angular/cdk/table';

// Material Imports
import {MatSelectModule, MatFormField, MatButtonModule, MatCheckboxModule, MatRadioModule,
  MatCardModule, MatExpansionModule, MatIconModule, MatFormFieldModule,
  MatInputModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule , MatDialogModule, MatSnackBarModule
  , MatTableModule , MatChipInputEvent } from '@angular/material';


  @NgModule({
    declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    ManageQuizComponent,
    QuizSelectComponent,
    QuizComponent,
    NotFoundComponent,
    SampleComponent,
    AddQuestionsComponent,
    QuizComponent,
    LoginComponent,
    CategorySelectComponent,
    TeamListComponent,
    AddNewTeamDialogComponent,
    AddNewCategoryDialogComponent,
    RoundsComponent,
    AddNewRoundDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatChipsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatTableModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: '',
      component: RegisterComponent
    },
    {
      path: 'managequiz',
      component : ManageQuizComponent
    }, {
      path: 'home' ,
      component: RegisterComponent
    }, {
      path: 'sample' ,
      component: SampleComponent
    }, {
      path: 'questions' ,
      component: AddQuestionsComponent,
      canActivate: [AuthGuard]
    } ,
    {
      path: 'quiz-select',
      component: QuizSelectComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'login' ,
      component: LoginComponent
    },
    {
      path: 'categories' ,
      component : CategorySelectComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'teams',
      component: TeamListComponent,
      canActivate: [AuthGuard]
    }, {
      path: 'rounds',
      component: RoundsComponent,
      canActivate: [AuthGuard]
    }, {
     path: '**',
      component: NotFoundComponent
    }
    ]),
       ],
    providers: [
    HttpWrapperService,
    AuthGuard,
    AuthService
    ],
    entryComponents: [ AddNewTeamDialogComponent,
      AddNewCategoryDialogComponent,
      AddNewTeamDialogComponent,
      AddNewRoundDialogComponent],
    bootstrap: [AppComponent]
  })

  export class AppModule {
    constructor() {
    }
  }
