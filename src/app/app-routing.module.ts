import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcstoreComputadorasComponent } from './pcstore-computadoras/pcstore-computadoras.component';
import { PcstoreContactoComponent } from './pcstore-contacto/pcstore-contacto.component';

const routes: Routes = [
    { path: '', redirectTo:'computadoras', pathMatch:'full' },
    { path: 'computadoras', component: PcstoreComputadorasComponent },
    { path: 'contacto', component: PcstoreContactoComponent },
  
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
})
export class AppRoutingModule {}