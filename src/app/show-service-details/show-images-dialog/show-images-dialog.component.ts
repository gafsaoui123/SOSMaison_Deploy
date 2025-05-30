import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileHandle } from 'src/app/_model/file_handle.model';

@Component({
  selector: 'app-show-images-dialog',
  templateUrl: './show-images-dialog.component.html',
  styleUrls: ['./show-images-dialog.component.css']
})
export class ShowImagesDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { images: FileHandle[] },
    private dialogRef: MatDialogRef<ShowImagesDialogComponent>
  ) { }

  ngOnInit(): void {
    if (this.data && this.data.images) {
      console.log('Images reçues:', this.data.images);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
