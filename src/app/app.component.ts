import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    accountForm!: UntypedFormGroup
    constructor(private fb: UntypedFormBuilder) {
        this.accountForm = this.fb.group({ 'gender': ['indetermined'] });
    }
}
