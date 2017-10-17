import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';

import { CricketComponent } from './cricket.component';
import { CricketService } from './cricket.service';
import { ServerSocketService } from './server-socket.service';
import { CricketAdminComponent } from './cricket-admin/cricket-admin.component';
import { CricketDashboardComponent } from './cricket-dashboard/cricket-dashboard.component';

const cricketRoutes : Routes = [
  {path : '', component : CricketComponent,  children : [
    {path : 'admin', component : CricketAdminComponent},
    {path : 'dashboard', component : CricketDashboardComponent},
    {path : '', redirectTo : 'dashboard', pathMatch : 'full'}

  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cricketRoutes)
  ],
  declarations: [CricketComponent, CricketAdminComponent, CricketDashboardComponent],
  providers : [ ServerSocketService, CricketService ]
})
export class CricketModule { }
