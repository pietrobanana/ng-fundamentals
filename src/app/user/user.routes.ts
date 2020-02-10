import { ProfileComponent } from "./profile.component";   //lazy load module.
import { LoginComponent } from "./login.component";




export const userRoutes = [
    {path: 'profile', component: ProfileComponent},   //user/profile.
    {path: 'login', component: LoginComponent}
]