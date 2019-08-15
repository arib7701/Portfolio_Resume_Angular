import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Http } from '@angular/http';

// Models Import
import { Contact } from '../models/contact';
import { Portfolio } from '../models/portfolio';
import { Education } from '../models/education';
import { Research } from '../models/research';
import { Experience } from '../models/experience';
import { Award } from '../models/award';
import { Skill } from '../models/skill';
import { Highlight } from '../models/highlight';
import { Hobbie } from '../models/hobbie';
import { Project } from '../models/project';
import { Volunteer } from '../models/volunteer';
import { Social } from '../models/social';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  contacts: AngularFireList<any[]>;
  portfolios: AngularFireList<any[]>;
  educations: AngularFireList<any[]>;
  researchs: AngularFireList<any[]>;
  experiences: AngularFireList<any[]>;
  highlights: AngularFireList<any[]>;
  awards: AngularFireList<any[]>;
  skills: AngularFireList<any[]>;
  hobbies: AngularFireList<any[]>;
  volunteers: AngularFireList<any[]>;
  projects: AngularFireList<any[]>;
  socials: AngularFireList<any[]>;

  constructor(private http: Http, public firebase: AngularFireDatabase) {}

  getContacts() {
    this.contacts = this.firebase.list('/contacts') as AngularFireList<
      Contact[]
    >;
    return this.contacts;
  }

  getPortfolios() {
    this.portfolios = this.firebase.list('/portfolio') as AngularFireList<
      Portfolio[]
    >;
    return this.portfolios;
  }

  getHighlights() {
    this.highlights = this.firebase.list('/highlights') as AngularFireList<
      Highlight[]
    >;
    return this.highlights;
  }

  getEducations() {
    this.educations = this.firebase.list('/education') as AngularFireList<
      Education[]
    >;
    return this.educations;
  }

  getResearchs() {
    this.researchs = this.firebase.list('/research') as AngularFireList<
      Research[]
    >;
    return this.researchs;
  }

  getExperiences() {
    this.experiences = this.firebase.list('/experience', ref =>
      ref.orderByChild('start')
    ) as AngularFireList<Experience[]>;
    return this.experiences;
  }

  getAwards() {
    this.awards = this.firebase.list('/awards') as AngularFireList<Award[]>;
    return this.awards;
  }

  getSkills() {
    this.skills = this.firebase.list('/skills') as AngularFireList<Skill[]>;
    return this.skills;
  }

  getHobbies() {
    this.hobbies = this.firebase.list('/hobbies') as AngularFireList<Hobbie[]>;
    return this.hobbies;
  }

  getProjects() {
    this.projects = this.firebase.list('/projects') as AngularFireList<
      Project[]
    >;
    return this.projects;
  }

  getVolunteers() {
    this.volunteers = this.firebase.list('/volunteers') as AngularFireList<
      Volunteer[]
    >;
    return this.volunteers;
  }

  getSocials() {
    this.socials = this.firebase.list('/socials') as AngularFireList<Social[]>;
    return this.socials;
  }
}
