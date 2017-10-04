import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './cricketer-app.component';
import { CricketersListComponent } from './cricketers/cricketers-list.component';
import { MyHighlighterDirective } from 'app/directive/my-highlighter.directive';
import { CriketerDropDownService } from 'app/services/criketer-drop-down.service';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { CricketerComponent } from 'app/cricketer/cricketer.component';
import { appRouting } from 'app/routes/cricket-app.routes';
import { CricketerService } from 'app/services/cricketer.service';
import { CricketerDetailComponent } from './cricketer-detail/cricketer-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardComponent } from './routes/auth-guard';
import { UnsavedchangesGuardService } from 'app/routes/unsavedchanges-guard';
import { PlayerTypeResolveService } from 'app/routes/playertype.resolve.service';
import {LoginService} from './login/login.service';

import { UCasePipe } from './ucase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CricketersListComponent,
    CricketerComponent,
    MyHighlighterDirective,
    SearchPipe,
    OrderByPipe,
    CricketerDetailComponent,
    PageNotFoundComponent,
    LoginComponent,
    UCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    appRouting
  ],
  providers: [CriketerDropDownService, 
              CricketerService, 
              AuthGuardComponent, 
              UnsavedchangesGuardService, 
              PlayerTypeResolveService,
              LoginService],
  bootstrap: [AppComponent]
})

export class AppModule { }
