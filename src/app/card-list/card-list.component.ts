import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCardDialogComponent } from '../create-card-dialog/create-card-dialog.component';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards: any[] = [];

  constructor(private cardService: CardService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.cardService.getAllCards().subscribe(
      cards => {
        this.cards = cards;
      },
      error => {
        console.error('Fehler beim Laden der Karten:', error);
      }
    );
  }

  openCreateCardDialog(): void {
    const dialogRef = this.dialog.open(CreateCardDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
          this.addCard(result);
      }
    });
  }

  addCard(cardData: any): void {
      this.cardService.addCard(cardData).subscribe(
        newCard => {
          console.log('Neue Karte hinzugefügt:', newCard);
        },
        error => {
          console.error('Fehler beim Hinzufügen der Karte:', error);
        }
      );
    }
}
