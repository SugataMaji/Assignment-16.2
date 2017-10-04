import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CricketerService } from 'app/services/cricketer.service';
import { ICricketList } from './../interface/cricketer-list';

@Component({
  selector: 'app-cricketer-detail',
  templateUrl: './cricketer-detail.component.html',
  styleUrls: ['./cricketer-detail.component.css']
})

export class CricketerDetailComponent implements OnInit, OnDestroy {

  id: number;
  firstName: string;
  private sub: any;
  criketerDetail: ICricketList[];

  constructor(private route: ActivatedRoute, private _cricketService: CricketerService) { }

  ngOnInit() {
    this.criketerDetail = this._cricketService.getCricketerList();
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
