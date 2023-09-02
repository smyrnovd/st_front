import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { IMenu } from './api/menuitems';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: IMenu[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/dashboard/documentation'],
                    },
                    {
                        label: 'Athletes',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/dashboard/athletes'],
                    },
                ],
            },
        ];
    }
}
