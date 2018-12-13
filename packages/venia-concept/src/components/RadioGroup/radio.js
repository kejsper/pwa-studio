import React, { Component } from "react"
import { node, shape, string } from "prop-types"
import { Radio } from "informed"

import classify from "src/classify"
import defaultClasses from "./radio.css"

export class RadioOption extends Component {
    static propTypes = {
        classes: shape({
            input: string,
            label: string,
            root: string,
        }),
        label: node.isRequired,
        value: node.isRequired,
    }

    render() {
        const { props } = this
        const { classes, label, value, ...rest } = props

        return (
            <label className={classes.root}>
                <Radio
                    {...rest}
                    className={classes.input}
                    label={label}
                    value={value}
                />
                <span className={classes.label}>
                    {label || (value != null ? value : "")}
                </span>
            </label>
        )
    }
}

export default classify(defaultClasses)(RadioOption)
