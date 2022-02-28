import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';


@Component({
  selector: 'app-maskt',
  templateUrl: './maskt.component.html',
  styleUrls: ['./maskt.component.scss']
})
export class MasktComponent implements OnInit {

  ipAddressMask = createMask({ alias: 'ip' });
  emailInputMask = createMask({ alias: 'email' });
  ipFC = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
