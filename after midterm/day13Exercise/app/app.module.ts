import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DumbComponent } from './dumb.component';
import { SmartComponent } from './smart.component';
import { IsVisibleDirective } from './is-visible.directive';
import { MakeBiggerDirective } from './make-bigger.directive';
import { MultiPipePipe } from './multi-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,DumbComponent, SmartComponent, IsVisibleDirective, MakeBiggerDirective, MultiPipePipe
 
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
