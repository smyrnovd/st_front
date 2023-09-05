import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    imports: [CommonModule, AuthRoutingModule],
    declarations: [],
})
export class AuthModule {}
