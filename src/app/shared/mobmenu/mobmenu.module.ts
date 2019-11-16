import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobmenuComponent } from './mobmenu.component';



@NgModule({
  declarations: [MobmenuComponent],
  imports: [
    CommonModule
  ],
  exports: [MobmenuComponent]
})
export class MobmenuModule { }
