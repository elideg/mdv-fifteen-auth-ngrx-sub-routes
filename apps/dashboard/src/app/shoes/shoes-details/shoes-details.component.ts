import { Shoe } from './../../../../../../libs/core-data/src/lib/shoes/shoe';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'mdv-fifteen-shoes-details',
  templateUrl: './shoes-details.component.html',
  styleUrls: ['./shoes-details.component.scss']
})
export class ShoesDetailsComponent implements OnInit {
  originalTitle;
  currentShoe: Shoe

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() form: FormGroup;
  @Input() set shoe(value) {
    if (value) this.originalTitle = value.title;
      this.currentShoe = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(shoe: Shoe) {
    this.saved.emit(shoe);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective)
    formDirective.resetForm()
  }
}
