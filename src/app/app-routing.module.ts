import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateViaAuthGuard } from './login/guards/can-activate-via-auth.guard';

import { ListComponent } from './activities/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
