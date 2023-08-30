import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MyProfilePageComponent } from './components/my-profile-page/my-profile-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { UploadTorrentPageComponent } from './components/upload-torrent-page/upload-torrent-page.component';
import { ProfileNavComponent } from './components/profile-nav/profile-nav.component';



@NgModule({
    declarations: [
        MyProfilePageComponent,
        SettingsPageComponent,
        UploadTorrentPageComponent,
        ProfileNavComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class ProfileModule { }
