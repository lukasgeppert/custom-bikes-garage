import { Component, OnInit } from '@angular/core';
import { Builder } from '../builder';
import { BuilderService } from '../_services/builder.service';

@Component({
  selector: 'app-builder-list',
  templateUrl: './builder-list.component.html',
  styleUrls: ['./builder-list.component.scss']
})
export class BuilderListComponent implements OnInit {
  // Using Builder Model class
  builders: Builder[];
  isLoading: Boolean = false;

  constructor(private builderService: BuilderService) { }

  ngOnInit() {
  }

}
