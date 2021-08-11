import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberDetailComponent } from './member-detail/member-detail.component';

const routes: Routes = [
  {path: 'member-detail/:id', component: MemberDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ MemberDetailComponent, ]
