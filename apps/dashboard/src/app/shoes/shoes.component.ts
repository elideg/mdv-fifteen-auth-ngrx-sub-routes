import { Shoe } from './../../../../../libs/core-data/src/lib/shoes/shoe';
import { ShoesFacade } from './../../../../../libs/core-state/src/lib/shoes/shoes.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'mdv-fifteen-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {
  form: FormGroup;
  selectedShoe$: Observable<Shoe> = this.shoeFacade.selectedShoe$;
  shoes$: Observable<Shoe[]> = this.shoeFacade.allShoes$;

  constructor(
    private fb: FormBuilder,
    private shoeFacade: ShoesFacade
    ) { }

  ngOnInit() {
    this.initForm();
    this.shoeFacade.loadShoes();
    this.selectShoe({ id: null } as Shoe);
  }

  selectShoe(shoe: Shoe) {
    this.form.patchValue(shoe);
    this.shoeFacade.selectShoe(shoe.id);
  }

  cancel() {
    this.selectShoe({ id: null } as Shoe);
    this.form.reset();
  }

  saveShoe(formDirective: FormGroupDirective) {
    if(this.form.invalid) return;
    if(this.form.value.id) {
      this.shoeFacade.updateShoe(this.form.value);
      this.selectShoe({ id: null } as Shoe);
    } else {
      this.shoeFacade.createShoe(this.form.value);
      this.selectShoe({ id: null } as Shoe);
    }
  }

  deleteShoe(shoe: Shoe) {
    this.shoeFacade.deleteShoe(shoe);
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])],
      coolLevel: ['']
    })
  }

}
