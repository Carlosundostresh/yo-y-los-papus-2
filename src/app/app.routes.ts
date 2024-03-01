import { Routes } from '@angular/router';
import { from } from 'rxjs';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { TercerDiaComponent } from './tercer-dia/tercer-dia.component';
import { ProyectoPapuComponent } from './proyecto-papu/proyecto-papu.component';

export const routes: Routes = [
    {
        path: '',
        component: PrimerDiaComponent
    },
    {
        path: 'primer-dia',
        component:PrimerDiaComponent
    },
    {
        path: 'segundo-dia',
        component:SegundoDiaComponent
    },
    {
        path: 'tercer-dia',
        component:TercerDiaComponent
    },
    {
        path: 'cuarto-dia',
        component:ProyectoPapuComponent
    },
    {
        path: '**',
        component: PrimerDiaComponent
    }
];
