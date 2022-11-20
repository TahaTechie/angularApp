import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './MyComponents/display/display.component';
import { EraseComponent } from './MyComponents/erase/erase.component';
import { InputComponent } from './MyComponents/input/input.component';


const appRoutes: Routes=[
  {path:"input",component:InputComponent},
  {path:"display",component:DisplayComponent},
  {path:"erase",component:EraseComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    EraseComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
