import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { JoinComponent } from './components/join/join.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonationComponent } from './components/donation/donation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    JoinComponent,
    ContactComponent,
    DonationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
