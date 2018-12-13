import React, { Component, Fragment } from "react"
import { bool, node, shape, string } from "prop-types"
import { BasicCheckbox, asField } from "informed"
import { compose } from "redux"

import classify from "src/classify"
import Icon from "src/components/Icon"
import defaultClasses from "./checkbox.css"

export class Checkbox extends Component {
    static propTypes = {
        classes: shape({
            icon: string,
            input: string,
            label: string,
            message: string,
            root: string,
        }),
        fieldState: shape({
            value: bool,
        }),
        label: node.isRequired,
    }

    render() {
        const { classes, fieldState, label, ...rest } = this.props
        const { value: checked } = fieldState

        const iconAttrs = {
            "height": 18,
            "width": 18,
        }

        return (
            <Fragment>
                <label className={classes.root}>
                    <span className={classes.icon}>
                        {checked && <Icon name="check" attrs={iconAttrs} />}
                    </span>
                    <BasicCheckbox
                        {...rest}
                        className={classes.input}
                        fieldState={fieldState}
                    />
                    <span className={classes.label}>
                        {label}
                    </span>
                </label>
                <p className={classes.message}>
                    {fieldState.error}
                </p>
            </Fragment>
        )
    }
}

export default compose(classify(defaultClasses), asField)(Checkbox)
