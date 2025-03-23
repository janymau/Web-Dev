import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product.details/product.details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'detail/:id', component: ProductDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
