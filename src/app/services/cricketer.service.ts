import { Injectable } from '@angular/core';
import { ICricketList } from 'app/interface/cricketer-list';
import { IPlayerType } from 'app/interface/player-type';
import { CommonFunction } from "app/common";

@Injectable()
export class CricketerService {

  private cricketersList: ICricketList[] = [];

  /** Add cricketer in the array List. */
  addCricketer(cricketerDetail: ICricketList) {
    this.cricketersList.unshift(cricketerDetail);
  };

  /**Get the cricket list from the array. */
  getCricketerList(): ICricketList[] {
    return this.cricketersList;
  };

}
