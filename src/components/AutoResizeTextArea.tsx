import React, { useState, useRef, useEffect } from 'react';

interface AutoResizeTextareaProps {
    className?: string;
    placeholder?: string;
    name:string;
    id:string
}


const AutoResizeTextarea: React.FC<AutoResizeTextareaProps> = ({className, placeholder, id, name}) => {
    const [value, setValue] = useState<string>('');
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    return (
        <textarea
            id={id}
            name={name}
            ref={textareaRef}
            value={value}
            onChange={handleChange}
            className={className}
            placeholder={placeholder}
        />
    );
};

export default AutoResizeTextarea;