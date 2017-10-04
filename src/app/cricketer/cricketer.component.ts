import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ICricketList } from 'app/interface/cricketer-list';
import { CricketerService } from 'app/services/cricketer.service';
import { IPlayerType } from 'app/interface/player-type';
import { CriketerDropDownService } from 'app/services/criketer-drop-down.service';
import { CommonFunction } from 'app/common';
import { Router, ActivatedRoute } from '@angular/router';

declare const alertify: any;

@Component({
  selector: 'app-cricketer',
  templateUrl: './cricketer.component.html',
  styleUrls: ['./cricketer.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class CricketerComponent implements OnInit {

  /**Public variable */
  cricketersArray: ICricketList[] = [];
  playerType: IPlayerType[] = [];
  title: string;
  private searchData: string;
  cricketerModel: ICricketList;
  cricketerDetail: ICricketList;

  /** Using constructor, call the cricketService.
     this shorthand syntax automatically creates and
    initializes a new private member in the class */
  constructor(private route: ActivatedRoute,
    private _cricketService: CricketerService, private _cricketerDropDown: CriketerDropDownService, private _router: Router) { }

  ngOnInit() {
    this.cricketModel();
    this.route.data.forEach((data: any) => {
      this.title = data.message;
      this.playerType = data.playerType;
    });
  }

  cricketModel() {
    /**Define default values */
    return this.cricketerModel = {
      firstName: '',
      lastName: '',
      favShot: '',
      playerType: '',
      yearlyIncome: null,
      dob: new CommonFunction().getCurrentDate()
    };
  };

  /**Add a cricket */
  addCriketer(values) {
    // values : {
    //   favShot: ""
    //   firstName: ""
    //   lastName: ""
    //   playerType: "",
    //   yearlyIncome: ""
    // }
    this.cricketerDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      favShot: values.favShot,
      playerType: values.playerType,
      yearlyIncome: values.YearlyIncome,
      dob: values.Dob
    };

    /**Call function from service. */
    this._cricketService.addCricketer(this.cricketerDetail);

    /**Using 3rd party library to show message. */
    alertify.notify('Cricketer Added Successfully', 'success', 3);

    /**Redirecting page to cricketersList */
    this._router.navigate(['/cricketersList']);
  };

  canDeactivate() {
    if (this.cricketerModel.firstName !== '') {
      return window.confirm('Do you really want to navigate?');
    }
    return true;
  }
}
