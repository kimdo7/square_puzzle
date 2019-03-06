import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials';
import { HttpService } from './service/http.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/client/home/home.component';
import { PlayComponent } from './component/client/play/play.component';
import { GameComponent } from './component/client/game/game.component';
import { LoginComponent } from './component/client/login/login.component';
import {
    SocialLoginModule,
    AuthServiceConfig,
} from "angular-6-social-login";
import { getAuthServiceConfigs } from './service/socialloginConfig';
import { AdminComponent } from './component/admin/admin.component';
import { GameListComponent } from './component/admin/game-list/game-list.component';
import { GameDetailComponent } from './component/admin/game-detail/game-detail.component';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PlayComponent,
        GameComponent,
        LoginComponent,
        AdminComponent,
        GameListComponent,
        GameDetailComponent,
        AdminLoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        SocialLoginModule
    ],
    providers: [
        HttpService,
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }