import { Routes, RouterModule } from "@angular/router";
import { AdminGuard } from './admin-guard';
import { SignupComponent } from "../admin/signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";

const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];
 
export const authRouting = RouterModule.forChild(AUTH_ROUTES); 