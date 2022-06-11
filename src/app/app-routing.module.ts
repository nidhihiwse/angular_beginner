import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '', redirectTo: 'contactus', pathMatch: 'full'},
  {path: 'contactus', component: ContactusComponent},
  // {path: '**', component: PagenotfoundComponent}
  {path: 'company', loadChildren: ()=> import('../app/company/company.module').then(m=>m.CompanyModule)},
  {path: 'person', loadChildren: ()=> import('../app/person/person.module').then(m=>m.PersonModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
