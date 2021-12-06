import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EvaluatorsComponent }   from './evaluators/evaluators.component';
import { EvaluatorDetailComponent }   from './evaluator-detail/evaluator-detail.component';
import { AboutComponent }      from './about/about.component';
import { PageNotFoundComponent }      from './page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/ens',
		pathMatch: 'full'
	},
	{
		path: 'ens',
		component: EvaluatorsComponent,
		data: {title: "Home | Fugue Foundation"}
	},
	{
		path: 'ens/:id',
		component: EvaluatorDetailComponent,
		data: {title: "Evaluator | Fugue Foundation"}
	},
	{
		path: 'about',
		component: AboutComponent,
		data: {title: "About | Fugue Foundation"}
	},
    {
		path: '**',
		component: PageNotFoundComponent,
		data: {title: "404 | Fugue Foundation"}
	}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}