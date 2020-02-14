import React from 'react'

import ComboBox from './TextBoxComboBox'

const FormComponents = ({ OptComponent, initializeValue, totalComponent, countComponent }) => {

    if(OptComponent.type==='CheckBox') {
        // console.log('CheckBox');
        const objActiveGroup = JSON.parse(localStorage.getItem('ActiveGroup'));
        if(objActiveGroup) {
            // console.log('objActiveGroup');
            if(objActiveGroup.category===OptComponent.category) {
                // console.log('objActiveGroup.category===OptComponent.category', objActiveGroup.caption, OptComponent.caption);
                if(objActiveGroup.caption!==OptComponent.caption) {
                    // console.log('objActiveGroup.caption!==OptComponent.caption');
                    const ActiveGroup = {
                            type: 'CheckBox',
                            category: OptComponent.category,
                            caption: OptComponent.caption,
                            count: objActiveGroup.count+1
                    };

                    localStorage.setItem('ActiveGroup', JSON.stringify(ActiveGroup))
                }
            } else {
                // console.log('objActiveGroup.category===OptComponent.category->else', OptComponent);
                localStorage.removeItem('ActiveGroup')
            }
        } else {
            // console.log('objActiveGroup->else', OptComponent);
            const ActiveGroup = {
                    type: 'CheckBox',
                    category: OptComponent.category,
                    caption: OptComponent.caption,
                    count: 1
            };

            localStorage.setItem('ActiveGroup', JSON.stringify(ActiveGroup));				
        }
    } else {
        localStorage.removeItem('ActiveGroup')
    }



    const objActiveGroup1 = JSON.parse(localStorage.getItem('ActiveGroup'));
    // console.log('objActiveGroup1', objActiveGroup1);
    if(objActiveGroup1) {
        if(objActiveGroup1.type==='CheckBox' && objActiveGroup1.count===1) {
            return (
                <div className="mb-1">
                    <h5>{objActiveGroup1.category}</h5>
                    {this.renderFormComponent(OptComponent, initializeValue)}
                </div>				
            );
        }

        if(objActiveGroup1.type==='CheckBox' && objActiveGroup1.count>1) {
            // console.log('objActiveGroup1', OptComponent);
            return (
                <div className="mb-1">
                    {this.renderFormComponent(OptComponent, initializeValue)}
                </div>
            );
        }	
    }



    if(totalComponent===countComponent) {
        // console.log('totalComponent===countComponent');
        localStorage.removeItem('ActiveGroup')
    }

    return (
        <div className="form-group">
            {renderFormComponent(OptComponent, initializeValue)}
        </div>
    )
}
export default FormComponents

const renderFormComponent = (OptComponent, initializeValue) => {
    switch(OptComponent.type.toLowerCase()) {
        case 'date':
            return 'TextBoxDate'
        case 'lookup':
        case 'combobox':
        case 'month':
            return <ComboBox OptComponent={OptComponent} initializeValue={initializeValue} />
        case 'radiogroupinline':
        case 'radiogroup':
            return 'SelectList'
        case 'checkbox':
            return 'CheckBox'
        case 'multiselect':
            return 'MultiSelect'
        default:
            return `[Option select yet]${OptComponent.caption}`
    }
}