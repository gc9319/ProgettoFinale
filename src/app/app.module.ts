import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ClientsComponent } from './clients/clients.component';
import { ClientsInfoComponent } from './clients-info/clients-info.component';
import { FattureComponent } from './fatture/fatture.component';
import { ComuniComponent } from './comuni/comuni.component';
import { ProvinceComponent } from './province/province.component';
import { ClientsNewComponent } from './clients-new/clients-new.component';
import { ComuniInfoComponent } from './comuni-info/comuni-info.component';
import { FattureInfoComponent } from './fatture-info/fatture-info.component';
import { ProvinceInfoComponent } from './province-info/province-info.component';
import { FattureNewComponent } from './fatture-new/fatture-new.component';
import { ComuniNewComponent } from './comuni-new/comuni-new.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ClientsComponent,
    ClientsInfoComponent,
    FattureComponent,
    ComuniComponent,
    ProvinceComponent,
    ClientsNewComponent,
    ComuniInfoComponent,
    FattureInfoComponent,
    ProvinceInfoComponent,
    FattureNewComponent,
    ComuniNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppRoutingModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
