import React from 'react';
import { useField, Field } from 'formik';
import { Input, Icon } from 'antd';
import classNames from 'classnames';

const InputField = ({ label, iconType, type, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div className="input-field-wrapper">
            <div className="form-label-v2">{label}</div>
            {meta.touched && meta.error && <span className="error-message">{meta.error}</span>}
            {type === 'textarea' ? (
                <Input.TextArea
                    size="large"
                    {...field}
                    {...props}
                    prefix={<Icon type={iconType} />}
                    className={classNames({ required: meta.touched && meta.error })}
                    rows={5}
                    style={{ height: 'unset' }}
                />
            ) : (
                <Input
                    size="large"
                    {...field}
                    {...props}
                    prefix={<Icon type={iconType} />}
                    className={classNames({ required: meta.touched && meta.error })}
                />
            )}
        </div>
    );
};

export default InputField;
