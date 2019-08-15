import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { OwlModule } from 'ngx-owl-carousel';
import { StarRatingModule } from 'angular-star-rating';
import { environment } from '../environments/environment';

// Angular Modules Import
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Services Import
import { InfoService } from './services/info.service';

// Components Import
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { EducationComponent } from './components/education/education.component';
import { ResearchComponent } from './components/research/research.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AwardsComponent } from './components/awards/awards.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { ProjectComponent } from './components/project/project.component';
import { TravelComponent } from './components/travel/travel.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { CategoryPipe } from './pipes/category.pipe';

// Routes
const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'educations', component: EducationComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'experiences', component: ExperienceComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'volunteer', component: VolunteerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    PortfolioComponent,
    HighlightComponent,
    AboutComponent,
    HeaderComponent,
    EducationComponent,
    ResearchComponent,
    ExperienceComponent,
    AwardsComponent,
    SkillsComponent,
    HobbiesComponent,
    ProjectComponent,
    TravelComponent,
    VolunteerComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule.forRoot(),
    OwlModule,
    StarRatingModule.forRoot()
  ],
  providers: [AngularFireAuth, AngularFireDatabase, InfoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
