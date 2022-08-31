import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ClubDashboardComponent } from './components/club-dashboard/club-dashboard.component';
import { RouterModule } from '@angular/router';
import { CardModule } from "primeng/card";
import { HttpClient } from "@angular/common/http";
import { ButtonModule } from "primeng/button";
import { StepsModule } from "primeng/steps";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TableModule } from "primeng/table";
import { FormsModule } from "@angular/forms";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { TooltipModule } from "primeng/tooltip";
import { FileUploadModule } from "primeng/fileupload";
import { HttpClientModule } from "@angular/common/http";
import { CheckboxModule } from "primeng/checkbox";
import { CalendarModule } from "primeng/calendar";
import { RadioButtonModule } from "primeng/radiobutton";
import { DialogModule } from "primeng/dialog";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ProgressSpinnerModule } from "primeng/progressspinner";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    ClubDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "login", component: LoginComponent }
    ]),
    ButtonModule,
    StepsModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    InputTextareaModule,
    TableModule,
    FormsModule,
    TooltipModule,
    FileUploadModule,
    HttpClientModule,
    CheckboxModule,
    CalendarModule,
    RadioButtonModule,
    DialogModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
