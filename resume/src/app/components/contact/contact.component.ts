import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfoService } from '../../services/info.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: any[];
  name: string;
  email: string;
  subject: string;
  message: string;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public firebase: AngularFireDatabase,
    public infoService: InfoService
  ) {}

  ngOnInit() {
    this.infoService
      .getContacts()
      .valueChanges()
      .subscribe(contacts => {
        this.contacts = contacts;
      });
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  processForm() {
    const { name, email, subject, message } = this.form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Subject: ${subject}</div>
      <div>Message: ${message}</div>
    `;
    const formRequest = { name, email, subject, message, date, html };
    this.firebase.list('/messages').push(formRequest);
    this.form.reset();
  }
}
