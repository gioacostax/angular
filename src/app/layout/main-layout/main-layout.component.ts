import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast';

@Component({
  imports: [RouterOutlet, Toast, ConfirmDialogModule],
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {}
