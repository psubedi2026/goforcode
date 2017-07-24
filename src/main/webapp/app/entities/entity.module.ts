import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipprojRegionMySuffixModule } from './region/region-my-suffix.module';
import { JhipprojCountryMySuffixModule } from './country/country-my-suffix.module';
import { JhipprojLocationMySuffixModule } from './location/location-my-suffix.module';
import { JhipprojDepartmentMySuffixModule } from './department/department-my-suffix.module';
import { JhipprojTaskMySuffixModule } from './task/task-my-suffix.module';
import { JhipprojEmployeeMySuffixModule } from './employee/employee-my-suffix.module';
import { JhipprojJobMySuffixModule } from './job/job-my-suffix.module';
import { JhipprojJobHistoryMySuffixModule } from './job-history/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipprojRegionMySuffixModule,
        JhipprojCountryMySuffixModule,
        JhipprojLocationMySuffixModule,
        JhipprojDepartmentMySuffixModule,
        JhipprojTaskMySuffixModule,
        JhipprojEmployeeMySuffixModule,
        JhipprojJobMySuffixModule,
        JhipprojJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipprojEntityModule {}
