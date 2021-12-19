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
        label: '预报', icon: 'pi pi-fw pi-video',
        items: [
          [
            {
              label: '短期 1',
              items: [{label: '测试短期 1.1'}, {label: '测试短期 1.2'}]
            },
            {
              label: '短期 2',
              items: [{label: '测试短期 2.1'}, {label: '测试短期 2.2'}]
            }
          ]
        ]
      },
      {
        label: '产品', icon: 'pi pi-fw pi-users',
        items: [
          [
            {
              label: '产品 1',
              items: [{label: '测试产品 1.1'}, {label: '测试产品 1.2'}]
            },
            {
              label: '产品 2',
              items: [{label: '测试产品 2.1'}, {label: '测试产品 2.2'}]
            },
          ]
        ]
      }
    ]
  }
}
