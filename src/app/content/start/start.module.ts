import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UtilsModule } from '@app/blocks/utils';

import { StartRoutingModule } from './start-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [UtilsModule, StartRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StartModule {}
