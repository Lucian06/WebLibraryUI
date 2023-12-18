import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BookPageComponent } from './book-page/book-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'book/:id',
        component: BookPageComponent
    }
];
