import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

//TODO: Definir las ruta/s que correspondan
const routes: Routes = [
{ path: 'login', component: LoginPageComponent },
{ path: 'main', 
loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
canActivate: [AuthGuard] },
{ path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
