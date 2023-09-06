import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
    items!: MenuItem[];

    products!: Product[];

    subscription!: Subscription;
    date: string;

    infoBlocks = [
        {
            title: 'Revenue',
            value: '$2.100',
            color_bg: 'bg-orange-100',
            icon: 'pi pi-map-marker',
            color: 'text-orange-500',
            small_num: '%12',
            small_text: 'since last week',
        },
        {
            title: 'Customers',
            value: '28441',
            color_bg: 'bg-cyan-100',
            icon: 'pi pi-inbox',
            color: 'text-cyan-500',
            small_num: '520',
            small_text: 'newly registered',
        },
        {
            title: 'Comments',
            value: '152 Unread',
            color_bg: 'bg-purple-100',
            icon: 'pi pi-comment',
            color: 'text-purple-500',
            small_num: '85',
            small_text: 'responded',
        },
        {
            title: 'Orders',
            value: '44',
            color_bg: 'bg-blue-100',
            icon: 'pi pi-shopping-cart',
            color: 'text-blue-500',
            small_num: '24 new',
            small_text: 'since last visit',
        },
    ];

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
