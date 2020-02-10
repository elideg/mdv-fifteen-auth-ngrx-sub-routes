import { ShoesItemComponent } from './shoes/shoes-item/shoes-item.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AuthGaurd } from '@mdv-fifteen/core-data';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { LoginComponent } from 'libs/ui-lib/src/lib/login/login.component';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { WildcardComponent } from 'libs/ui-lib/src/lib/wildcard/wildcard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'shoes', canActivate: [AuthGaurd], children: [
    { path: '', component: ShoesComponent },
    { path: ':id', component: ShoesItemComponent }
  ] },
  { path: 'login', component: LoginComponent },
  { path: '404', component: WildcardComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
