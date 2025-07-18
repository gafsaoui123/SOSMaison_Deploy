import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { TestComponent } from './test/test.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ProvidersComponent } from './providers/providers.component';
import { AboutComponent } from './about/about.component';
import { ShowServiceDetailsComponent } from './show-service-details/show-service-details.component';
import { ProductsResolverService } from './services/products-resolver.service';
import { UserViewDetailsComponent } from './user-view-details/user-view-details.component';
import { UserViewMeComponent } from './user-view-me/user-view-me.component';
import { FooterComponent } from './footer/footer.component';
import { ReserveServiceComponent } from './reserve-service/reserve-service.component';
import { ReserveServiceService } from './services/reserve-service.service';
import { RegisterComponent } from './register/register.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { ChatComponent } from './chat/chat.component';
import { PaymentComponent } from './payment/payment.component';
import { PrestataireComponent } from './prestataire/prestataire.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'addnewproduct', component: AddNewProductComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] },resolve: {
      product: ProductsResolverService,
    } },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
      { path: 'showservice', component: ShowServiceDetailsComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
      { path: 'test', component: TestComponent },
    ]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: { roles: ['User'] },
  },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'test', component: TestComponent },
  {
    path: 'addnewproduct',
    component: AddNewProductComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
    resolve: {
      product: ProductsResolverService,
    },
  },
  { path: 'providers', component: ProvidersComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'userViewMe',
    component: UserViewMeComponent,
    resolve: { product: ProductsResolverService },
  },
  {
    path: 'register',
    component: RegisterComponent,
    
  },{
    path: 'chat',
    component: ChatComponent,
    
  },
  {
    path: 'payment',
    component: PaymentComponent,

  },
  { path: 'prestataire', component: PrestataireComponent },
  {
    path: 'emergency',
    component: EmergencyComponent,
    
  },
  {
    path: 'showservice',
    component: ShowServiceDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'reserveService',
    component: ReserveServiceComponent,
    canActivate: [AuthGuard],
    data: { roles: ['User'] },
    resolve: {
      productDetails: ReserveServiceService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
