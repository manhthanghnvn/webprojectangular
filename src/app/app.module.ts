import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { HeaderComponent } from './header/header.component';
import { MonLeComponent } from './mon-le/mon-le.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from "@angular/router";
import { MonMoiComponent } from './mon-moi/mon-moi.component';
import { MonBurgerComponent } from './mon-burger/mon-burger.component';
import { MonComboComponent } from './mon-combo/mon-combo.component';
import { MonGaranComponent } from './mon-garan/mon-garan.component';
import { MonComvuaComponent } from './mon-comvua/mon-comvua.component';
import { MonAnkemComponent } from './mon-ankem/mon-ankem.component';
import { ThucUongComponent } from './thuc-uong/thuc-uong.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';


const appRoutes: Routes = [
  {path:"",component:HomeComponent},
  {path:"mon-le",component:MonLeComponent},
  {path:"mon-burger",component:MonBurgerComponent},
  {path:"mon-ankem",component:MonAnkemComponent},
  {path:"mon-moi",component:MonMoiComponent},
  {path:"thuc-uong",component:ThucUongComponent},
  {path:"mon-garan",component:MonGaranComponent},
  {path:"mon-comvua",component:MonComvuaComponent},
  {path:"mon-combo",component:MonComboComponent},
  {path:"productdetail",component:ProductdetailComponent}

  ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainmenuComponent,
    HeaderComponent,
    MonLeComponent,
    FooterComponent,
    MonMoiComponent,
    MonBurgerComponent,
    MonComboComponent,
    MonGaranComponent,
    MonComvuaComponent,
    MonAnkemComponent,
    ThucUongComponent,
    ProductdetailComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
