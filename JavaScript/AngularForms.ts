// Create a deep copy of a Form Group
function deepFormGroupCopy(form: FormGroup): FormGroup{
  let newForm = new FormGroup({});
  form.fields.forEach(field =>{
    newForm.controls[field.name] = new FormControl('');
  });

  newForm.setValue(form.value);

  return newForm;
}