import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },

  {
    path: 'users',
    loadChildren: () =>
      import('./modules/user-list/user-list.module').then(
        (p) => p.UserListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
