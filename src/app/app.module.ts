import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './shared/ui/layout/app.layout.module';
import { NotfoundComponent } from './crm/components/notfound/notfound.component';
import { ProductService } from './crm/service/product.service';
import { CountryService } from './crm/service/country.service';
import { CustomerService } from './crm/service/customer.service';
import { EventService } from './crm/service/event.service';
import { IconService } from './crm/service/icon.service';
import { NodeService } from './crm/service/node.service';
import { PhotoService } from './crm/service/photo.service';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule, ButtonModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService,
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        ProductService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
