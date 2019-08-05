import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule,MatCardModule,MatButtonModule, MatCheckboxModule, MatToolbarModule ,MatSidenavModule,MatIconModule,MatListModule,MatTableModule,MatFormFieldModule,MatInputModule} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	HttpClientModule,
	MatDialogModule,
	MatCardModule,
	MatButtonModule,
	MatCheckboxModule,
	MatToolbarModule,
	MatSidenavModule,
	MatIconModule,MatListModule,
	MatTableModule,MatFormFieldModule,MatInputModule
  ],
  providers: [],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
