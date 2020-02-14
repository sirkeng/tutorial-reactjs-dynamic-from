import React, { useEffect } from 'react'
import { Field } from 'redux-form'
import { find, size } from 'lodash'
import { Combobox } from 'react-widgets'

const TextBoxComboBox = ({ OptComponent, initializeValue }) => {
    useEffect(() => {
        console.log('initializeValue', initializeValue)
        const objDefaultValue = find(OptComponent.items, function(o) {return o.value === OptComponent.default})
        initializeValue.push({ [OptComponent.name]: objDefaultValue})
    })

    const objDefaultValue = find(OptComponent.items, function(o) {return o.value === OptComponent.default})

    return (
        <Field
            name={OptComponent.name}
            caption={OptComponent.caption}
            items={OptComponent.items}
            defaultValue={objDefaultValue}
            component={renderComponent}
        />
    )
}
export default TextBoxComboBox

const renderComponent = (field) => {
    const { input: { onChange }, caption, items, defaultValue } = field

    const filterValue = (values, keyword) => {
        const value = values.text.toLowerCase()
        const search  = keyword.toLowerCase()
        // console.log('filterValue', search, value)
        return value.indexOf(search) > -1
    }

    const renderItemsComponent = (items) => {
		// console.log('renderItemsComponent', items);
		// let itemText = '-';
		const { text } = items;
		// const itemText
		return text ? text : '--- Select ---';
    }
    
    return (
        <div>
            <label>{caption}</label>
            <Combobox
                data={items}
                // value={(!value)?(defaultValue): value}
                onChange={onChange}
                defaultValue={defaultValue}
                textField="text" //field want to show in items
                filter={filterValue}
                itemComponent={renderItemsComponent}
                groupBy={items => items.group}
            />
		</div>
    )
}

