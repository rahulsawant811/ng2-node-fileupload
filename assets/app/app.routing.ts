import { Routes, RouterModule } from "@angular/router";
import { UploadComponent } from './uploads/upload.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/uploads', pathMatch: 'full' },
    { path: 'uploads', component: UploadComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
