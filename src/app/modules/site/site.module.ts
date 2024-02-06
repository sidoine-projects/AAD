import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ApropoComponent } from './apropo/apropo.component';
import { ServicesComponent } from './services/services.component';
import { PacksComponent } from './packs/packs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FaqComponent } from './faq/faq.component';


const routesSite: Routes = [

  {path: 'a-propos', component:ApropoComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'packs', component:PacksComponent},
  {path: 'blogs', component:BlogsComponent},
  {path: 'faq', component:FaqComponent},

  {path: 'actualites', component: ActualitesComponent},
  {path: 'appointment', component: AppointmentComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    ApropoComponent,
    ServicesComponent,
    PacksComponent,
    BlogsComponent,
    ActualitesComponent,
    AppointmentComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesSite)
  ]
})
export class SiteModule { }
