import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
declare let require: any;
const ENS = require('../../assets/data/ens.json');
const EVALUATORS = require('../../assets/data/evaluators_sample.json');
const ORGS = require('../../assets/data/nonprofits_sample.json');

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const orgs = ORGS;
        const evaluators = EVALUATORS;
        const ens = ENS;
        return {orgs, evaluators, ens};
      }

}
