import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AuthRoutingModule.declarations],
  imports: [SharedModule, AuthRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
