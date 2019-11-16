import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UsersModule } from '@app/shared/users/users.module';
import { RegisterModule } from '@app/shared/register/register.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UsersModule,
    RegisterModule
  ]
})
export class HomeModule { }
