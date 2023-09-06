import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './crm/components/notfound/notfound.component';
import { AppLayoutComponent } from './shared/ui/layout/app.layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                // {
                //     path: '',
                //     redirectTo: 'landing',
                //     pathMatch: 'full',
                // },
                {
                    path: '',
                    loadChildren: () =>
                        import('./crm/components/landing/landing.module').then(
                            (m) => m.LandingModule
                        ),
                },
                {
                    path: 'auth',
                    loadChildren: () =>
                        import('./crm/components/auth/auth.module').then(
                            (m) => m.AuthModule
                        ),
                },

                {
                    path: 'dashboard',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import(
                                    './crm/components/dashboard/dashboard.module'
                                ).then((m) => m.DashboardModule),
                        },
                        {
                            path: 'documentation',
                            loadChildren: () =>
                                import(
                                    './crm/components/documentation/documentation.module'
                                ).then((m) => m.DocumentationModule),
                        },
                        {
                            path: 'pages',
                            loadChildren: () =>
                                import(
                                    './crm/components/pages/pages.module'
                                ).then((m) => m.PagesModule),
                        },
                    ],
                },

                { path: 'notfound', component: NotfoundComponent },
                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
