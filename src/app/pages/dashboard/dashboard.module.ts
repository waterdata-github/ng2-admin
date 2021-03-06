import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { PopularApp } from './popularApp';
import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { UsersMap } from './usersMap';
import { LineChart } from './lineChart';
import { Feed } from './feed';
import { Todo } from './todo';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';
import { FeedService } from './feed/feed.service';
import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TodoService } from './todo/todo.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { UsersMapService } from './usersMap/usersMap.service';
import { HttpModule } from '@angular/http';
import { BayChart } from './bayChart/bayChart.component';
import { LineBayChartComponent } from './lineBayChart/lineBayChart.component';
import { BayChartService } from './bayChart/bayChart.service';
import { LineBayChartService } from './lineBayChart/lineBayChart.service';
import {ScatterBayChartComponent} from "./scatterBayChart/scatterBayChart.component";
import {ScatterBayChartService} from "./scatterBayChart/scatterBayChart.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    HttpModule,
    routing
  ],
  declarations: [
    PopularApp,
    PieChart,
    TrafficChart,
    UsersMap,
    LineChart,
    Feed,
    Todo,
    Calendar,
    Dashboard,
    BayChart,
    LineBayChartComponent,
    ScatterBayChartComponent
  ],
  providers: [
    CalendarService,
    FeedService,
    LineChartService,
    PieChartService,
    TodoService,
    TrafficChartService,
    UsersMapService,
    BayChartService,
    LineBayChartService,
    ScatterBayChartService
  ]
})
export class DashboardModule {}
