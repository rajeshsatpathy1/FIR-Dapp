import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlaceFIRComponent } from './components/place-fir/place-fir.component';
import { TrackFIRComponent } from './components/track-fir/track-fir.component';
import { OfficerComponent } from './components/officer/officer.component';
import { AdminComponent } from './components/admin/admin.component';
import { ApproveComponent } from './components/approve/approve.component';
import { OfficerDashboardComponent } from './components/officer-dashboard/officer-dashboard.component';
import { StationComponent } from './components/station/station.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'place-fir', component: PlaceFIRComponent },
  { path: 'track-fir', component: TrackFIRComponent },
  { path: 'officer', component: OfficerComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'approve', component: ApproveComponent },
  { path: 'officer-dashboard', component: OfficerDashboardComponent },
  { path: 'station', component: StationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
