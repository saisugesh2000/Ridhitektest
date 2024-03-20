import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WelcomeRIDHIComponent } from './welcome-ridhi/welcome-ridhi.component';
import { AboutMainComponent } from './about-main/about-main.component';
import { ServicesMainComponent } from './services-main/services-main.component';
import { ContactManinComponent } from './contact-manin/contact-manin.component';
import { PaymentsComponent } from './payments/payments.component';
import { LendingsComponent } from './lendings/lendings.component';
import { CardsComponent } from './cards/cards.component';
import { ApplicatonComponent } from './applicaton/applicaton.component';
import { DigitalizationComponent } from './digitalization/digitalization.component';
import { WavemakerComponent } from './wavemaker/wavemaker.component';



const routes: Routes = [
// Routing Path For Entire Application
{path:'',component:WelcomeRIDHIComponent},
{path:'Aboutus',component:AboutMainComponent},
{path:'Header',component:HeaderComponent},
{path:"Services",component:ServicesMainComponent},
{path:"Contact_Us",component:ContactManinComponent},
{path:"payments",component:PaymentsComponent},
{path:"lendings",component:LendingsComponent},
{path:"cards",component:CardsComponent},
{path:"application",component:ApplicatonComponent},
{path:"digitalization",component:DigitalizationComponent},
{path:"wavemaker",component:WavemakerComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


