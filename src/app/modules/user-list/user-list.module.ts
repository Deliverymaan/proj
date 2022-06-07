import { CommonModule } from '@angular/common';
import { UserListComponent } from './container/user-list/user-list.component';
import { UserBoxComponent } from './components/user-box/user-box.component';
import { NgModule } from '@angular/core';
import { UserListRoutingModule } from './user-list.routing.module';
import { StartUpper } from 'app/shared/pipes/start-upper.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'app/shared/pipes/filter.pipe';

@NgModule({
  declarations: [UserListComponent, UserBoxComponent, StartUpper, FilterPipe],
  imports: [CommonModule, UserListRoutingModule, FormsModule],
})
export class UserListModule {}
