import { Component, OnInit } from '@angular/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { MyMarker } from '../../classes/marker.class';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material';
import { EditComponent } from './edit.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  markers:MyMarker[]=[]
  lat: number = 6.217;
  lng: number = -75.567;
  
  constructor(public snackBar: MatSnackBar,
              public dialog: MatDialog) { 
    if (localStorage.getItem("marks")){
      this.markers = JSON.parse(localStorage.getItem("marks"))
    }
  }

  ngOnInit() {
  }

  addMark(event){
    const coords = new MyMarker(
      event.coords.lat,
      event.coords.lng
    )
     this.markers.push(coords)
     this.saveStorage()
     this.snackBar.open('Marcador agregado', 'cerrar', {
        duration: 2000
      });
  }

  deleteMark(i:number){
    this.markers.splice(i, 1)
    this.saveStorage()
    this.snackBar.open('Marcador borrado', 'cerrar', {
      duration: 2000
    });
  }

  editMark(myMarker:MyMarker){
    const dialogRef = this.dialog.open(EditComponent, {
      width: '250px',
      data: { title: myMarker.title, description: myMarker.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (!result){
        return
      }
      myMarker.title = result.title
      myMarker.description = result.description

      this.saveStorage()

      this.snackBar.open('Marcador actualizado', 'cerrar', {
        duration: 2000
      });
    });
  }

  saveStorage(){
    localStorage.setItem('marks', JSON.stringify(this.markers))
  }
}
