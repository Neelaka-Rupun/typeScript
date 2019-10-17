export class LikeComponent {
  constructor(private _likeCount: number, private _isSelected: boolean) {}

  get likeCount(){
      return this._likeCount
  }
  get isSelected(){
      return this._isSelected
  }
  onClick(){
    this._likeCount += (this._isSelected) ?  -1 : +1 ;
    this._isSelected =!this._isSelected;
  }
}
