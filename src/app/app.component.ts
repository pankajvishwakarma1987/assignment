import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment';
  data:[]=[];
  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];
  dataSource:any;

  
  constructor(private http:HttpClient,public dialog: MatDialog) {}
  ngOnInit() {
    this.getRequest()
  }
	getRequest() {
	  setInterval(() => { 
		return this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story').subscribe((data: any) => {
			if(data && data.hits && data.hits.length>0){
			 this.data = data.hits;
			  this.dataSource = new MatTableDataSource(this.data);
			}
      })
	  }, 10000);		
	}
	applyFilter(filterValue: string) {		
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
  openDialog(data) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '700px',
      data: JSON.stringify(data),
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
