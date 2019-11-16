import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './workspace/home/home.module';
import { HeaderModule } from './shared/header/header.module';
import { MobmenuModule } from './shared/mobmenu/mobmenu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule,
    MobmenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
