import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from './material.module';

//Components
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { EditComponent } from './components/map/edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EditComponent
  ],
  entryComponents:[EditComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkMvvWUnjCnU5yKhLCWz6yRUJNPoyPO6c'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
