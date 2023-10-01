import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './shared/layout/app.layout.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [AppRoutingModule, AppLayoutModule],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
