import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CatModifComponent } from './cat-modif/cat-modif.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    DogsComponent,
    CatDetailsComponent,
    CatModifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
