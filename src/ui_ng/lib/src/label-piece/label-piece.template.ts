/**
 * Define template resources for filter component
 */

export const LABEL_PIEICE_TEMPLATE: string = `
<label class="label" [ngStyle]="{'background-color': label.color}">
    <clr-icon *ngIf="label.scope=='p'" shape="organization"></clr-icon>
    <clr-icon *ngIf="label.scope=='g'" shape="administrator"></clr-icon>
     {{label.name}}
</label>
`;

export const LABEL_PIEICE_STYLES: string = `
   .label{border: none; color:#222;padding-top:2px; max-width:140px;}
   .label clr-icon{ margin-right: 3px; display:block;}
   .btn-group .dropdown-menu clr-icon{display:block;}
`;