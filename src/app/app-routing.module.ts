import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';

const routes: Routes = [{ path: 'work', component: WorkComponent },
{ path: 'workDetail/:id', component: WorkDetailComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: '', redirectTo: '/work', pathMatch: 'full' },
{ path: 'work/:project', component: WorkDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
