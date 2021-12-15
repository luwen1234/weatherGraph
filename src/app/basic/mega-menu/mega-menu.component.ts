import { Component, OnInit } from '@angular/core';
import {MegaMenuItem} from "primeng/api";

@Component({
  selector: 'basic-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.css']
})
export class MegaMenuComponent implements OnInit {

  items: MegaMenuItem[] = new Array();

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Videos', icon: 'pi pi-fw pi-video',
        items: [
          [
            {
              label: 'Video 1',
              items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
            },
            {
              label: 'Video 2',
              items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
            }
          ]
        ]
      },
      {
        label: 'Users', icon: 'pi pi-fw pi-users',
        items: [
          [
            {
              label: 'User 1',
              items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
            },
            {
              label: 'User 2',
              items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
            },
          ]
        ]
      }
    ]
  }
}
