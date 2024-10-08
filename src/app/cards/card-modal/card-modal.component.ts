import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CardService} from '../../services/card.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Card} from '../../models/card';
import {any} from 'codelyzer/util/function';
import {SnackbarService} from '../../services/snackbar.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

  cardForm!: FormGroup;

  showSpinner: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<CardModalComponent>,
    private formBuilder: FormBuilder,
    private cardService: CardService,
    private snackBar: MatSnackBar,
    private snackbarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: Card,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.cardForm = this.formBuilder.group({
      name: [this.data?.name || '', Validators.maxLength(50)],
      title: [this.data?.title || '', [Validators.required, Validators.maxLength(255)]],
      phone: [this.data?.phone || '', [Validators.required, Validators.maxLength(20)]],
      email: [this.data?.email || '', [Validators.email, Validators.maxLength(50)]],
      address: [this.data?.address || '',  Validators.maxLength(255)],
    });
  }

  addCard(): void {
    this.showSpinner = true;
    this.cardService.addCard(this.cardForm.value).subscribe((res: any) => {
      this.getSuccess(res || 'Card Created');
    }, (err: any) => {
      this.getError(err.message || 'Error Occured when Creating Card');
    });
  }

  updateCard(): void{
    this.showSpinner = true;
    this.cardService.updateCard(this.cardForm.value, this.data.id)
      .subscribe((res: any) => {
        this.getSuccess(res || 'Card Updated');
        }, (err: any) => {
          this.getError(err.message || 'Error Occured when Updating Card');
        }

        );
  }

  deleteCard(): void {
    this.showSpinner = true;
    this.cardService.deleteCard(this.cardForm.value)
      .subscribe((res: any) => {
        this.getSuccess(res || 'Card Deleted');
    }, (err: any) => {
        this.getError(err.message || 'Error Occured when Deleting Card');
      });
  }


  getSuccess(message: string): void{
    this.snackbarService.createSnackBar('success', message);
    this.cardService.getCard();
    this.showSpinner = false;
    this.dialogRef.close();
  }



  getError(message: string): void{
    this.snackbarService.createSnackBar('error', message);
    this.showSpinner = false;
  }

}
