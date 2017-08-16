import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { UploadComponent } from "./uploads/upload.component";

import { FileuploadService } from "./services/fileupload.service";

@NgModule({
    declarations: [
        AppComponent,
        UploadComponent
    ],
    imports: [BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    bootstrap: [AppComponent],
    providers: [FileuploadService]
})
export class AppModule {

}
