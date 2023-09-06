import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AppLayoutComponent } from './shared/layout/app.layout.component';

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
                        import('./pages/landing/landing.module').then(
                            (m) => m.LandingModule
                        ),
                },
                {
                    path: 'auth',
                    loadChildren: () =>
                        import('./pages/auth/auth.module').then(
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
                                    './pages/dashboard/dashboard.module'
                                ).then((m) => m.DashboardModule),
                        },
                        {
                            path: 'documentation',
                            loadChildren: () =>
                                import(
                                    './pages/documentation/documentation.module'
                                ).then((m) => m.DocumentationModule),
                        },
                        {
                            path: 'pages',
                            loadChildren: () =>
                                import('./pages/pages/pages.module').then(
                                    (m) => m.PagesModule
                                ),
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
