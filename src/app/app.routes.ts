import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart';
import { CatalogoComponent } from './components/catalogo/catalogo';
import { ListAlumnosComponent } from './components/listAlumnos/listAlumnos';

export const routes: Routes = [
    {
        path: '', redirectTo: '/catalog', pathMatch: 'full'
    },
    {
        path: 'cart', component: CartComponent
    },
    {
        path: 'catalog', component: CatalogoComponent
    },
    {
        path: 'alumns', component: ListAlumnosComponent
    }
];
 