import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'users',
    loadChildren: () =>
      import('./modules/user-list/user-list.module').then(
        (p) => p.UserListModule
      ),
  },
  {
    path: 'create-user',
    loadChildren: () =>
      import('./modules/create-user/create-user.module').then(
        (p) => p.CreateUserModule
      ),
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((p) => p.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
