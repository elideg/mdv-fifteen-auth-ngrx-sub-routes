import { ShoesFacade } from './../../../../../../libs/core-state/src/lib/shoes/shoes.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shoe } from '@mdv-fifteen/core-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdv-fifteen-shoes-item',
  templateUrl: './shoes-item.component.html',
  styleUrls: ['./shoes-item.component.scss']
})
export class ShoesItemComponent implements OnInit {
  shoes$: Observable<Shoe>;

  constructor(
    private route: ActivatedRoute,
    private shoesFacade: ShoesFacade
  ) { }

  ngOnInit() {
    this.shoesFacade.loadShoes();
    this.route.params.subscribe((param) => this.shoesFacade.selectShoe(param['id']));
    this.shoes$ = this.shoesFacade.selectedShoe$
  }

}
