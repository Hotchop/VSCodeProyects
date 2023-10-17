import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'new-account',component:SignInComponent},
  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
