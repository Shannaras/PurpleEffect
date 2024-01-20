import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonationComponent } from './components/donation/donation.component';
import { JoinComponent } from './components/join/join.component';

const routes: Routes = [
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'donation', component:DonationComponent},
  {path: 'join', component:JoinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
