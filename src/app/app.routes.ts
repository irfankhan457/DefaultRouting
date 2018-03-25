import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarComponent } from './car/car.component';

const routes : Routes = [
    
    {
        path:"**", component: CarComponent
       // path:"car", component: CarComponent    TRY WITH THIS ALSO 
    },
    {
        path:"home", component: HomeComponent
    },
    {
        path:"about", component: AboutComponent
    }
]

export const routing = RouterModule.forRoot(routes);