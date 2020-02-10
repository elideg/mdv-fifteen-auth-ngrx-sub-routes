import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Shoe } from '@mdv-fifteen/core-data';

@Component({
  selector: 'mdv-fifteen-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.scss']
})
export class ShoesListComponent implements OnInit {

  @Input() shoes: Shoe[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(shoe: Shoe) {
    this.selected.emit(shoe);
  }

  delete(shoe: Shoe) {
    this.deleted.emit(shoe);
  }
}
