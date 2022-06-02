import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateUserComponent } from './container/create-user.component';
import { CreateUserRoutingModule } from './create-user.routing.module';

@NgModule({
  declarations: [CreateUserComponent],
  imports: [CommonModule, CreateUserRoutingModule],
})
export class CreateUserModule {}
