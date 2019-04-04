import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';
import { ProjectService } from './project.service';



@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    WorkDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
