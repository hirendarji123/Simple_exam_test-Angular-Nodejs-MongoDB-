import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QuestionService} from './question.service';
import {StuentauthGuard} from './stuentauth.guard';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import {AdminauthGuard} from './adminauth.guard';
import { LoginComponent } from './login/login.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminworkComponent } from './adminwork/adminwork.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { ShowQuestionComponent } from './show-question/show-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SidebarComponent,
    AddquestionComponent,
    DeleteQuestionComponent,
    
    LoginComponent,
    
    FirstpageComponent,
    
    AdminloginComponent,
    
    AdminworkComponent,
    
    CreatestudentComponent,
    
    DeletestudentComponent,
    
    ShowuserComponent,
    
    ShowQuestionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [QuestionService,StuentauthGuard,AdminauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
