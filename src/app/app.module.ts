import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaPcComponent } from './lista-pc/lista-pc.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { FormsModule } from '@angular/forms';
import { PcstoreContactoComponent } from './pcstore-contacto/pcstore-contacto.component';
import { PcstoreComputadorasComponent } from './pcstore-computadoras/pcstore-computadoras.component';
import { InputNumeroComponent } from './input-numero/input-numero.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPcComponent,
    PcstoreContactoComponent,
    CarritoComprasComponent,
    PcstoreComputadorasComponent,
    InputNumeroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
