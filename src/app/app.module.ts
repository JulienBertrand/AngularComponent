import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { BindingComponent } from './binding/binding.component';
import { EvenementComponent } from './evenement/evenement.component';
import { VariableComponent } from './variable/variable.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormationItemComponent } from './formation-item/formation-item.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationItemOutputComponent } from './formation-item-output/formation-item-output.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleOnchangeComponent } from './lifecycle-onchange/lifecycle-onchange.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    InterpolateComponent,
    BindingComponent,
    EvenementComponent,
    VariableComponent,
    IfComponent,
    ForComponent,
    NgstyleComponent,
    PipesComponent,
    FormationItemComponent,
    FormationListComponent,
    FormationItemOutputComponent,
    LifecycleComponent,
    LifecycleOnchangeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
