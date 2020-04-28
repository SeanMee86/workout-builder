export const buildFormFields = (fieldsState) => {
    let formFields = [];

    for(let field in fieldsState){
        const firstLetter = field.charAt(0).toUpperCase();
        const newLabel = firstLetter + field.slice(1, field.length);
        formFields.push({
            label: newLabel,
            type: fieldsState[field].type,
            value: fieldsState[field].value
        })
    }

    return formFields;
}