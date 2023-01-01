import { FormGroup } from "@angular/forms";

export function UserExistsValidator(controlName: string, list:any) {
    return async (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      if (
        control.errors &&
        !control.errors["userExistsValidator"]
      ) {
        return;
      }
    //   console.log(control.value)
      if (await list.includes(control.value.toLowerCase())) {
        control.setErrors({ userExistsValidator: true });
      } else {
        control.setErrors(null);
      }
    };
  }
