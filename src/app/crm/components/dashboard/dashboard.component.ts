import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
    items!: MenuItem[];

    products!: Product[];

    subscription!: Subscription;
    date: string;

    constructor(
        private productService: ProductService,
        public layoutService: LayoutService
    ) {}

    ngOnInit() {
        this.productService
            .getProductsSmall()
            .then((data) => (this.products = data));

        this.items = [{ label: 'Clear all', icon: 'pi pi-fw pi-trash' }];
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
