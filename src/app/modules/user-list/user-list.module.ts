import { CommonModule } from '@angular/common';
import { UserListComponent } from './container/user-list/user-list.component';
import { UserBoxComponent } from './components/user-box/user-box.component';
import { NgModule } from '@angular/core';
import { UserListRoutingModule } from './user-list.routing.module';

@NgModule({
  declarations: [UserListComponent, UserBoxComponent],
  imports: [CommonModule, UserListRoutingModule],
})
export class UserListModule {}
