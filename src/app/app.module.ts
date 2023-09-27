import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './shared/layout/app.layout.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductService } from './shared/service/product.service';
import { CountryService } from './shared/service/country.service';
import { AthleteService } from './shared/service/athlete.service';
import { EventService } from './shared/service/event.service';
import { IconService } from './shared/service/icon.service';
import { NodeService } from './shared/service/node.service';
import { PhotoService } from './shared/service/photo.service';
import { ButtonModule } from 'primeng/button';
import { PaymentService } from './shared/service/payment.service';

@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [AppRoutingModule, AppLayoutModule, ButtonModule],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    CountryService,
    AthleteService,
    EventService,
    IconService,
    NodeService,
    PhotoService,
    ProductService,
    PaymentService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
